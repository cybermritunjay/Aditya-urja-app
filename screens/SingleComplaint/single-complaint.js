import React,{useState,useEffect} from 'react';
import { Content, Container } from 'native-base';
import {View} from 'react-native'
import styles from './styles';
import TicketDetail from './components/ticket-details';
import { getSingleComplaint} from '../../services/Complaints/actions'
import {connect} from 'react-redux'
import MainHeader from '../../common/components/Header/header';
import CustomLoader from '../../common/components/Loading/loading'
const IndividualComplaint =(props) => {
  const id= props.route.params.id
  const [complaint, setComplaint] = useState({})
  const [loading,setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        getSingleComplaint({complaintId:id})
        .then((data) => {
          
          setComplaint(data.complaint)
          setLoading(false)
        })

    }, []);
  
  return (
      <Container>
        <MainHeader />
      {loading?(
          <CustomLoader />
      ):(
    <Content style={styles.container}>
      <View style={styles.ticketDetailsCard}>
        {Object.entries(complaint).map(([key, value]) => <TicketDetail name={key} value={value} />)}
      </View>
    </Content>
      )}
      </Container>
  );
}

const mapStateToProps = (state) => {
    return {
      user: state.AuthReducer.user,
      token: state.AuthReducer.token
    };
  }
  
  export default connect(
    mapStateToProps,
  )(IndividualComplaint)