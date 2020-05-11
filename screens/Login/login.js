import React, { useState } from 'react';
import { Image, View,Text } from 'react-native';
import { Container, Content, Button, Form, Item as FormItem, Input, Label, Spinner } from 'native-base';
import FormMessage from '../../common/components/FormMessage/form-message';
import { login } from '../../services/Auth/actions'
import styles from './styles';
export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const onClickLogin = async () => {
        
        setLoading(true)
        setError('');
        if(email ==''){
            setLoading(false)
            setError("Email Can Not Be Empty")
            return
        }
        if(password ==''){
            setLoading(false)
            setError("Password Can Not Be Empty")
            return
        }
        let fetchResult = await login({ email, password })
        console.log(fetchResult)
        if (fetchResult.success) {
            setError('')
            setLoading(false)
        } else {
            setError(fetchResult.error)
            setLoading(false)
        }
    }
    return (
        <Container>
            <Content contentContainerStyle={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
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
                            onChangeText={email => setEmail(email)}
                            value={email} />
                    </FormItem>
                    <FormItem floatingLabel last>
                        <Label>Password</Label>
                        <Input
                            style={styles.input}
                            onChangeText={password => setPassword(password)}
                            value={password}
                            secureTextEntry={true} />
                    </FormItem>
                    <Text onPress={() => navigation.navigate('Forget Password')} style={styles.forgetPassLink}>Forget Password?</Text>
                    {isLoading ? (
                        <Spinner size="small" color="#000000" />
                    ) : (
                            <Button block
                                style={styles.button}
                                onPress={() => onClickLogin()}
                            ><Text style={styles.buttonText}>Login</Text>
                            </Button>
                        )}
                </Form>
                <Text
                    onPress={() => navigation.navigate('Register')}
                    style={styles.signupText}>
                    <Text
                        style={styles.signupLink} >
                        SignUp </Text>
                    if You do not have an account
                </Text>
            </Content>
        </Container>
    )
}