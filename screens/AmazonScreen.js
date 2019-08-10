import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {View, Text, StyleSheet, Platform, ScrollView} from 'react-native'
import {Post} from '../components/Post'
import {Header} from '../components/Header'
import {FirebaseWrapper} from '../firebase/firebase'


export default class AmazonScreen extends Component{
  constructor(){
    super();
    this.state = {
      posts: []
    }
  }

  async componentDidMount(){
    await FirebaseWrapper.GetInstance().SetupCollectionListener('posts', (container) => {
      let post = container.filter(posting => {
        if (posting.platform === 'Amazon'){
          return posting;
        }
      });
      this.setState({ posts: post });
    })
  }

  render(){
    return (
      <View style={styles.container}>
          <Text style={styles.title}>Amazon</Text>
          <ScrollView style={styles.container}>
            {
              this.state.posts && this.state.posts.map(post => <Post postInfo={post} key={post.id} />)
            }
          </ScrollView>
          <Header platform="Amazon" />
      </View>
    )
  }
}


AmazonScreen.navigationOptions = {
    header: null,
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginTop: 30,
    },
    title: {
        fontFamily: 'Courier',
        textAlign: 'center',
        fontSize: 30,
        color: '#ff9900'
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
})
