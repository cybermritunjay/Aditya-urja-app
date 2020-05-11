import React,{useState} from 'react';
import {  Item, Label, Input, Icon } from 'native-base';
import styles from '../styles'
const InputItem = ({label,value,setValue,edit,setEdit,keyboard}) => {
    const [inputRef,setInputRef]=useState()

    return (
        <Item floatingLabel style={styles.inputItemContainer}>
            <Label style={styles.inputItemLabel}>{label}</Label>
            <Input
            
            keyboardType={keyboard?keyboard:'default'}
            value={value} 
            style={styles.input}
            editable={edit} 
            onChangeText={(val) =>setValue(val)} 
            clearTextOnFocus 
            onFocus={() =>setValue('')}
            getRef ={ref => setInputRef(ref)} />
            {!edit?
            <Icon active name='edit-2' type='Feather' onPress={() =>{
                setEdit(true)
                inputRef._root.focus()
            }} />
            :
            null}
            
        </Item>

    )
}


export default InputItem;