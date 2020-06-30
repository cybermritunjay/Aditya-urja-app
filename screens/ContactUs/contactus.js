import React, { useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { Item, Label, Input, Icon, Container } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {contactus} from '../../services/User/actions'
import MainHeader from '../../common/components/Header/header'
const Contact = (props)=>{
    const [name,setName]= useState('')
    const [email,setEmail]= useState('')
    const [mobile,setMobile] = useState('')
    const [message,setMessage] = useState('')
    const [error,setError] = useState(null)
    const [Loading,setLoading ] = useState(false)
    const submitHandler = ()=>{
        setLoading(true)
        if(name == '' || email== '' || mobile == '' || message == ''){
            setError('Kindly fill all the fields')
            setLoading(false)
            return;
        }
        contactus({name:name,email:email,mobile:mobile,message:message}).then(res=>{
            if(res.success){
                setName('')
                setMessage('')
                setEmail('')
                setMobile('')
                setLoading(false)
                props.navigation.navigate('Contactdone')

            }
            setError(res.message)
            setLoading(false)
        })
    }
    return (
        <Container>
            <MainHeader />
    <View style={{ justifyContent:'center', padding:32,backgroundColor:'#fff',flex:1}}>
        <View>
            <Text style={{fontWeight:'500',fontSize:32}}>Get in touch</Text>
        </View>
        <View>
            <Item floatingLabel style={{marginBottom:20}}>
                <Label style={{paddingTop:0}}>Name</Label>
                <Input value={name} onChangeText={val => setName(val)} style={{paddingBottom:0}} />
            </Item>
            <Item floatingLabel style={{marginBottom:20}}>
                <Label style={{paddingTop:0}}>Email</Label>
                <Input value={email} onChangeText={val => setEmail(val)} style={{paddingBottom:0}} />
            </Item>
            <Item floatingLabel style={{marginBottom:20}}>
                <Label style={{paddingTop:0}}>Mobile</Label>
                <Input value={mobile} onChangeText={val => setMobile(val)} style={{paddingBottom:0}} />
            </Item>
            <Item floatingLabel style={{marginBottom:20}}>
                <Label style={{paddingTop:0}}>Message</Label>
                <Input value={message} onChangeText={val => setMessage(val)} style={{paddingBottom:0}} />
            </Item>
            {Loading?(<ActivityIndicator color= '#5dd95d' />):(
            <TouchableOpacity onPress={() => submitHandler()} style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-end'}}>
                
                <Text style={{fontWeight:'700',marginRight:5}}>Send</Text>
                <Icon style={{backgroundColor:'#5dd95d',color:'#fff',padding:10,borderRadius:25}} type='Entypo' name='mail' />
                
                </TouchableOpacity>
                )}
        </View>
    </View>
    </Container>

    )
}

export default Contact