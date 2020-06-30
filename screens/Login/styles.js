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
      alignItems:'center',
      width: 150,
      
    
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
    forgetPassLink:{ 
        color: '#4183c4', 
        paddingTop: 5, 
        fontSize: 12, 
        paddingLeft: 15, 
        textAlign: 'right' 
    },
    signupText:{ 
        paddingTop: 5, 
        fontSize: 13, 
    },
    signupLink:{ 
        color: '#4183c4', 
        fontSize: 14 ,
        paddingTop:5,
        paddingLeft: 10 

    },
    input:{
        marginBottom:5,
        marginTop:10
    }
})
export default styles