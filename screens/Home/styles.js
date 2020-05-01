import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainButton: {
        backgroundColor: 'red',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 8,
        elevation: 5
    },
    buttonContainer: {
        flexDirection: 'row',
        padding: 16,
        margin: 16,
        backgroundColor: '#fff',
        shadowColor: '#26282a1a',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 8,
        elevation: 5
    },
    buttonIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#f5f8ff',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12
    },
    buttonTextPrimary: {
        letterSpacing: 0.1,
        color: '#002d73',
        fontWeight: '700',
        fontFamily: 'latoBold',
        fontSize: 14
    },
    buttonTextSecendory: {
        letterSpacing: 0.1,
        color: '#002d73',
        fontWeight: '400',
        fontFamily: 'lato',
        fontSize: 11

    },
    helpTitle: {
        fontFamily: 'latoBold',
        fontSize: 20,
        margin: 32,
        color: '#002d73',
        textAlign: 'center'
    },
    helpHeaderMain: {
        flexDirection: "row",
        padding: 16,
        margin:10,
        shadowColor: '#26282a1a',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 8,
        // justifyContent: "space-between",
        backgroundColor: "#fff",
        elevation:3
    },
    helpHeaderSeconery: {
        height: 30,
        maxWidth: 30,
        width: 30,
        borderRadius: 15,
        marginRight: 12,
        backgroundColor: '#f5f8ff',
        justifyContent: 'center',
        paddingBottom: 1,
        alignItems: 'center'
    }
})

export default styles;