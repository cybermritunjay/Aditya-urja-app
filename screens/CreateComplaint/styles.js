import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    inputView:{
        marginBottom:32,
    },
    inputText:{
        marginBottom:4,
        color:'#959eb0',
        fontSize:14
    },
    form:{
        flex:1,
        margin:15,
        paddingTop:25,
        paddingBottom:25,
        paddingLeft:32,
        paddingRight:32,
        borderRadius:2,
        backgroundColor:'#fff',
        shadowColor:'#26282a1a',
        shadowOffset:{width:0,height:2},
        shadowOpacity:8
    },
    buttonContainer:{
        flexDirection:'row',
        padding:16,
        margin:16,
        backgroundColor:'#fff',
        
    },
    buttonIcon:{
        width:40,
        height:40,
        borderRadius:20,
        backgroundColor:'#f5f8ff',
        justifyContent:'center',
        alignItems:'center',
        marginRight:12
    },
    buttonTextPrimary:{
        letterSpacing:0.1,
        color:'#002d73',
        fontWeight:'700',
        fontFamily:'latoBold',
        fontSize:14
    },
    buttonTextSecendory:{
        letterSpacing:0.1,
        color:'#002d73',
        fontWeight:'700',
        fontFamily:'lato',
        fontSize:12
    },
    error: {
        color: 'red',
        marginBottom: 20,
      },
      errorContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 20,
      },
    extrasContainer:{
        position: 'absolute',
        top: 100,
        left: 0,
        right: 0,
        zIndex: 999,
        margin: 16,
    },
    extrasHeader:{
        padding:5,
        display:'flex',
        justifyContent: 'flex-end',
    },
    openExtrasButton:{
        marginBottom:16,
        backgroundColor:'#eb9e3e',
        padding:10,
        justifyContent:'center'
    }
  })

  export default styles;