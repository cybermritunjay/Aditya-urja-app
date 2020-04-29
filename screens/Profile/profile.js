import React from 'react';
import {View,Text,Button} from 'native-base';
import MainHeader from '../../common/components/Header/header'
const Profile = (props) =>{
    return(
        <View>
            <MainHeader />
            <Text>Profile</Text>
            <Button onPress={()=>props.navigation.navigate('New Complaint')}><Text>Go To NewComplaint</Text></Button>
        </View>
    )
}

export default Profile;