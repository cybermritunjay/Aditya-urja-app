import React from 'react';
import {View,Text,Button} from 'native-base';

const ForgetPassword = (props) =>{
    return(
        <View>
            <Text>Forget Password</Text>
            <Button onPress={()=>props.navigation.navigate('Login')}><Text>Go To Login</Text></Button>
        </View>
    )
}

export default ForgetPassword;