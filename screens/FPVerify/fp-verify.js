import React, { useState,useEffect} from 'react';
import {Image, View,Text,BackHandler,TouchableOpacity} from 'react-native';
import { Container, Content, Button, Body, Form, Item as FormItem, Input, Label, Title, Spinner } from 'native-base';
import styles from './styles';
import { fpVerify,resendOTP } from '../../services/Auth/actions'
import FormMessage from '../../common/components/FormMessage/form-message';
import OtpInputs from './components/otp-input'
import Timer from './components/timer'
const ForgetPasswordVerify = (props) => {
  const user = props.route.params.user
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [OTP, setOTP] = useState("")
  const [enableResend,setEnableResend] = useState(true)
  const [otpLoader,setOtpLoader] = useState(false)

  const ResendOTPHandler = ()=>{
    setOtpLoader(true)
    resendOTP({email:props.route.params.user,mobile:props.route.params.mobile,otp:props.route.params.otp}).then(res=>{
      if(!res.err){
        setEnableResend(false)
        setOtpLoader(false)
      }
    }).catch(err => {
        setOtpLoader(false)
      //console.log(err)})
  })
}

  useEffect(()=>{
    const backHandler = BackHandler.addEventListener('hardwareBackPress',()=>props.navigation.navigate('Login'))
    return () => backHandler.remove()
  })
  const getOTP=()=>{
    return OTP
  }
  const onPressVerify = () => {
    setLoading(true)
    setError('');
    if(OTP.length < 4){
      setLoading(false)
      setError('OTP Too Short')
      return
    }
    fpVerify({email:user,otp:OTP}).then((data) =>{
      if (data.success){
        setError('');
        setLoading(false)
       props.navigation.navigate('Reset Password',{user:user})
    }
    else{
        setError(data.message)
        setLoading(false)
    }
    }) 
  }


  return (
    <Container>
      <Content contentContainerStyle={styles.container}>
        <View style={{ alignItems: 'center' }}>
        <Text>A OTP Ha Been Sent To Your Email and Phone.</Text>
          <Image
            style={{ width: 100, height: 100 }}
            source={require('../../assets/img/icon.png')}
          />
        </View>
        <Form>
          <View>
            {error ? (
              <FormMessage message={error} />
            ) : null}
          </View>
         <OtpInputs getOTP={getOTP} setOtpfunction={setOTP} /> 
          {loading ? (
            <Spinner size="small" color="#000000" />
          ) : (
              <Button block
                style={styles.button}
                onPress={() => onPressVerify()}
              >
                <Text style={styles.buttonText}>Verify</Text>
              </Button>
            )}
            {otpLoader?(<Spinner size='small' color="#000000" />):(enableResend?(<TouchableOpacity style={{cursor:'pointer'}} onPress={()=> ResendOTPHandler()} >
              <Text style={{color:'blue'}}>Resend OTP</Text></TouchableOpacity>
              ):(
              <Timer minutes="1" seconds="0" over={enableResend} setOver={setEnableResend} />
              ))}
        </Form>
      </Content>
    </Container>
  );
}

export default ForgetPasswordVerify;