import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container } from 'native-base';
import MainHeader from '../../common/components/Header/header';

const ContactDone = (props) =>{
    
    return (
        <Container>
            <MainHeader />
       
        <View style={{backgroundColor:'#fff',justifyContent:'center',flex:1,padding:32}}>
            <Text style={{fontWeight:'900',fontSize:54,color:'#5dd95d'}}>Thank</Text>
            <Text style={{fontSize:54,fontWeight:'900',marginBottom:20,color:'#5dd95d'}}>You.</Text>
            <Text style={{fontSize:24,marginBottom:20}}>We will be in touch shortly</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={{flexDirection:'row',alignItems:'flex-end'}}>
                <Text style={{backgroundColor:'#000',color:'#fff',padding:5,borderRadius:10}}>Home</Text>
            </TouchableOpacity>
        </View>
        </Container>
    )
}

export default ContactDone;