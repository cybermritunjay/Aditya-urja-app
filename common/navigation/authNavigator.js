import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/Login/login'
import RegisterScreen from '../../screens/Register/register'
import ForgetPasswordScreen from '../../screens/ForgetPassword/forgetPassword'
import transitionConfig from '../../services/config/transactionConfig';
const AuthStack = createStackNavigator()

const AuthNavigator = () => {
    return (
        <AuthStack.Navigator
        screenOptions={
            {
                headerShown:false,
               //...transitionConfig
            }
        }
        >
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