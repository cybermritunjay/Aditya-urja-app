import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
      justifyContent:'center',
      flex:1,
      padding:32,
      marginTop:12,
      marginBottom:12
    },
    button:{
      marginTop: 20,
      alignSelf: 'center',
      alignItems:'center',
      width: 150
    
    },
    buttonText:{
        color:'#fff'
    },
    image:{
        width:100,
        height:100
    },
    imageContainer:{
        alignItems:'center'
    },
    loginText:{ 
        paddingTop: 5, 
        fontSize: 13, 
        paddingLeft: 10 
    },
    loginLink:{ 
        color: '#4183c4', 
        fontSize: 14 
    },
    input:{
        marginBottom:5,
        marginTop:10
    }
})
export default styles