import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/Login/login'
import RegisterScreen from '../../screens/Register/register'
import ForgetPasswordScreen from '../../screens/ForgetPassword/forgetPassword'
import ResetPasswordScreen from '../../screens/ResetPassword/reset-password'
import FPVerifyScreen from '../../screens/FPVerify/fp-verify'
import VerifyUserScreen from '../../screens/VerifyAccount/verify-account'

const AuthStack = createStackNavigator()

const AuthNavigator = () => {
    return (
        <AuthStack.Navigator
        screenOptions={
            {
                headerShown:false,
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
                name="Forget Password"
                component={ForgetPasswordScreen}
            />
            <AuthStack.Screen
                name="Verify User"
                component={VerifyUserScreen}
            />
            <AuthStack.Screen
                name="FPVerify"
                component={FPVerifyScreen}
            />
            <AuthStack.Screen
                name="Reset Password"
                component={ResetPasswordScreen}
            />
        </AuthStack.Navigator>
    )
}

export default AuthNavigator;