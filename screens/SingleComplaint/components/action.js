import React, { useRef, useEffect } from 'react';
import { Content, Header, Footer, Container, Card, CardItem, Body, Icon } from 'native-base';
import {View, Text, Dimensions} from 'react-native'
import styles from '../styles';


export default function Action({ action }) {
    const Width = Dimensions.get('window').width

    const renderSelf = () =>{
        return (
            <View style={{backgroundColor:'#408fec',borderRadius:5,padding: 5,width:((Width/100)*80)}}>
                <Text style={{color:'#fff',fontSize:15}}>{action.message}</Text>
                <Text style={{color:'#fff',fontSize:12,justifyContent:'flex-end'}}>{action.date}</Text>
            </View>
        )
    }
    
    const rendergent = () =>{
        return (
            <View style={{backgroundColor:'#edf0f5',borderRadius:5,padding: 5,width:((Width/100)*80)}}>
                <Text style={{color:'#000',fontSize:15}}>{action.message}</Text>
                <Text style={{color:'#000',fontSize:12,justifyContent:'flex-end'}}>{action.date}</Text>
            </View>
        )
        
    }
    return(
    <View style={[styles.ticketAction,{justifyContent:action.sender=='user'?'flex-end':'flex-start'}]}>
        {action.sender == 'user'?renderSelf():rendergent()}
    </View>
    );
}   
