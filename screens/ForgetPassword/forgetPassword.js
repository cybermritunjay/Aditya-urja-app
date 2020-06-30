import React, { useState, useEffect } from 'react';
import { Image, View,Text } from 'react-native';
import { Container, Content, Button, Form, Item as FormItem, Input, Label,Spinner } from 'native-base';
import styles from './styles';
import FormMessage from '../../common/components/FormMessage/form-message';
import {forgetPassword} from '../../services/Auth/actions'
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function ForgetPassword({navigation}) {
    const [email,setEmail] = useState('')
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const onClickRequest= () =>{
        setLoading(true)
        setError('');
        if(email == ''){
          setLoading(false)
          setLoading('Email Cannot Be Empty')
        }
        forgetPassword({email}).then((data) =>{
          if (data.success){
            setError('');
            setLoading(false)
            navigation.navigate('FPVerify',{user:email,otp:data.otp,mobile:data.mobile})
        }
        else{
            setError(data.error)
            setLoading(false)
        }
        })        
    }
    return (
        <Container>    
        <Content contentContainerStyle={styles.container}>
          <View style={{ alignItems: 'center' }}>
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
            <FormItem floatingLabel>
              <Label style={{marginBottom:20,paddingBottom:20}}>Email</Label>
              <Input keyboardType="email-address"
              style={styles.input}
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={email => setEmail( email )}
                value={email} />
            </FormItem>
            {loading ? (
              <Spinner size="small" color="#000000" />
            ) : (
                <Button block
                  style={styles.button}
                  onPress={() => onClickRequest()}
                ><Text style={styles.buttonText}>
                  Request OTP
                  </Text>
                </Button>
              )}

          </Form>
          <View style={{display:'flex',flexDirection:'row'}}>
          
            <TouchableOpacity onPress={() => navigation.navigate('Register')}><Text style={styles.signupLink} >SignUp</Text></TouchableOpacity>
            <Text style={styles.signupText} > if You do not have an account</Text>
            </View>
        </Content>
    </Container>
    )
}
