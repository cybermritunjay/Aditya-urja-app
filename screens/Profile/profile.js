import React from 'react';
import {View,Text,Button,Container,Content} from 'native-base';
import MainHeader from '../../common/components/Header/header'
const Profile = (props) =>{
    return(
        <Container>
            <MainHeader />
            <Content>
            <Text>Profile</Text>
            <Button onPress={()=>props.navigation.navigate('New Complaint')}><Text>Go To NewComplaint</Text></Button>
        </Content>
        </Container>
    )
}

export default Profile;