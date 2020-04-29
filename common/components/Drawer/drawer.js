import React from 'react'
import {DrawerItem,  DrawerContentScrollView } from '@react-navigation/drawer';
import { View, Title } from 'native-base';
import styles from './styles'
const CustomDrawer = (props) => {
    const navigation = props.navigation;
    const routes = props.state.routeNames.slice(0, 2)
    return (

        <DrawerContentScrollView {...props}>
            <View style={styles.topContainer}>
                <Title style={styles.mainHeading}>Aditya Urja</Title>
            </View>
            {routes.map((val) => <DrawerItem
                style={styles.individualItem}
                label={val} onPress={() => navigation.navigate(val)} key={null} />)}
        </DrawerContentScrollView>
    );

}
export default CustomDrawer;