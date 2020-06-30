import React from 'react';
import { Item, Input } from 'native-base';
import { Text, View } from 'react-native'

import styles from '../styles';

const InputField = (props) => {
    const { name, setFunction, value, type } = props
    //console.log(props)
    return (
        <View style={styles.inputView}>
            <Text style={styles.inputText}>{name}<Text style={{ color: 'red' }}>*</Text></Text>
            <Item regular>
                <Input
                    value={value}
                    onChangeText={val => setFunction(val)}
                    keyboardType={type}
                    onFocus={()=> props.setKeyboard?props.setKeyboard(true):null}
                    onBlur = {()=> props.setKeyboard?props.setKeyboard(false):null}
                />
            </Item>
        </View>
    )
};
export default InputField