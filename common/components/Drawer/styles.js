import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
topContainer:{
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 18,
    fontFamily: 'lato',
    shadowColor: "#ccc",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    height: 100,
    shadowOpacity: 0.5,
    shadowRadius: 13,
    paddingBottom: 10,
    elevation: 1,
    letterSpacing: 3.2
},
mainHeading:{
    color: '#000'
},
individualItem:{
    borderBottomWidth: 1,
    borderColor: '#ccc',
    borderRadius: 0,
    borderStyle: 'solid',
    fontFamily: 'lato',
}

})
export default styles;