import React from 'react';
import {View,Text,Image,Dimensions} from 'react-native'
import MainHeader from '../../common/components/Header/header';
import { Container } from 'native-base';

export default function About() {
  const ImageWidth= Dimensions.get('window').width*0.7
  const ImageHeight = (ImageWidth/100)*40
  return (
    <Container>
        <MainHeader />
    <View style={{backgroundColor:'#fff',flex:1,justifyContent:'center',alignItems:'center'}}>
    <Image style={{width:ImageWidth,height:ImageHeight}} source={require('../../assets/img/New.png')} />
    <View style={{width:ImageWidth,marginTop:20}}>
    <Text style={{fontSize:14,textAlign:'center'}}>3, Chatrapati Nagar, Ayodhya Bypass Road, Bhopal, 464001</Text>
    </View>
    <View style={{flexDirection:'row',marginTop:50,width:'100%',padding:10}}>
    <View style={{flex:1,alignItems:'center'}}>
      <Text style={{fontWeight:'700'}}>Call us on</Text>
      <Text>+91-8569741239</Text>
    </View>
    <View style={{flex:1,alignItems:'center'}}>
      <Text style={{fontWeight:'700'}}>Mail us on</Text>
      <Text>support@dorsun.in</Text>
    </View>
    </View>
    </View>
    </Container>
  )
}
