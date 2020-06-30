import React, { useEffect, useState } from 'react';
import { TextInput, View, Text, Button, Image, KeyboardAvoidingView, BackHandler,Alert, ScrollView } from 'react-native';
import { Item, Label, Input, Spinner } from 'native-base';
import { updateProfile, DispatchUpdate } from '../../services/User/actions';
import { connect } from 'react-redux';
import styles from './styles'
const Address = (props) => {
    const [house, setHouse] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [pin, setPin] = useState('')
    const [loading,setLoading] = useState(false)
    const [keyboardOpen,setKeyboardOpen] = useState(false)
    const name = props.user.name
    const mobile = props.user.mobile

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
    useEffect(()=>{
    const BackListner = BackHandler.addEventListener('hardwareBackPress',BackHandler)

    return () => BackListner.remove()
    },[])

    const submitHander = () => {
        setLoading(true)
        updateProfile({
            token: props.token,
            profile: {
                name,
                mobile,
                address: {
                    house, street, city, state, pin
                }
            }
        }).then(fetchResult => {
            if (fetchResult.success) {
                DispatchUpdate(fetchResult)
                props.navigation.navigate('Home')
            } else {
                setLoading(false)
                console.log(fetchResult)
            }
        }
        ).catch(err => console.log(err))
    }

    return (
        <ScrollView>
        <KeyboardAvoidingView behavior='padding' enabled={keyboardOpen} style={{ display: 'flex', justifyContent: 'center', padding: 20, flex: 1,backgroundColor:'#fff' }}>
            
            <Image style={{width: 40,height: 40,marginBottom: 15}} source={require('../../assets/img/icon.png')} />
            <Text style={{fontSize:21,fontWeight:'700'}}>Hello, {name} </Text>
            <Text style={{marginTop:20,marginBottom:20}}>Before Proceding Further. We Need Your Address. </Text>

            <Item style={styles.inputContainer} floatingLabel>
                <Label>House</Label>
                <Input style={styles.input} value={house} onChangeText={(val) => setHouse(val)} />
            </Item>
            <Item style={styles.inputContainer} floatingLabel>
                <Label>Street</Label>
                <Input style={styles.input} value={street} onChangeText={val => setStreet(val)} />
            </Item>
            <Item style={styles.inputContainer} floatingLabel>
                <Label>City</Label>
                <Input onBlur={() => setKeyboardOpen(false)} onFocus={() => setKeyboardOpen(true)} style={styles.input} value={city} onChangeText={val => setCity(val)} />
            </Item>
            <Item style={styles.inputContainer} floatingLabel>
                <Label>State</Label>
                <Input onBlur={() => setKeyboardOpen(false)} onFocus={() => setKeyboardOpen(true)} style={styles.input} value={state} onChangeText={val => setState(val)} />
            </Item>
            <Item style={styles.inputContainer} floatingLabel>
                <Label>Pin</Label>
                <Input onBlur={() => setKeyboardOpen(false)} onFocus={() => setKeyboardOpen(true)} style={styles.input} value={pin} onChangeText={val => setPin(val)} keyboardType='numeric' maxLength={6} />
            </Item>
            {loading?(<Spinner size='small' color='#000' />):(
            <Button title="Submit" onPress={() => submitHander()} />
            )}
        </KeyboardAvoidingView>
        </ScrollView>
        
    )
}

const mapStateToProps = (state) => {
    ////console.log(state)
    return {
        user: state.AuthReducer.user,
        token: state.AuthReducer.token
    };
}

export default connect(
    mapStateToProps,
)(Address)