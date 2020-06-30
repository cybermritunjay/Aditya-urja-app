import React, { useState, useEffect, useRef } from 'react';
import { Content, Container, Icon, Button } from 'native-base';
import { View, TextInput, Text, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView,BackHandler, ScrollView } from 'react-native'
import styles from './styles';
import TicketDetail from './components/ticket-details';
import { getSingleComplaint, sendReply } from '../../services/Complaints/actions'
import { connect } from 'react-redux'
import MainHeader from '../../common/components/Header/header';
import CustomLoader from '../../common/components/Loading/loading'
import Action from './components/action'
import { useIsFocused } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const IndividualComplaint = (props) => {
  const id = props.route.params.id
  const [complaint, setComplaint] = useState({})
  const [loading, setLoading] = useState(true)
  const [replyMessage, setReplyMessage] = useState('')
  const [openKeyboard,setOpenKeyboard] = useState(false)
  const [openDetails,setOpenDetails] = useState(false)
  const isFocused = useIsFocused()
  const MessageRef = useRef(null)
  const replyHandler = () => {
   // Keyboard.dismiss
    sendReply({ complaintId: id, msg: replyMessage }).then(res => {
      //console.log(res)
      if (res.success) {
        setReplyMessage('')
        fetchComplaint()
      }
    })

  }
  const fetchComplaint = () => {
    getSingleComplaint({ complaintId: id })
      .then((data) => {
        setComplaint(data.complaint)
        setLoading(false)
      })
  }
  useEffect(() => {
    
    fetchComplaint()
    return () => {
      setLoading(true)
      setComplaint({})
      setReplyMessage('')
    }
  }, [isFocused]);

useEffect(()=>{
  const handleBackButtonClick =()=> {
    setLoading(true)
    setComplaint({})
    setReplyMessage('')
    props.navigation.jumpTo('All Complaints')
      return true;
    }
  const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
  return () => backHandler.remove();
})
  return (
      <Container>
        <MainHeader />
        {loading ? (
          <CustomLoader />
        ) : (
            <KeyboardAvoidingView behavior='padding' enabled={openKeyboard} style={styles.container}>
              <TouchableOpacity onPress={() => setOpenDetails(!openDetails)} style={{flexDirection:'row',alignItems:'center',shadowColor: "#000",padding:5,shadowOffset: {width: 2,height: 5},shadowOpacity: 0.5,elevation: 5, }}>
                <Text style={{flex:4}}>Ticket Details</Text>
                <Icon style={{flex:1}} name={openDetails?'chevron-up':'chevron-down'} type='Feather' />
              </TouchableOpacity>
              {openDetails?(
                <View style={styles.ticketDetailsCard}>
                <TicketDetail name={'Subject'} value={complaint.title} />
                <TicketDetail name={'Message'} value={complaint.body} />
                <TicketDetail name={'Status'} value={complaint.status} />
              </View>
              ):null}
              
              <View style={{ marginTop: 16, flex: 1 }}>
                <Text>
                  Actions Taken:
                </Text>
                {complaint.Replies ? (
                  <ScrollView onContentSizeChange={()=> MessageRef.current.scrollToEnd({animated: true})} ref={MessageRef} style={{paddingBottom:10}}>
                      {complaint.Replies.map((elm, ind) => <Action key={ind} action={elm} />)}
                  </ScrollView>
                ) : <Text>No Actions Taken Yet</Text>}
                <View style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'row', position: 'relative', bottom: 0, left: 0, right: 0,marginTop:10 }}>
                  <TextInput
                    style={{ flex: 5, borderWidth: 1, borderStyle: 'solid', borderColor: '#ccc', paddingLeft: 10 }}
                    keyboardType='default'
                    placeholder='Type Your Message...'
                     onBlur={()=>setOpenKeyboard(false)}
                     onFocus={()=> setOpenKeyboard(true)}
                    value={replyMessage} onChangeText={val => setReplyMessage(val)} />
                  <Button disabled={!(replyMessage.length > 0)} onPress={() => replyHandler()} style={{ flex: 1, justifyContent: 'center', margin: 0, padding: 0 }}>
                    <Icon style={{ margin: 0, padding: 0, fontSize: 18 }} color='#fff' type='Feather' name='send' />
                  </Button>
                </View>
              </View>
            </KeyboardAvoidingView>
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