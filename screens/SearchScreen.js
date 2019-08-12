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
import {FirebaseWrapper} from '../firebase/firebase'


export class SearchScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      platforms: [],
      searched: false
    }
  }


  search = async (search) => {
    try {
        await FirebaseWrapper.GetInstance().SetupCollectionListener('posts', (container) => {
              let docs = (container.filter(doc => {
                if (doc.title === search){
                    return doc;
                }
              }))
              let platform = docs.map(doc => {
                return doc.platform
              })
              this.setState({platforms: platform, searched: true});
              console.log(this.state.platforms)
        })
    } catch (error) {console.log('something went wrong searching', error)}
  }


  render(){
    const {navigate} = this.props.navigation;
    if (this.state.platforms.length === 0 && this.state.searched === true) {
      console.log('in if')
      return (
        <View style={styles.container}>
          <Search searchfn={this.search} />
          <View>
            <Text>currently not available to stream</Text>
          </View>
          <Button
              title="go home"
              onPress={() => navigate('Main')}
          />
        </View>
    )}
    else {
      console.log(this.state.platforms)
      return (
        <View style={styles.container}>
          <Search searchfn={this.search} />
          <View>
            {/* <Text>Hello</Text> */}
            {this.state.platforms.map((doc, index) => {
              return (
                <Text style={styles.title} key= {index}>{doc}</Text>
              )})
            }
          </View>
          <Button
              title="go home"
              onPress={() => navigate('Main')}
          />
        </View>
      )
    }
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
