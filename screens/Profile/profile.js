import React, { useState } from 'react';
import { View, Text, Button, Container, Content, Form, Item, Label, Input, Icon, Spinner, Card, CardItem, Body } from 'native-base';
import MainHeader from '../../common/components/Header/header';
import { connect } from 'react-redux';
import InputItem from './components/input-Item';

const Profile = (props) => {
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState(props.user.name ? props.user.name : '');
    const [mobile, setMobile] = useState(props.user.mobile ? props.user.mobile : '');
    const [password, setPassword] = useState('*******');

    const [house, setHouse] = useState(props.user.house ? props.user.house : '')
    const [street, setStreet] = useState(props.user.street ? props.user.street : '')
    const [city, setCity] = useState(props.user.city ? props.user.city : '')
    const [state, setState] = useState(props.user.state ? props.user.state : '')
    const [pin, setPin] = useState(props.user.pin ? props.user.pin : '')


    console.log(props)
    return (
        <Container>
            <MainHeader />
            <Content>
                <View>
                    <Text 
                    style={{ fontFamily: 'latoBold',fontWeight:700,letterSpacing:2,fontSize:24,paddingLeft:32,paddingTop:10,paddingBottom:10 }}>Edit Profile</Text>
                    <Form style={{margin:10}}>
                        <Card >
                            <CardItem bordered>
                              <View style={{display:'flex',flexDirection:'column',flex:1,paddingRight:10,paddingLeft:10}}>
                                    <Text style={{letterSpacing:3,fontSize:20,marginBottom:15,fontFamily:'latoBold'}}>Basic Information</Text>
                                    <InputItem label='Name'
                                        value={name}
                                        setValue={setName} />
                                    <InputItem label='Mobile'
                                        value={mobile}
                                        setValue={setMobile} />
                                    <InputItem label='Password'
                                        value={password}
                                        setValue={setPassword} />
                                        </View>
                                </CardItem></Card>
                        <Card>
                            <CardItem bordered>
                            <View style={{display:'flex',flexDirection:'column',flex:1,paddingRight:10,paddingLeft:10}}>
                                    <Text style={{letterSpacing:3,fontSize:20,marginBottom:15,fontFamily:'latoBold'}}>Address Information</Text>
                                    <InputItem label='House No.'
                                        value={house}
                                        setValue={setHouse} />
                                    <InputItem label='Street'
                                        value={street}
                                        setValue={setStreet} />
                                    <InputItem label='City'
                                        value={city}
                                        setValue={setCity} />
                                    <InputItem label='State'
                                        value={state}
                                        setValue={setState} />
                                    <InputItem label='Pin'
                                        value={pin}
                                        setValue={setPin} />
                                        </View>
                          </CardItem></Card>
                        {loading ? (
                            <Spinner size="small" color="#000000" />
                        ) : (
                                <Button block><Text>Update Profile</Text>
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