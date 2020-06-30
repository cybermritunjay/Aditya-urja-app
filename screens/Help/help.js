import React, { useState, useEffect } from 'react';
import { Content,Container } from 'native-base';
import {Text} from 'react-native'
import styles from './styles';
import {
  ToastAndroid,
  Platform,
  AlertIOS,
  Alert
} from 'react-native';
import CustomHeader from '../../common/components/Header/header'
import CustomLoader from '../../common/components/Loading/loading'

import {getSingleHelp,passIsHelpful} from '../../services/Help/actions'
export default function TopicInfo(props) {

  const [help, setHelp] = useState({})
  const [helpResponse, setHelpResponse] = useState(false)
  const [loading,setLoading] =useState(true)
  useEffect(() => {
    getSingleHelp({hlpId: props.route.params.helpId}).then((fetchResult) => {
        if (fetchResult.success) {            
            setHelp(fetchResult.helps)
            setLoading(false)
        } else {
            Alert.alert("Opps!!", "This is Really Emberacing But Something Went Wrong. Kindly Restart The App.")
        }
    })
  }, [])

  const isHelpfulHandler = (res) => {
    if (helpResponse) {
      if (Platform.OS === 'android') {
        ToastAndroid.show("Response Already Recorded !", ToastAndroid.SHORT);
      } else if(Platform.OS == 'ios') {
        AlertIOS.alert('Response Already Recorded', [
          {
            text: 'OK',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          }]);
      }
      return
    }
    setHelpResponse(true)
    if (res == "Yes") {
      passIsHelpful({ helpId: props.route.params.helpId, set: true }).then((data) => {
        if (data.sussess) {
            if (Platform.OS === 'android') {
                ToastAndroid.show("'Response Recorded Successfully' !", ToastAndroid.SHORT);
              } else {
                AlertIOS.alert('Response Recorded Successfully', [
                  {
                    text: 'OK',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  }]);
              }
        }
        
        }).catch((err) => {
        //console.log(err)
      })
    } else if (res == "No") {
      passIsHelpful({ helpId: props.route.params.helpId, set: false }).then((responce) => responce.json()).then((data) => {
        if (data.sussess) {
          setHelpResponse(true)
          Toast.show({
            text: 'Response Recorded Successfully',
            buttonText: 'Okay'
          })
        }
      }).catch((err) => {
        //console.log(err)
      })
    }
  }
  return (loading ? (
    <CustomLoader />
) : (
    <Container>
        <CustomHeader />
      <Content style={styles.container}>
        <Text style={styles.heading}>{help.title}</Text>
        <Text style={styles.mainText}>{help.body}
        </Text>
        <Text style={styles.isHelpfull}>Was this article helpful?  <Text onPress={() => isHelpfulHandler("Yes")} style={styles.helpfullRes}>Yes</Text>  |  <Text onPress={() =>isHelpfulHandler("No")} style={styles.helpfullRes}>No</Text>
        </Text>
      </Content>
    </Container>
  )
  )
}
