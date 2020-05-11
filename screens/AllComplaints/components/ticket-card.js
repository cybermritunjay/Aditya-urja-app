import React from 'react';

import { TouchableOpacity,View, Text, } from 'react-native'
import { Icon,  Card, CardItem, Body } from 'native-base'
import styles from '../styles';

const TicketCard = ({ navigation,user, data }) => {

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Complaint',{id:data.id})}>
    <Card style={styles.card}>
      <CardItem header>
        <Text>{data.title}</Text>
      </CardItem>
      <CardItem>
        <Body>
          <View style={styles.cardbody}>
            <Text>
             <Text style={{color:'#959eb0'}}>name: </Text> <Text style={{color:'#26282a'}}>{user.name}</Text> {"\n"}
             <Text style={{color:'#959eb0'}}>Mobile:</Text> <Text style={{color:'#26282a'}}>{user.mobile}</Text>{"\n"}
             <Text style={{color:'#959eb0'}}>Email:</Text> <Text style={{color:'#1776ea'}}>{user.email}</Text>{'\n'}
             <Text style={{color:'#6b7480'}}>{data.createdAt}</Text>
          </Text>
            <Icon style={{color:'#6b7480'}} name="print" type='FontAwesome' />
          </View>
        </Body>
      </CardItem>
      <CardItem footer>
        <Text>{data.body}</Text>
      </CardItem>
    </Card>
    </TouchableOpacity>
  );
};

export default TicketCard;