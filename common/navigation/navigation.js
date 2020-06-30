import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

//import Navigators
import AuthNavigator from './authNavigator';
import MainNavigator from './mainNavigator';



const AppNavigator = () =>{

    let isLoggedin = useSelector(state => state.AuthReducer.user?!!state.AuthReducer.user.isVarified:false)

    // set one more condition of if AuthReducer.user.isActive
    return(
        <NavigationContainer>
            {isLoggedin == true ? (
                <MainNavigator />
            ) : (
                <AuthNavigator />
            )}
        </NavigationContainer>
    )
}

export default AppNavigator;