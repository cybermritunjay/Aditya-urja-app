import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
      justifyContent:'center',
      flex:1,
      padding:32
    },
    button:{
      marginTop: 20,
      alignSelf: 'center',
      width: 150,
    },
    buttonText:{
      color:'#fff'
  },
    error: {
      color: 'red',
      marginBottom: 20,
    },
    otpRow:{
      marginTop:12,
      flexDirection: 'row',
      alignItems: 'center',
  },
  InputContainer:{
      marginRight:12,
      flex: 1,
  },
  Input:{
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#1c1c1e',
    borderColor:"#a5c7fe",
    borderWidth:2,
    borderStyle:'solid',
    fontSize: 18,
    width: '100%',
    marginLeft:5,
    marginRight:5
  }
  })

  export default styles;