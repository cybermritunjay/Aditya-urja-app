import React, { Component } from 'react';
import {View, Content, Container, Text} from 'native-base';
import {Image} from 'react-native'
import styles from './styles'
const CustomLoader = () => {

    return (
        <View style={styles.loadingContainer}>
        <Image source={require('../../../assets/img/loading.gif')} style={styles.image} />
    </View>
    );

}
export default CustomLoader