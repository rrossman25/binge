import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';


export default function HomeScreen(props){
  const {navigate} = props.navigation;
  return (
    <View style={styles.container}>
      <View style={styles.linkContainer}>
        <Button
          title="search"
          onPress={() => navigate('Search')}
        />
        <Button
          title="sign in"
          onPress={() => navigate('SignIn')}
        />
        <Button
          title="sign up"
          onPress={() => navigate('SignUp')}
        />
      </View>
      <View style={styles.homeContainer}>
        <Text style={styles.title}>binge.</Text>
        <Image style={styles.image} source={require('./../assets/images/color-tv.jpeg')} />
        <Text style ={styles.description}>crowdsourcing for television addicts</Text>
      </View>
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
    justifyContent: 'flex-start'
  },
  homeContainer: {
    marginTop: 0,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontFamily: 'Courier',
    textAlign: 'center',
    fontSize: 50,
    color: '#000000',
    marginTop: 10
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
  linkContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end'
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
