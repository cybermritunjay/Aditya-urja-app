import React, { useEffect, useState } from 'react';
import {Icon, Content, Container, Form, Spinner, Button } from 'native-base';
import { connect } from 'react-redux';
import {Text, View} from 'react-native'

import MainHeader from '../../common/components/Header/header'
import CustomLoader from '../../common/components/Loading/loading';
import FormMessage from '../../common/components/FormMessage/form-message';
import InputField from "./components/input-field";
import InputSelect from "./components/input-select";
import InputMessage from "./components/message-field";
import { createNewComplaint, fetchBrands, fetchModels } from '../../services/Complaints/actions'
import styles from './styles'
const NewComplaint = (props) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [brands, setBrands] = useState({})
    const [models, setModels] = useState({})
    const [body, setBody] = useState("")
    const [subject, setSubjected] = useState("")
    const [selectedBrand, setSelectedBrand] = useState(null)
    const [selectedModel, setSelectedModel] = useState(null)
    const [isSubmitted, setIsSubmitted] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetchBrands().then((fetchedData) => {
            console.log(fetchedData)
            if (fetchedData.success) {
                setBrands(fetchedData.brands)
                setLoading(false)
            } else {
                setError(fetchedData.error)
                setLoading(false)
            }
        })
    }, [])
    const onSelectBrand = (brand) => {
        setLoading(true)
        setSelectedBrand(brand)
        setError('')
        fetchModels({ brandId: brand })
            .then((fetchedData) => {

                if (fetchedData.success) {
                    setModels(fetchedData.models)
                    setLoading(false)
                } else {
                    setError(fetchedData.error)
                    setLoading(false)
                }

            })
    }
    const onSelectModel = (model) => {
        setSelectedModel(model)
    }
    const validateComplaintData = (data) => {
        if (data.subject == "") {
            setError("You Must Enter A Subject")
            return false;
        } else if (data.model == null) {
            setError("You Must Select a Model")
            return false;
        } else if (data.body == "") {
            setError("You Must Explain your Problem Briefly")
            return false;
        }
        return true
    }

    const submitComplaint = () => {
        setLoading(true)
        setIsSubmitted(true)
        setError("")
        if (!validateComplaintData({ subject, model: selectedModel, body })) {
            setLoading(false)
            setIsSubmitted(false)
            return
        }
        createNewComplaint({ user: props.user._id, subject, model: selectedModel, body })
            .then((data) => {
                if (data.success) {
                    props.navigation.navigate('Complaint Created', { complaintID: data.complaintID })
                } else {
                    setError(data.error)
                    setLoading(false)
                    setIsSubmitted(false)
                }
            })
    }
    return (
        <Container>
            <MainHeader />
            {isSubmitted || loading ? (
                <CustomLoader />
            ) : (
                    <Content>
                        <View style={styles.buttonContainer}>
                            <View style={styles.buttonIcon}>
                                <Icon name="md-cog" />
                            </View>
                            <View>
                                <Text style={styles.buttonTextPrimary}>Submit a Support Request</Text>
                                <Text style={styles.buttonTextSecendory}>Required fields are marked with *</Text>
                            </View>
                        </View>
                        <Form style={styles.form}>
                            {error ? (
                                <FormMessage message={error} />
                            ) : null}
                            <InputField
                                name='Subject'
                                setFunction={setSubjected}
                                value = {subject} />
                            <InputSelect
                                name="Product Brand"
                                selection={selectedBrand}
                                data={brands}
                                selectFunction={onSelectBrand} />

                            {selectedBrand ? (
                                <InputSelect
                                    name="Product Model"
                                    selection={selectedModel}
                                    data={models}
                                    selectFunction={onSelectModel}
                                />) : null}
                            <InputMessage
                                setFunction={setBody}
                            />
                            {loading ? (
                                <Spinner size="small" color="#000000" />
                            ) : (
                                    <Button full onPress={() => submitComplaint()}>
                                        <Text>Click Me!</Text>
                                    </Button>
                                )}
                        </Form>
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