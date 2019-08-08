import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import {
  Image,
  Platform,
  // ScrollView,
  StyleSheet,
  Text,
  // TouchableOpacity,
  View,
  // Button,
} from 'react-native';

// import { MonoText } from '../components/StyledText';

import {Post} from '../components/Post'
import {Header} from '../components/Header'

// import { TextInput } from 'react-native-gesture-handler';

export default function HomeScreen(){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>binge.</Text>
      <Image style={styles.image} source={require('./../assets/images/color-tv.jpeg')} />
      <Text style ={styles.description}>crowdsourcing for television addicts</Text>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 30,
    justifyContent: 'space-between'
  },
  title: {
    fontFamily: 'Courier',
    textAlign: 'center',
    fontSize: 50,
    color: '#000000',
    marginTop: 60
  },
  description: {
    fontFamily: 'Courier',
    textAlign: 'center',
    fontSize: 15,
    color: '#000000',
    paddingBottom: 10
  },
  image: {
    height: 300,
    width: 300,
    alignSelf: 'center',
    marginBottom: 50
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  }
});
