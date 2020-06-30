import React, { useState, useEffect } from 'react';
import { Image, View, Text, ScrollView, KeyboardAvoidingView, Keyboard } from 'react-native';
import { Container, Content, Button, Form, Item, Input, Label, Spinner } from 'native-base';
import styles from './styles';
import { register } from '../../services/Auth/actions'
import FormMessage from '../../common/components/FormMessage/form-message';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';


const Register = (props) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
  const [password, setPassword] = useState("")
  const [cpassword, setCpassword] = useState("")
  const [keyboardOpen,setKeyboardOpen] = useState(false)



  const ValidateRegister = () => {
    if (email == '') {
      setLoading(false)
      setError('Email Connot Be Empty');
      return false
    }
    if (name == '') {
      setLoading(false)
      setError('Name Connot Be Empty');
      return false
    }
    if (mobile.length < 10) {
      setLoading(false)
      setError('Mobile Connot Be Empty');
      return false
    }
    if (password == '') {
      setLoading(false)
      setError('Password Connot Be Empty');
      return false
    }
    if (cpassword == '') {
      setLoading(false)
      setError('Confirm Password Connot Be Empty');
      return false
    }
    if (password != cpassword) {
      setLoading(false)
      setError('Password And Confirm Password Do Not Match');
      return false
    }
    return true
  }
  const onPressRegister = () => {
    setLoading(true)
    setError('');
    if(!ValidateRegister()){
      return false
    }
    
    let newmobile = mobile
    if (newmobile.length == 10) {
      newmobile = '+91' + newmobile
    } else if (newmobile.length == 12) {
      newmobile = '+' + newmobile
    }
    register({ name, email,mobile:newmobile, password, cpassword }).then((data) => {
      if (data.success) {
        setEmail('')
        setPassword('')
        setName('')
        setCpassword('')
        setError('')
        setMobile('')
        setLoading(false)
        props.navigation.navigate('Verify User', { email:email,mobile:newmobile, userId: data.userId, otp: data.otp })
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
        <KeyboardAvoidingView behavior='padding' enabled={keyboardOpen}>
          <View style={{ alignItems: 'center' }}>
            <Image
              style={{ width: 100, height: 100 }}
              source={require('../../assets/img/icon.png')} />
          </View>
          <View>
              {error ? (
                <FormMessage message={error} />
              ) : null}
            </View>
          <View>
            <Item stackedLabel>
              <Label>Name</Label>
              <Input style={styles.input} keyboardType="default"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={name => setName(name)}
                value={name} />
            </Item>
            <Item stackedLabel>
              <Label>Email</Label>
              <Input style={styles.input} keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={email => setEmail(email)}
                value={email} />
            </Item>
            <Item stackedLabel>
              <Label>Mobile</Label>
              <Input style={styles.input} keyboardType='numeric'
                onChangeText={m => setMobile(m)}
                value={mobile} />
            </Item>
            <Item stackedLabel>
              <Label>Password</Label>
              <Input onBlur={() => password.length <= 5 ? setError('Password Should Be minimum 5 digits Long') : null} style={styles.input} onChangeText={password => setPassword(password)} secureTextEntry={true}
                value={password} onBlur={() => setKeyboardOpen(false)} onFocus={()=>setKeyboardOpen(true)} />
            </Item>
            <Item stackedLabel>
              <Label>Confirm Password</Label>
              <Input style={styles.input} onChangeText={cpassword => setCpassword(cpassword)} secureTextEntry={true}
                value={cpassword} onBlur={() => setKeyboardOpen(false)} onFocus={()=>setKeyboardOpen(true)} />
            </Item>
            {loading ? (
              <Spinner size="small" color="#000000" />
            ) : (
                <Button block
                  style={styles.button}
                  onPress={() => onPressRegister()}
                ><Text style={styles.buttonText}>Register</Text></Button>
              )}
          </View>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
              <Text style={styles.loginLink} >Login</Text>
            </TouchableOpacity>
            <Text style={styles.loginText}> if You already have an account</Text>
          </View>
        </KeyboardAvoidingView>
      </Content>
    </Container>
    
  );
}

export default Register;