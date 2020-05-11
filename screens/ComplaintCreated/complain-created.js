import React, { useEffect } from 'react';
import {  Content,Container,Button } from 'native-base';
import {Text, View} from 'react-native'

import styles from './styles';
import MainHeader from '../../common/components/Header/header';
export default function ComplaintCreated( props ) {

  return (
    <Container>
        <MainHeader />
    <Content>
      <View style={styles.container}>
        <Text style={styles.submitted}>Complaint Created Successfully</Text>
        <Text style={styles.submittedSecondory}>Your ticket has been successfully submitted! Ticket ID: <Text style={styles.ticket}>{props.route.params.complaintID}</Text></Text>
        <Text style={styles.noConfirmation}>{"\n"}No confirmation email?</Text>
        <Text style={styles.spamText}>We sent a confirmation message to your email address. If you do not receive it within a few minutes, please check your Junk, Bulk or Spam folders. Mark the message as Not SPAM to avoid problems receiving our correspondence in the future.</Text>
        <Button style={styles.viewTicketButton} onPress={() => props.navigation.navigate('Complaint',{id:props.route.params.complaintID})}><Text>View Your Ticket</Text></Button>
      </View>
    </Content>
    </Container>
  );
}
