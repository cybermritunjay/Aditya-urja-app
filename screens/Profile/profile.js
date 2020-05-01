import React, { useState } from 'react';
import { View, Text, Button, Container, Content, Form, Spinner, Card, CardItem } from 'native-base';
import MainHeader from '../../common/components/Header/header';
import { connect } from 'react-redux';
import InputItem from './components/input-Item';
import FormMessage from '../../common/components/FormMessage/form-message';
import {updateProfile} from '../../services/User/actions'
import { Alert } from 'react-native';
import styles from './styles'
const Profile = (props) => {
    const [loading, setLoading] = useState(false)
    const [error,setError] = useState(null)

    const [name, setName] = useState(props.user.name ? props.user.name : '');
    const [editName, setEditName] = useState(false)

    const [mobile, setMobile] = useState(props.user.mobile ? props.user.mobile : '');
    const [editMobile, setEditMobile] = useState(false)

    const [password, setPassword] = useState('*******');
    const [editPassword, setEditPassword] = useState(false)

    const [house, setHouse] = useState(props.user.house ? props.user.house : '')
    const [editHouse, setEditHouse] = useState(false)

    const [street, setStreet] = useState(props.user.street ? props.user.street : '')
    const [editStreet, setEditStreet] = useState(false)

    const [city, setCity] = useState(props.user.city ? props.user.city : '')
    const [editCity, setEditCity] = useState(false)

    const [state, setState] = useState(props.user.state ? props.user.state : '')
    const [editState, setEditState] = useState(false)

    const [pin, setPin] = useState(props.user.pin ? props.user.pin : '')
    const [editPin, setEditPin] = useState(false)

    const validateProfileData = () =>{
        if(editName){
            if(name == ''){
                return{
                    isvalid=false,
                    error = 'Name Cannot Be Empty'
                }
            }
        }
        if(editMobile){
            if(mobile == ''){
                return{
                    isValid=false,
                    error = 'Mobile Cannot Be Empty'
                }
            }
        }
        if(editPassword){
            if(password == ''){
                return{
                    isValid=false,
                    error = 'Password Cannot Be Empty'
                }
            }
        }
        return {
            isvalid:true,
            error:''
        }
    }

    const onClickUpdateProfile = () =>{
        setError('')
        setLoading(true)
        let valiadtion = validateProfileData()
        if(valiadtion.isvalid){
            updateProfile({
                token: props.token,
                profile: {
                  name,
                  email,
                  mobile,
                  address: {
                    house, street, city, state, pin
                  }
                }
            }).then(fetchResult =>{
                if(fetchResult.success){
                    setLoading(false)
                    Alert.alert('Success','Profile Updated Sucessfully')
                }else{
                    setLoading(false)
                    setError(fetchResult.error)
                }
            })
        }else{
            setLoading(false)
            setError(valiadtion.error)
        }
    }
    return (
        <Container>
            <MainHeader />
            <Content>
                <View>
                    <Text
                        style={styles.mainTitleText}>Edit Profile</Text>
                    <Form style={styles.form}>
                    {error ? (
                            <FormMessage message={error} />
                        ) : null}
                        <Card >
                            <CardItem bordered>
                                <View style={styles.cardViewContainer}>
                                    <Text style={styles.seconderyHeading}>Basic Information</Text>
                                    <InputItem label='Name'
                                        value={name}
                                        setValue={setName}
                                        edit={setEditName}
                                        setEdit={setEditName} />
                                    <InputItem label='Mobile'
                                        value={mobile}
                                        setValue={setMobile}
                                        edit={editMobile}
                                        setEdit={setEditMobile} />
                                    <InputItem label='Password'
                                        value={password}
                                        setValue={setPassword}
                                        edit={editPassword}
                                        setEdit={setEditPassword} />
                                </View>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem bordered>
                                <View style={styles.cardViewContainer}>
                                    <Text style={styles.seconderyHeading}>Address Information</Text>
                                    <InputItem label='House No.'
                                        value={house}
                                        setValue={setHouse}
                                        edit={editHouse}
                                        setEdit={setEditHouse} />
                                    <InputItem label='Street'
                                        value={street}
                                        setValue={setStreet}
                                        edit={editStreet}
                                        setEdit={setEditStreet} />
                                    <InputItem label='City'
                                        value={city}
                                        setValue={setCity}
                                        edit={editCity}
                                        setEdit={setEditCity} />
                                    <InputItem label='State'
                                        value={state}
                                        setValue={setState}
                                        edit={editState}
                                        setEdit={setEditState} />
                                    <InputItem label='Pin'
                                        value={pin}
                                        setValue={setPin}
                                        edit={editPin}
                                        setEdit={setEditPin} />
                                </View>
                            </CardItem>
                        </Card>
                        {loading ? (
                            <Spinner size="small" color="#000000" />
                        ) : (
                                <Button block onPress={() => onClickUpdateProfile()}><Text>Update Profile</Text>
                                </Button>
                            )}
                    </Form>
                </View>
            </Content>
        </Container>
    )
}
const mapStateToProps = (state) => {
    //console.log(state)
    return {
        user: state.AuthReducer.user,
        token: state.AuthReducer.token
    };
}

export default connect(
    mapStateToProps,
)(Profile);