import React from 'react';
import {View,Text,Button} from 'native-base';
import MainHeader from '../../common/components/Header/header'
const NewComplaint = (props) =>{
    return(
        <View>
            <MainHeader />
            <Text>Create Complaint</Text>
            <Button onPress={()=>props.navigation.navigate('Home')}><Text>Go To Home</Text></Button>
        </View>
    )
}

export default NewComplaint;