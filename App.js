import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  authenticateUser  from "./utils"


import AppNavigator from './config/routes';

import { Provider } from './contexts';
import Amplify from "aws-amplify";
import config from "./config/config";
import Sandbox from "./Sandbox";
import CurrencyListScreen from './screens/CurrencyListScreen'

export default class App extends React.Component {
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
    // this.configure();
  }


  async configure() {
    const result = await Amplify.configure({
      Auth: {
          mandatorySignIn: true,
          region: config.cognito.REGION,
          userPoolId: config.cognito.USER_POOL_ID,
          identityPoolId: config.cognito.IDENTITY_POOL_ID,
          userPoolWebClientId: config.cognito.APP_CLIENT_ID
      },
      Storage: {
          region: config.s3.REGION,
          bucket: config.s3.BUCKET,
          identityPoolId: config.cognito.IDENTITY_POOL_ID
      },
      API: {
          endpoints: [
              {
                  name: "dc-concierge",
                  endpoint: config.apiGateway.URL,
                  region: config.apiGateway.REGION
              },
          ]
      }
  });
  // console.log('Result: ', result);
  }

  render() {
    return (
      <Provider>
        <AppNavigator/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
