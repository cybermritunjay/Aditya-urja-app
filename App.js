import 'react-native-gesture-handler'
import React from 'react';
import { AppLoading } from 'expo'
import * as Font from 'expo-font';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from "react-redux";
import { Ionicons } from '@expo/vector-icons';
import Navigation from './common/navigation/navigation'
import {store,persistor} from './common/store'
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isReady: false,
    };
}
async componentDidMount() {
  await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
  });
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
