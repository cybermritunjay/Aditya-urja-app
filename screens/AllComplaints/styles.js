import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainwindow:{
        padding:24,
        backgroundColor:'#fff'
    },
    card:{
        marginTop:18,
        marginBottom:18,
        backgroundColor:'#fff',
        shadowColor:'#26282a1a',
        shadowOffset: {
            width:0,
            height:2
        },
        shadowOpacity: 8,
        elevation:5,
        borderWidth:0,
        borderColor:'#fff',
        borderRadius:10
    },
    cardbody:{
        flexDirection:'row',
    },
    mainIcon:{
        marginRight:12
    },
    mainBody:{
        flexDirection:'row',
        alignItems:'center'
    }
  })

  export default styles;