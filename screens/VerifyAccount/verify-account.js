import React, { useState, useEffect } from 'react';
import { Image, View, Alert, BackHandler, TouchableOpacity } from 'react-native';
import { Container, Content, Button, Text, Form, Spinner } from 'native-base';
import styles from './styles';
import { verifyUser,resendOTP } from '../../services/Auth/actions'
import FormMessage from '../../common/components/FormMessage/form-message';
import OtpInputs from './components/otp-input'
import Timer from './components/timer'
const VerifyUser = (props) => {
  const userId = props.route.params.userId
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [OTP, setOTP] = useState("")
  const [enableResend,setEnableResend] = useState(true)
  const [otpLoader,setOtpLoader] = useState(false)

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress',()=>props.navigation.navigate('Register'))
    return ()=> backHandler.remove()
  },[])
  const ResendOTPHandler = ()=>{
    setOtpLoader(true)
    resendOTP({email:props.route.params.email,mobile:props.route.params.mobile,otp:props.route.params.otp}).then(res=>{
      if(!res.err){
        setEnableResend(false)
        setOtpLoader(false)
      }
    }).catch(err => {
        setOtpLoader(false)
      //console.log(err)})
  })
}
  const getOTP = () => {
    return OTP
  }
  const onPressVerify = () => {
    setLoading(true)
    setError('');
    if (OTP.length < 4) {
      setLoading(false)
      setError('OTP Too Short')
      return
    }
    verifyUser({ userId: userId, otp: OTP }).then((data) => {
      console.log(data)
      if (data.success) {
        setError('');
        setLoading(false)
        Alert.alert(
          'Account Registered Sucessfull',
          'Your Account Has Been Registered SucessFully. You Can Now Login',
          [
            { text: 'Login', onPress: () => props.navigation.navigate('Login') },
          ],
          { cancelable: false }
        );
      }
      else {
        setError(data.message)
        setLoading(false)
      }
    })
  }


  return (
    <Container>
      <Content contentContainerStyle={styles.container}>
        <View style={{ alignItems: 'center' }}>
        <Text>Your Account Hasbeen Created. Kindly Verify Your Account.</Text>
          <Text>A OTP Ha Been Sent To Your Email and Mobile.</Text>
          <Image
            style={{ width: 100, height: 100 }}
            source={require('../../assets/img/icon.png')}
          />
        </View>
        <View>
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
            
        </View>
      </Content>
    </Container>
  );
}

export default VerifyUser;