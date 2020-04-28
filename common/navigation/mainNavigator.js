import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../../screens/Home/home';
import NewComplaintScreen from '../../screens/CreateComplaint/createComplaint'
import ProfileScreen from '../../screens/Profile/profile';

const MainDrawer = createDrawerNavigator()

const MainNavigator = () => {
    return (
        <MainDrawer.Navigator>
            <MainDrawer.Screen
                name="Home"
                component={HomeScreen}
            />
            <MainDrawer.Screen
                name="NewComplaint"
                component={NewComplaintScreen}
            />
            <MainDrawer.Screen
                name="Profile"
                component={ProfileScreen}
            />
        </MainDrawer.Navigator>
    )
}

export default MainNavigator;