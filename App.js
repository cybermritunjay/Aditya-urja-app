import 'react-native-gesture-handler'
import React from 'react';
import { AppLoading } from 'expo'
import * as Font from 'expo-font';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from "react-redux";
import { Ionicons } from '@expo/vector-icons';
import NetInfo from '@react-native-community/netinfo';

import Navigation from './common/navigation/navigation'
import {store,persistor} from './common/store'
import { Alert, Platform } from 'react-native';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isReady: false,
    };
}
checkInterNetConnection = () => {
  NetInfo.fetch().then(state => {
    console.log("Connection type", state.type);
    console.log("Is connected?", state.isConnected);
    if(! state.isConnected) {
    Alert.alert(
      'No Internet',
      'You Do Not Have Internet Connectivity!!',
      [
        {
          text: 'Retry',
          onPress: () => this.checkConnection(),
          style: 'cancel',
        },
      ],
      { cancelable: false }
    );
  }
  });
}
async componentDidMount() {
  await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
       lato: require('./assets/fonts/Lato-Regular.ttf'),
       latoBold: require('./assets/fonts/Lato-Bold.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
  });
  if(Platform.OS == 'android'){
  NetInfo.addEventListener(state => {
    console.log("Connection type", state.type);
    console.log("Is connected?", state.isConnected);
    if(state.isConnected != true){
      Alert.alert(
        'No Internet',
        'You Do Not Have Internet Connectivity!! Kindly Try Again',
        [
          {
            text: 'Retry',
            onPress: () => this.checkConnection(),
            style: 'cancel',
          },
        ],
        { cancelable: false }
      );
    }
  });
}
this.setState({ isReady: true });
}
render(){
  return (
    <Provider store={store}>
      <PersistGate loading={<AppLoading />} persistor = {persistor}>
        {!this.state.isReady ? <AppLoading /> : <Navigation />}
      </PersistGate>
    </Provider>
  )
}
}
