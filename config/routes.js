import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons';

import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
} from 'react-navigation';

import FirstScreen from '../screens/FirstScreen';
import InvestScreen from '../screens/InvestScreen';
import RestaurantScreen from '../screens/RestaurantScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AuthLoadingScreen from '../screens/AuthloadingScreen';
import LoginScreen from '../screens/LoginScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CurrencyScreen from '../screens/CurrencyScreen';
import CurrencyListScreen from '../screens/CurrencyListScreen';

import { Provider } from '../CurrencyContext';
import Sandbox from '../Sandbox';

const AuthStackNavigator = createStackNavigator({
  FirstScreen: { screen: FirstScreen },
  LoginScreen: { screen: LoginScreen },
  CreateAccountScreen: { screen: CreateAccountScreen },
});

const RestaurantStack = createStackNavigator({
  CheckinScreen: { screen: RestaurantScreen },
});

const AppointmentListStack = createStackNavigator({
  ClassList: { screen: InvestScreen },
});

const InvestStack = createStackNavigator({
  InvestScreen: { screen: InvestScreen },
  // ProfileScreen: {},
});

const CurrencyStack = createStackNavigator(
  {
    CurrencyScreen: { screen: CurrencyScreen },
    // CurrencyListScreen: {
    //     screen: CurrencyListScreen,
    //     navigationOptions: ({navigation}) => ({
    //         headerTitle: navigation.state.params.title
    //     })
    // }
  },
  {
    mode: 'modal',
  },
);

const AppTabNavigator = createBottomTabNavigator(
  {
    Restaurant: {
      screen: RestaurantStack,
      navigationOptions: {
        tabBarLable: 'Restaurant',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-restaurant" size={32} color={tintColor} />
        ),
      },
    },
    Invest: {
      screen: InvestStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Entypo name="line-graph" size={32} color={tintColor} />
        ),
      },
    },
    Currency: {
      screen: CurrencyStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons name="attach-money" size={32} color={tintColor} />
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Entypo name="user" size={32} color={tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#04C66D',
      inactiveTintColor: '#D9D9D9',
    },
  },
);

const AppStackNavigator = createStackNavigator({
  AppTabNavigator: {
    screen: AppTabNavigator,
    navigationOptions: ({ navigation }) => ({
      title: 'Discover Investment Concierge',
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <View style={{ paddingHorizontal: 10 }}>
            <Ionicons name="md-menu" size={32} />
          </View>
        </TouchableOpacity>
      ),
    }),
  },
});

const AppDrawerNavigator = createDrawerNavigator({
  Home: AppTabNavigator,
  Settings: { screen: SettingsScreen },
});

const AppNavigator = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigator,
  App: AppDrawerNavigator,
});

export default createAppContainer(AppNavigator);
