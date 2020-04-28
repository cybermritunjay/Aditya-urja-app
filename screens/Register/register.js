import React from 'react';
import {View,Text,Button} from 'native-base';

const Register = (props) =>{
    return(
        <View>
            <Text>Register</Text>
            <Button onPress={()=>props.navigation.navigate('ForgetPassword')}><Text>Go To Forget Password</Text></Button>
        </View>
    )
}

export default Register;