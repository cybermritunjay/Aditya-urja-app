import React, { useState, useEffect} from 'react';
import {Image, View,Alert, BackHandler} from 'react-native';
import { Container, Content, Button, Text, Form, Spinner } from 'native-base';
import styles from './styles';
import { verifyUser } from '../../services/Auth/actions'
import FormMessage from '../../common/components/FormMessage/form-message';
import OtpInputs from './components/otp-input'
const VerifyUser = (props) => {
  const userId = props.route.params.userId
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [OTP, setOTP] = useState("")

  useEffect(()=>{
    BackHandler.addEventListener('hardwareBackPress',()=>true)
  })

  const getOTP=()=>{
    return OTP
  }
  const onPressVerify = () => {
    setLoading(true)
    setError('');
    if(OTP.length< 4){
      setLoading(false)
      setError('OTP Too Short')
      return
    }
    verifyUser({userId:userId,otp:OTP}).then((data) =>{
      if (data.success){
        setError('');
        setLoading(false)
        Alert.alert(
          'Password Changed Sucessfull',
          'Your Password Hasbeen Changed SucessFully. You Can Now Login',
          [
            { text: 'Login', onPress: () => props.navigation.navigate('Login') },
          ],
          { cancelable: false }
        );
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
        <Text>Kindly enter this Otp in OTP field. {props.route.params.otp}</Text>
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
        </Form>
      </Content>
    </Container>
  );
}

export default VerifyUser;