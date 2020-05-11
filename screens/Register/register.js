import React, { useState } from 'react';
import { Image, View,Text,ScrollView } from 'react-native';
import { Container, Content, Button, Form, Item as FormItem, Input, Label,Spinner } from 'native-base';
import styles from './styles';
import { register } from '../../services/Auth/actions'
import FormMessage from '../../common/components/FormMessage/form-message';


const Register = (props) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
  const [password, setPassword] = useState("")
  const [cpassword, setCpassword] = useState("")

  const ValidateRegister = ()=>{
    if(email == ''){
      setLoading(false)
      setError('Email Connot Be Empty');
      return false
    }
    if(name == ''){
      setLoading(false)
      setError('Name Connot Be Empty');
      return false
    }
    if(mobile == ''){
      setLoading(false)
      setError('Mobile Connot Be Empty');
      return false
    }
    if(password == ''){
      setLoading(false)
      setError('Password Connot Be Empty');
      return false
    }
    if(cpassword == ''){
      setLoading(false)
      setError('Confirm Password Connot Be Empty');
      return false
    }
    if(password != cpassword){
      setLoading(false)
      setError('Password and Confirm Password Do not MAtch');
      return false
    }
  }
  const onPressRegister = () => {
    setLoading(true)
    setError('');
    register({ name, email, mobile, password, cpassword }).then((data) => {
      if (data.success) {
        setError('');
        setLoading(false)
        props.navigation.navigate('Verify User', { userId: data.userId,otp:data.otp })
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
        <ScrollView showsHorizontalScrollIndicato={false} showsVerticalScrollIndicator={false} >
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
            <Label style={{marginBottom:20,paddingBottom:20}}>Name</Label>
            <Input style={styles.input} keyboardType="default"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={name => setName(name)}
              value={name} />
          </FormItem>
          <FormItem floatingLabel>
            <Label style={{marginBottom:20,paddingBottom:20}}>Email</Label>
            <Input style={styles.input} keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={email => setEmail(email)}
              value={email} />
          </FormItem>
          <FormItem floatingLabel>
            <Label style={{marginBottom:20,paddingBottom:20}}>Mobile</Label>
            <Input style={styles.input} keyboardType='number-pad'
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={mobile => setMobile(mobile)}
              value={mobile} />
          </FormItem>
          <FormItem floatingLabel>
            <Label style={{marginBottom:20,paddingBottom:20}}>Password</Label>
            <Input style={styles.input} onChangeText={password => setPassword(password)}
              value={password} />
          </FormItem>
          <FormItem floatingLabel last>
            <Label style={{marginBottom:20,paddingBottom:20}}>Confirm Password</Label>
            <Input style={styles.input} onChangeText={cpassword => setCpassword(cpassword)}
              value={cpassword} />
          </FormItem>
          {loading ? (
            <Spinner size="small" color="#000000" />
          ) : (
              <Button block
                style={styles.button}
                onPress={() => onPressRegister()}
              ><Text style={styles.buttonText}>Register</Text></Button>
            )}
        </Form>
        <Text
          onPress={() => props.navigation.navigate('Login')}
          style={styles.loginText}>
          <Text style={styles.loginLink} >
            Login
          </Text> if You already have an account</Text>
          </ScrollView>
      </Content>
    </Container>
  );
}

export default Register;