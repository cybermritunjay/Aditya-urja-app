import React from 'react';
import {View,Text,Button} from 'native-base';

const NewComplaint = (props) =>{
    return(
        <View>
            <Text>Create Complaint</Text>
            <Button onPress={()=>props.navigation.navigate('Home')}><Text>Go To Home</Text></Button>
        </View>
    )
}

export default NewComplaint;