import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    list:{
        
        backgroundColor:'#fff',
        shadowColor:'#26282a1a',
        shadowOffset:{width:0,height:4},
        shadowOpacity:8,
        borderRadius:10
    },
    container:{
        padding:25,
        backgroundColor:'#fff',
        flex:1
    },
    ticketDetailsCard:{
        backgroundColor:'#fff',
        shadowColor:'#26282a1a',
        shadowOffset:{width:0,height:4},
        shadowOpacity:8,
        borderRadius:10,
        padding:16,
        elevation:3
    },
    ticketDetailSecendory:{
        fontFamily:'latoBold'
    },
    ticketDetailPrimery:{
        fontFamily:'lato',
        color:'#959eb0',
        fontSize:14
    },
    ticketDetail:{
        display:'flex',
        flexDirection:'row',
        marginBottom:8
    },
    ticketAction:{
        display:'flex',
        flexDirection:'row',
        marginBottom:8,
        marginTop:8,
       
    },
    actions:{
        margin:10,
        fontSize:24
    },
    inputView:{
        marginBottom:32,
    },
    inputText:{
        marginBottom:4,
        color:'#959eb0',
        fontSize:14
    },
    form:{
        backgroundColor:'#fff',
        shadowColor:'#26282a1a',
        shadowOffset:{width:0,height:4},
        shadowOpacity:8,
        borderRadius:10,
        padding:16,
        marginTop:25
    },
    button:{
        marginTop:10,
        borderRadius:5,
    }
})

export default styles