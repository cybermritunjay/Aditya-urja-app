import React, { useState, useEffect } from 'react';
import { Text, Container, Content, Spinner, View } from 'native-base';
import { connect } from 'react-redux';
import MainHeader from '../../common/components/Header/header'
import styles from './styles'
import CustomButton from './components/customButton';
import HelpLinkContainer from './components/help-link-container'
import { getAllHelp } from '../../services/Help/actions'
import CustomLoader from '../../common/components/Loading/loading'
import { Alert } from 'react-native';

const Home = (props) => {
    const [help, setHelp] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAllHelp().then((fetchResult) => {
            if (fetchResult.success) {
                setHelp(fetchResult.helps)
                setLoading(false)
            } else {
                Alert.alert("Opps!!", "This is Really Emberacing But Something Went Wrong. Kindly Restart The App.")
            }
        })
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
                        link={'NewComplaint'}
                        underText={'Submit a new issue to a department'}
                        icon={'edit'}
                    />
                    <CustomButton
                        navigation={props.navigation}
                        name={'View Existing Tickets'}
                        link={'PreviousComplaint'}
                        underText={'View tickets you submitted in the past'}
                        icon={'file'}
                    />
                    <Text style={styles.helpTitle} >Hello, How Can We Help?</Text>
                    {help ? Object.entries(help).map(([key, value]) => <HelpLinkContainer style={styles.helpParent} key={key} navigation={props.navigation} title={key} dat={value} />) : null}
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