import React from 'react';
import { Item, Input} from 'native-base';
import {Text, View} from 'react-native'

import styles from '../styles';

const InputField = ({ name,setFunction,value}) =>{
    return (
        <View style={styles.inputView}> 
        <Text style={styles.inputText}>{name}<Text style={{color:'red'}}>*</Text></Text>
        <Item regular>
            <Input 
            value ={value} 
            onChangeText={val => setFunction(val)} 
            />
        </Item>
        </View>
    )};
export default InputField