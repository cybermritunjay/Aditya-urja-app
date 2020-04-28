import React from 'react';
import {View,Text,Button} from 'native-base';
import {logout}  from '../../services/Auth/actions'

const Home = (props) =>{
    const onPressHandler =() =>{
        logout()
      }
    return(
        <View>
            <Text>Home</Text>
            <Button onPress={()=>props.navigation.navigate('Profile')}><Text>Go To Profile</Text></Button>
            <Button onPress={()=>onPressHandler()} ><Text>LogOut Now</Text></Button>
            <Button onPress={() => props.navigation.openDrawer()} ><Text>Menu</Text></Button>
        </View>
    )
}

export default Home;