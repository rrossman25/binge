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


import {Search} from '../components/Search'


export class SearchScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      platforms: []
    }
  }
  render(){
    const {navigate} = this.props.navigation;
    console.log(this.state.platforms.length)
    return (
      <View style={styles.container}>
          <Search platforms={this.state.platforms} />
          {this.state.platforms.forEach(doc => {
            return (
              <Text>{doc.platform}</Text>
            )
          })}
          <Button
              title="go home"
              onPress={() => navigate('Main')}
          />
      </View>
    );
  }
}

SearchScreen.navigationOptions = {
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
