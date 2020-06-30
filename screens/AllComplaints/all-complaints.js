import React,{ useState, useEffect } from "react"
import { connect } from 'react-redux';

import { Alert,Text, TouchableOpacity} from "react-native"
import { Container, Content, Body, Card, CardItem, Icon } from "native-base"
import styles from './styles';

import {getAllComplaints} from '../../services/Complaints/actions'

import TicketCard from './components/ticket-card'
import MainHeader from '../../common/components/Header/header'
import CustomLoader from "../../common/components/Loading/loading";
const AllComplaints = (props) =>{
    const [complaint,setComplaint] = useState([])
    const [loading,setLoading] = useState(true)

    const fetchComplaints = () =>{
        getAllComplaints({userId:props.user._id}).then((fetchedData) =>{
            if(fetchedData.success){
                setComplaint(fetchedData.complaints)
                setLoading(false)
            }else{
                Alert.alert("Something Went Wrong","Opps!!! Looks Like Something is Wrong With Getting All Complaints")
            }
        })
    }
    useEffect(() =>{
       fetchComplaints()
       return setComplaint('')
    },[])

    return(
        <Container >
            <MainHeader />
            {loading?(
                <CustomLoader />
            ):(
            <Content style={styles.mainwindow}>
                <Card>
                    <CardItem>
                        <Body style={styles.mainBody} >
                            <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}} onPress={() => {setLoading(true); fetchComplaints()}}>
                            <Icon style={styles.mainIcon} name='reload' type='MaterialCommunityIcons' />
                            <Text >
                                Reload This Page
                            </Text>
                            </TouchableOpacity>
                            
                        </Body>
                    </CardItem>
                </Card>
                {complaint.map((values) => <TicketCard key={values.id} navigation={props.navigation} user={props.user} data={values} />)}
            </Content>
            )}
        </Container>
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
  )(AllComplaints)