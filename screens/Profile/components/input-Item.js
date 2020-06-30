import React, { useState, useRef, useEffect } from 'react';
import { Item, Label, Input, Icon } from 'native-base';
import styles from '../styles'
import { Text, TextInput, View, Button } from 'react-native';
const InputItem = ({ label, value, setValue, edit, setEdit, keyboard }) => {
    const inputRef = useRef(null)
    useEffect(()=>{
        //console.log(value)
    },[])
    return (
        <View style={styles.inputItemContainer}>
            <Text style={styles.inputItemLabel}>{label}</Text>
            <View style={{display:'flex',flexDirection:'row',borderWidth:1,borderColor:'#ccc',
        borderRadius:5, justifyContent:'center',alignItems:'center'}}>
            <TextInput
                keyboardType={keyboard ? keyboard : 'default'}
                value={value}
                style={styles.input}
                onChangeText={(val) => setValue(val)}
                clearTextOnFocus
                onFocus={() => {
                    setEdit(true)}}
                ref={inputRef}
                 />
                 {!edit?(<Icon active name='edit-2' type='Feather' style={{fontSize:18,paddingRight:5}} onPress={() =>{inputRef.current.focus()}} />
):null}
                    </View>
        </View>

    )
}


export default InputItem;