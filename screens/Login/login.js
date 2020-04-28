import React from 'react';
import {View,Text,Button} from 'native-base';

import {login}  from '../../services/Auth/actions'


const Login = (props) =>{
    const onPressHandler =() =>{
      login()
      //console.log(useSelector(state => !!state.user))
    }

    return(
        <View>
            <Text>Login</Text>
            <Button onPress={()=>props.navigation.navigate('Register')}><Text>Go To Register</Text></Button>
            <Button onPress={()=>onPressHandler()} ><Text>Login Now</Text></Button>
        </View>
    )
}

export default Login;