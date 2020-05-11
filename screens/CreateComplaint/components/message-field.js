import React, { Component, useState } from 'react';
import { Item, Textarea,Picker } from 'native-base';
import {Text, View} from 'react-native'
import styles from '../styles'
export default function InputMessage({setFunction }) {
    const [value,setValue] = useState('')
    return (
        <View style={styles.inputView}>
            <Text style={styles.inputText}>Message<Text style={{color:'red'}}>*</Text></Text>
            <Textarea 
            value={value} 
            rowSpan={5} 
            bordered  
            onChangeText={val => setValue(val)}
            onBlur={() =>setFunction(value)}
            />
        </View>
    )};