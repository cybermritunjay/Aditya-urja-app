import React, {useState } from 'react';
import {Textarea } from 'native-base';
import { Text, View } from 'react-native'
import styles from '../styles'
export default function InputMessage({ value,setFunction,keyboardOpen }) {
    return (
        <View style={styles.inputView}>
            <Text style={styles.inputText}>Message<Text style={{ color: 'red' }}>*</Text></Text>
            <Textarea
                value={value}
                rowSpan={5}
                bordered={true}
                value={value}
                onChangeText={val => setFunction(val)}
                onFocus={()=>keyboardOpen(true)}
                onBlur={() =>keyboardOpen(false)}
            />
        </View>
    )
};