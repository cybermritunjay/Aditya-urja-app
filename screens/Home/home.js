import React, { useState, useEffect } from 'react';
import { Container, Content } from 'native-base';
import { connect } from 'react-redux';
import MainHeader from '../../common/components/Header/header'
import styles from './styles';
import CustomButton from './components/customButton';
// import HelpLinkContainer from './components/help-link-container'
// import { getAllHelp } from '../../services/Help/actions'
import CustomLoader from '../../common/components/Loading/loading'
import { Alert, View, Text, BackHandler } from 'react-native';
import {Picker,PickerIOS} from 'react-native'
const Home = (props) => {
    const [help, setHelp] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedValue,setSelectedValue]= useState('')

    const backHandler = () => {
        Alert.alert(
          'Exit App',
          'Do you want to exit?',
          [
            {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'Yes', onPress: () => BackHandler.exitApp()},
          ],
          { cancelable: false });
          return true;
      }
    useEffect(() => {
        if(!props.user.address){
            props.navigation.navigate('Address')
        }
        const backListner = BackHandler.addEventListener('hardwareBackPress',backHandler)
        setLoading(false)
        // getAllHelp().then((fetchResult) => {
        //     if (fetchResult.success) {
        //         setHelp(fetchResult.helps)
        //         setLoading(false)
        //     } else {

        //         Alert.alert("Opps!!", "This is Really Emberacing But Something Went Wrong. Kindly Restart The App.")
        //     }
        // })
        return () => backListner.remove()
    }, [])
    return (loading ? (
        <CustomLoader />
    ) : (
            <Container>
                <MainHeader />
                <Content>
                    <CustomButton
                        navigation={props.navigation}
                        name={'Submit a Ticket'}
                        link={'New Complaint'}
                        underText={'Submit a new issue to a department'}
                        icon={'edit'}
                    />
                    <CustomButton
                        navigation={props.navigation}
                        name={'View Existing Tickets'}
                        link={'All Complaints'}
                        underText={'View tickets you submitted in the past'}
                        icon={'file'}
                    />
                    <Text style={styles.warningText}>*Before Contacting With Us. Please Manually Check Your Model By Given Below Instructions.</Text>
                    <View style={[styles.productPicker,{borderWidth:1,borderStyle:'solid',borderColor:'#ccc'}]}>
                    <Picker onValueChange={val => setSelectedValue(val)}>
                        <Picker.Item label='Select Poduct' value='' />
                        <Picker.Item label='Solar' value='Solar' />
                    </Picker>
                    {selectedValue == 'Solar'?(
                    <View style={{marginTop:10}}>
                        <Text style={{padding:5}}>Check if overhead tank is full or empty.</Text>
                        <Text style={{padding:5}}>Check solar water heater inlet water supply.</Text>
                        <Text style={{padding:5}}>Check solar water heater outlet water supply.</Text>
                        <Text style={{padding:5}}>Keep inlet valve of water supply of solar water heater close from 11am to 4pm.</Text>
                    </View>
                    ):null}
                    </View>
                    {/* <Text style={styles.helpTitle} >Hello, How Can We Help?</Text> */}
                    {/* {help ? Object.entries(help).map(([key, value]) => <HelpLinkContainer style={styles.helpParent} key={key} navigation={props.navigation} title={key} dat={value} />) : null} */}
                </Content>
            </Container>
        )
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
)(Home);