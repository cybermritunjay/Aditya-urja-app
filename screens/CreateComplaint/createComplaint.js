import React, { useEffect, useState } from 'react';
import { Icon, Content, Container, Spinner, Button, Card, CardItem, Body, } from 'native-base';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import MainHeader from '../../common/components/Header/header'
import CustomLoader from '../../common/components/Loading/loading';
import BlurLoader from '../../common/components/Loading/overlayLoader'
import FormMessage from '../../common/components/FormMessage/form-message';
import InputField from "./components/input-field";
import InputSelect from "./components/input-select";
import InputMessage from "./components/message-field";
import { createNewComplaint, fetchBrands, fetchModels } from '../../services/Complaints/actions'
import styles from './styles'
const capacity =[{id:1,name:'100 LDP'},{id:2,name:'150 LDP'},{id:3,name:'200 LDP'},{id:4,name:'250 LDP'},{id:5,name:'300 LDP'},{id:6,name:'500 LDP'},{id:7,name:'Other'}]

const NewComplaint = (props) => {
    const [loading, setLoading] = useState(true)
    const [blurLoader, setBlurLoader] = useState(false)
    const [error, setError] = useState(null)
    const [brands, setBrands] = useState({})
    const [body, setBody] = useState("")
    const [subject, setSubjected] = useState("")
    const [selectedBrand, setSelectedBrand] = useState(null)
    const [model, setModel] = useState('')
    const [selectedcapacity,setSelectedCapacity] = useState(null)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [openExtras, setOpenExtras] = useState(false)
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [mobile, setMobile] = useState('')
    const [setExtras, setSetExtras] = useState(false)
    const [keyboardOpen, setKeyboardOpen] = useState(false)
    const [extrasKeyboardOpen, setExtrasKeyboardOpen] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetchBrands().then((fetchedData) => {
            // //console.log(fetchedData)
            if (fetchedData.success) {
                setBrands(fetchedData.brands)
                setLoading(false)
            } else {
                setError(fetchedData.error)
                setLoading(false)
            }
        })

    }, [])
    const onSelectBrand = (bra) => {
        setSelectedBrand(bra)
    }
    const onSelectCapacity = (cap) => {
        setSelectedCapacity(cap)
    }
    const validateComplaintData = (data) => {
        if (data.subject == "") {
            setError("You Must Enter A Subject")
            return false;
        } else if (data.capacity == null) {
            setError("You Must Select a Model")
            return false;
        } else if (data.body == "") {
            setError("You Must Explain your Problem Briefly")
            return false;
        }
        return true
    }

    const getAddress = () => {
        return `${props.user.address.house},${props.user.address.street},${props.user.address.city},${props.address.state},${props.address.pin}`
    }
    const submitComplaint = () => {
        setBlurLoader(true)
        setIsSubmitted(true)
        setError("")
        if (!validateComplaintData({ subject, capacity: selectedcapacity, body })) {
            setBlurLoader(false)
            setIsSubmitted(false)
            return
        }
        createNewComplaint({ user: props.user._id,product:selectedBrand, subject, model: model,capacity:selectedcapacity, body, email: email ? email : '', mobile: mobile ? mobile : '', address: address ? address : getAddress() })
            .then((data) => {
                if (data.success) {
                    setLoading(true)
                    setBlurLoader(false)
                    setError(null)
                    setModel('')
                    setSelectedCapacity(null)
                    setSelectedBrand(null)
                    setOpenExtras(false)
                    setEmail('')
                    setAddress('')
                    setMobile('')
                    // setModels({})
                    // setBrands({})
                    setBody("")
                    setSubjected("")
                    setSetExtras(false)
                    setKeyboardOpen(false)
                    setExtrasKeyboardOpen(false)
                    setIsSubmitted(false)
                    setLoading(false)
                    props.navigation.navigate('Complaint Created', { complaintID: data.complaintID })
                } else {
                    setError(data.error)
                    setBlurLoader(false)
                    setIsSubmitted(false)
                }
            })
    }
    return (
        <Container>
            {openExtras ? (
                <KeyboardAvoidingView behavior='padding' enabled={extrasKeyboardOpen} style={styles.extrasContainer}>
                    <Card>
                        <CardItem style={styles.extrasHeader} >
                            <TouchableOpacity onPress={() => {
                                setOpenExtras(false)
                                setMobile('')
                                setAddress('')
                                setEmail('')
                            }}>
                                <Text style={{ fontSize: 21 }}>x</Text>
                            </TouchableOpacity>
                        </CardItem>
                        <CardItem>

                            <View style={{ width: '100%' }}>
                                <InputField
                                    name='Address'
                                    setFunction={setAddress}
                                    value={address}
                                    type={'default'}
                                    setKeyboard={setExtrasKeyboardOpen} />
                                <InputField
                                    name='Email'
                                    setFunction={setEmail}
                                    value={email}
                                    type={'email-address'}
                                    setKeyboard={setExtrasKeyboardOpen} />
                                <InputField
                                    name='Mobile No.'
                                    setFunction={setMobile}
                                    value={mobile}
                                    type={'numeric'}
                                    setKeyboard={setExtrasKeyboardOpen} />
                                <Button full onPress={() => {
                                    setSetExtras(true);
                                    setOpenExtras(false)
                                }}>
                                    <Text style={{ color: '#fff' }}>Confirm</Text>
                                </Button>
                            </View>
                        </CardItem>
                    </Card>
                </KeyboardAvoidingView>

            ) : null}
            <MainHeader />
            {isSubmitted || loading ? (
                <CustomLoader />
            ) : (
                    <Content>
                        <KeyboardAvoidingView behavior='position' enabled={keyboardOpen} >
                        {blurLoader ? <BlurLoader /> : null}
                        {openExtras ? (
                            <View style={{ backgroundColor: '#000000a6', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, zIndex: 99 }}></View>
                        ) : null}
                        <View style={styles.buttonContainer}>
                            <View style={styles.buttonIcon}>
                                <Icon name="md-cog" />
                            </View>
                            <View>
                                <Text style={styles.buttonTextPrimary}>Submit a Support Request</Text>
                                <Text style={styles.buttonTextSecendory}>Required fields are marked with *</Text>
                            </View>
                        </View>
                        <View style={styles.form}>
                            {error ? (
                                <FormMessage message={error} />
                            ) : null}
                            <InputField
                                name='Subject'
                                setFunction={setSubjected}
                                value={subject}
                                type={'default'} />
                            <InputSelect
                                name="Product Brand"
                                selection={selectedBrand}
                                data={brands}
                                selectFunction={onSelectBrand} />

                                <InputSelect
                                    name="Product Capacity"
                                    selection={selectedcapacity}
                                    data={capacity}
                                    selectFunction={onSelectCapacity}
                                />
                            <InputField 
                                name='Product Model(Optional)'
                                setFunction={setModel}
                                value = {model}
                                type={'default'} />
                            <InputMessage
                                value={body}
                                setFunction={setBody}
                                keyboardOpen={setKeyboardOpen}
                            />
                            <TouchableOpacity style={styles.openExtrasButton} onPress={() => setOpenExtras(true)}>
                                <Text>Change Location/Email/MobileNo.</Text>
                            </TouchableOpacity>
                            {loading ? (
                                <Spinner size="small" color="#000000" />
                            ) : (
                                    <Button full onPress={() => submitComplaint()}>
                                        <Text style={{ color: '#fff' }}>Create Complaint</Text>
                                    </Button>
                                )}
                        </View>
                        </KeyboardAvoidingView>
                    </Content>
                )}
        </Container>
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
)(NewComplaint);