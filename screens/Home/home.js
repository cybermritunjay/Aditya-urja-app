import React from 'react';
import {Text,Button,Container,Content} from 'native-base';
import MainHeader from '../../common/components/Header/header'
import {logout} from '../../services/Auth/actions'
const Home = (props) =>{

    return(
        
        <Container>
            <MainHeader />
            <Content>
            <Text>Home</Text>
            <Button onPress={()=>props.navigation.navigate('Profile')}><Text>Go To Profile</Text></Button>
            <Button transparent onPress={()=> logout()}>
              <Text >out</Text>
            </Button>
            </Content>
        </Container>
    )
}

export default Home;