import React, { useState, useEffect } from 'react';
import { keyboard, Image, View, Keyboard, Alert } from 'react-native';
import { Container, Content, Button, Text, Body, Form, Item as FormItem, Input, Label, Title, Spinner } from 'native-base';
import styles from './styles';
import FormMessage from '../../common/components/FormMessage/form-message';
import { resetPassword } from '../../services/Auth/actions'

export default function ResetPassword(props) {
  const [password, setPassword] = useState('')
  const [cpassword, setCpassword] = useState('')
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onClickChange = () => {
    setLoading(true)
    setError('');
    if (password != cpassword) {
      setLoading(false)
      setError('Password and Confirm Password do not match !!')
      return
    }

    resetPassword({ email: props.route.params.user, password }).then((data) => {
      if (data.success) {
        setError('');
        setLoading(false)
        setCpassword('')
        setPassword('')
        Alert.alert(
          'Password Changed Sucessfull',
          'Your Password Hasbeen Changed SucessFully. You Can Now Login',
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

          <FormItem floatingLabel last>
            <Label style={{ marginBottom: 20, paddingBottom: 10 }}>Password</Label>
            <Input style={styles.input} onChangeText={password => setPassword(password)}
              value={password} secureTextEntry={true} />
          </FormItem>
          <FormItem floatingLabel last style={{marginTop:30}}>
            <Label style={{  paddingBottom: 10 }}>Confirm Password</Label>
            <Input style={styles.input} onChangeText={cpassword => setCpassword(cpassword)}
              value={cpassword} secureTextEntry={true} />
          </FormItem>
          {isLoading ? (
            <Spinner size="small" color="#000000" />
          ) : (
              <Button block
                style={styles.button}
                onPress={() => onClickChange()}
              ><Text style={styles.buttonText}>
                  Change Password
                  </Text>
              </Button>
            )}

        </View>
      </Content>
    </Container>
  )
}
