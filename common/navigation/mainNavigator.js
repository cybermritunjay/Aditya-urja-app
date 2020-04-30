import React from 'react';
import { createDrawerNavigator, DrawerItem, DrawerItemList, DrawerContentScrollView } from '@react-navigation/drawer';
import HomeScreen from '../../screens/Home/home';
import NewComplaintScreen from '../../screens/CreateComplaint/createComplaint'
import ProfileScreen from '../../screens/Profile/profile';
import CustomDrawer from '../components/Drawer/drawer'

const MainDrawer = createDrawerNavigator()
const MainNavigator = () => {
    return (
        <MainDrawer.Navigator
            drawerType='slide'
            drawerContent={props => <CustomDrawer {...props} />}>
            <MainDrawer.Screen
                name="Home"
                component={HomeScreen}
            />
            <MainDrawer.Screen
                name="New Complaint"
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