import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import NetflixScreen from '../screens/NetflixScreen'
import HuluScreen from '../screens/HuluScreen';
import AmazonScreen from '../screens/AmazonScreen';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home`
          : 'md-home'
      }
    />
  ),
};

HomeStack.path = '';

const NetflixStack = createStackNavigator(
  {
    Netflix: NetflixScreen,
  },
  config
);

NetflixStack.navigationOptions = {
  tabBarLabel: 'Netflix',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
        ? `ios-film`
        : 'md-film'
      }
    />
  ),
};

NetflixStack.path = '';

const HuluStack = createStackNavigator(
  {
    Hulu: HuluScreen,
  },
  config
);

HuluStack.navigationOptions = {
  tabBarLabel: 'Hulu',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
        ? `ios-tv`
        : 'md-tv'
      }
    />
  ),
};

HuluStack.path = '';


const AmazonStack = createStackNavigator(
  {
    Amazon: AmazonScreen,
  },
  config
);

AmazonStack.navigationOptions = {
  tabBarLabel: 'Amazon',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
        ? `ios-cart`
        : 'md-cart'
      }
    />
  ),
};

AmazonStack.path = '';


const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  NetflixStack,
  HuluStack,
  AmazonStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
