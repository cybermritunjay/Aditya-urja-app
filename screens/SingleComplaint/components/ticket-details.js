import React from 'react';
import { Content, Header, Footer, Container, Card, CardItem, Body, Icon } from 'native-base';
import {View, Text} from 'react-native'
import styles from '../styles';

export default function TicketDetail({ name, value }) {
    return(
    <View style={styles.ticketDetail}>
        <Text style={styles.ticketDetailPrimary}>{name}: </Text>
        <Text style={styles.ticketDetailSecendory}>{value}</Text>
    </View>
    );
}   