import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainTitleText:{
        fontFamily: 'latoBold', letterSpacing: 2, fontSize: 24, paddingLeft: 32, paddingTop: 10, paddingBottom: 10
    },
    form:{
        margin:10
    },
    cardViewContainer:{
        display: 'flex', flexDirection: 'column', flex: 1, paddingRight: 10, paddingLeft: 10
    },
    seconderyHeading:{
        letterSpacing: 3, fontSize: 20, marginBottom: 15, fontFamily: 'latoBold'
    },
    inputItemContainer:{
        marginBottom:10,padding:3
    },
    inputItemLabel:{
        margin:5
    },
    input:{
        paddingTop:19,paddingBotton:0
    }
}
export default styles