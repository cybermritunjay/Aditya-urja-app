import React from 'react';
import {View,Text,Button,Content,Container} from 'native-base';
import MainHeader from '../../common/components/Header/header'
const NewComplaint = (props) =>{
    return(
        <Container>
            <MainHeader />
            <Content>
            <Text>Create Complaint</Text>
            <Button onPress={()=>props.navigation.navigate('Home')}><Text>Go To Home</Text></Button>
        </Content>
        </Container>
    )
}

export default NewComplaint;