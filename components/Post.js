import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export function Post(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.font}>{props.postInfo.title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        borderBottomColor: '#707070',
        borderBottomWidth: 1
    },
    username: {
        fontSize: 20,
        fontFamily: 'Courier'
    },
    profilePic: {
        width: 100,
        height: 100,
        borderRadius: 25
    },
    font: {
        fontFamily: 'Courier'
    }
});
