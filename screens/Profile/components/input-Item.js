import React,{useState, useRef, createRef} from 'react';
import { View, Text, Button, Container, Content, Form, Item, Label, Input, Icon } from 'native-base';
import { TextInput,TouchableOpacity } from 'react-native';
const InputItem = ({label,value,setValue}) => {
    const [inputRef,setInputRef]=useState()

    const  [edit,setEdit] = useState(false)
    return (
        <Item floatingLabel style={{marginBottom:10,padding:3}}>
            <Label style={{margin:5}}>{label}</Label>
            <Input
            value={value} 
            style={{paddingTop:19,paddingBotton:0}}
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