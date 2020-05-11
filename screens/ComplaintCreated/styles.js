import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#f0fff4',
        shadowColor:'#0029591a',
        shadowOffset: {width:0,height:4},
        shadowOpacity: 8,
        elevation:5,
        padding:28,
        borderLeftColor:'#38bc7d',
        borderLeftWidth:8,
        borderStyle:'solid',
        margin: 15
    },
    submitted:{
        fontWeight:'700',
        fontFamily:'latoBold',
        letterSpacing:0.1,
        color:'#26282a'
    },
    submittedSecendory:{
        fontWeight:'400',
        fontFamily:'lato',
        letterSpacing:0.1,
        color:'#26282a'
    },
    noConfirmation:{
        fontWeight:'700',
        fontFamily:'latoBold',
        letterSpacing:0.1,
        color:'red'
    },
    viewTicketButton:{
        width: 160,
    marginTop: 15
    },
    spamText:{
        fontWeight:'400',
        fontFamily:'lato',
        letterSpacing:0.1,
        color:'#26282a'
    },
    ticket:{
        fontFamily:'latoBold',
        fontWeight:'700'
    }
})

export default styles