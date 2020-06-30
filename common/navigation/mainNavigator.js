import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../../screens/Home/home';
import NewComplaintScreen from '../../screens/CreateComplaint/createComplaint'
import ProfileScreen from '../../screens/Profile/profile';
import HelpScreen from '../../screens/Help/help'
import AllComplaintsScreen from '../../screens/AllComplaints/all-complaints'
import SingleComplaintScreen from '../../screens/SingleComplaint/single-complaint'
import ComplaintCreatedScreen from '../../screens/ComplaintCreated/complain-created'
import AddressScreen from '../../screens/Address/address'
import ContactScreen from '../../screens/ContactUs/contactus'
import ContactDoneScreen from '../../screens/ContactUs/contactus-Complete'
import AboutUsScreen from '../../screens/AboutUs/aboutus'
import CustomDrawer from '../components/Drawer/drawer'
import {useSelector} from 'react-redux';



const MainDrawer = createDrawerNavigator()
const MainNavigator = (props) => {
            return (
            <MainDrawer.Navigator
            drawerType='slide'
            // screenOptions={{gestureEnabled:false}}
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
                name='All Complaints'
                component={AllComplaintsScreen}
            />
            <MainDrawer.Screen
                name="Contact Us"
                component={ContactScreen}
                />
            <MainDrawer.Screen
                name="About Us"
                component={AboutUsScreen}
                />
            <MainDrawer.Screen
                name="Profile"
                component={ProfileScreen}
            />
            <MainDrawer.Screen
                name="Help"
                component={HelpScreen}
            />
            <MainDrawer.Screen
                name="Complaint"
                component={SingleComplaintScreen}
            />
            <MainDrawer.Screen
                name="Complaint Created"
                component={ComplaintCreatedScreen}
            />
            <MainDrawer.Screen
                name="Address"
                component={AddressScreen}
                />
                <MainDrawer.Screen
                name="Contactdone"
                component={ContactDoneScreen}
                />
            
            </MainDrawer.Navigator>
            )
}
const mapStateToProps = (state) => {
    return {
        user: state.AuthReducer.user,
        token: state.AuthReducer.token
    };
}

export default connect(
    mapStateToProps,
)(MainNavigator);