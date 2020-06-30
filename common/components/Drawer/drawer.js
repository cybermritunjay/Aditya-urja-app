import React from 'react'
import {DrawerItem,  DrawerContentScrollView } from '@react-navigation/drawer';
import {View} from 'react-native'
import {  Title } from 'native-base';
import styles from './styles'
const CustomDrawer = (props) => {
    const navigation = props.navigation;
    const routes = props.state.routeNames.slice(0, 5)
    return (

        <DrawerContentScrollView {...props}>
            <View style={styles.topContainer}>
                <Title style={styles.mainHeading}>Aditya Urja</Title>
            </View>
            {routes.map((val) => <DrawerItem
                style={styles.individualItem}
            
                label={val} onPress={() => navigation.navigate(val)} key={val} />)}
        </DrawerContentScrollView>
    );

}
export default CustomDrawer;