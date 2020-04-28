import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/Login/login'
import RegisterScreen from '../../screens/Register/register'
import ForgetPasswordScreen from '../../screens/ForgetPassword/forgetPassword'

const AuthStack = createStackNavigator()

const AuthNavigator = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="Login"
                component={LoginScreen}                
            />
            <AuthStack.Screen
                name="Register"
                component={RegisterScreen}
            />
            <AuthStack.Screen
                name="ForgetPassword"
                component={ForgetPasswordScreen}
            />
        </AuthStack.Navigator>
    )
}

export default AuthNavigator;