import React from 'react';
import {View,Text,Button} from 'native-base';

const Profile = (props) =>{
    return(
        <View>
            <Text>Profile</Text>
            <Button onPress={()=>props.navigation.navigate('NewComplaint')}><Text>Go To NewComplaint</Text></Button>
        </View>
    )
}

export default Profile;