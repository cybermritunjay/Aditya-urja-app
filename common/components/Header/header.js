import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { useNavigation,useRoute } from '@react-navigation/native';
import {logout} from '../../../services/Auth/actions'

const MainHeader = () => {
  const Route = useRoute()
    const navigation = useNavigation();
    const LogoutHandler = () =>{
        logout()
    }
    return (
        <Header transparent>
          <Left style={{flex:1}}>
            <Button transparent onPress={() =>navigation.openDrawer()}>
                <Icon name='menu' type='Entypo' style={{color:'#000'}} />

            </Button>
          </Left>
          <Body style={{alignItems:'center',flex:4}}>
            <Title style={{color:'#000'}}>Dorsun</Title>
          </Body>
          <Right style={{flex:1}}>
            {Route.name != 'Home'?(<Button transparent onPress={() => navigation.navigate('Home')}>
            <Icon name='home' type='Entypo' style={{color:'#000'}}/>
            </Button>):null}
            <Button transparent onPress={() => navigation.navigate('Profile')}>
            <Icon name='person' style={{color:'#000'}}/>
            </Button>
            <Button transparent onPress={()=> LogoutHandler()}>
              <Icon name='power' style={{color:'#000'}} />
            </Button>
          </Right>
        </Header>
    );

}

export default MainHeader