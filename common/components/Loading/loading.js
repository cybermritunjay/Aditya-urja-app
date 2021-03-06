import React, { Component } from 'react';
import {View, Content, Container, Text} from 'native-base';
import {Image,ActivityIndicator} from 'react-native'
import styles from './styles'
const CustomLoader = () => {

    return (
        <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
    </View>
    );

}
export default CustomLoader
