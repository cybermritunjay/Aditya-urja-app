import React, { Component } from 'react';
import {View, Content, Container, Text} from 'native-base';
import {Image,ActivityIndicator} from 'react-native'
import styles from './styles'
const CustomLoader = () => {

    return (
    <View style={[styles.loadingContainer,{position:'absolute',top:0,bottom:0,left:0,right:0,zIndex:999}]}>
        <ActivityIndicator size="large" color="#0000ff" />
    </View>
    );

}
export default CustomLoader
