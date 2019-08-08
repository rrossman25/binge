import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native'
import {Post} from '../components/Post'
import {Header} from '../components/Header'


export default function NetflixScreen(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Netflix</Text>
            <Post />
            <Header />
        </View>
    )
}


NetflixScreen.navigationOptions = {
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
        color: '#E50914'
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
