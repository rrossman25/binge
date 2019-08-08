import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export function Post() {
    return (
        <View style={styles.container}>

            <View>
                <Image
                    style={styles.profilePic}
                    source={{uri: 'https://amp.businessinsider.com/images/5824aa9046e27a1c008b5eec-750-563.jpg' }} />
            </View>

            <View>
                <Text style={styles.username}>Leslie Knope</Text>
                <Text style={styles.font}>12/11/19</Text>
            </View>

            <Text style={styles.font}>Parks and Recreation</Text>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        borderBottomColor: '#707070',
        borderBottomWidth: 3
    },
    username: {
        fontSize: 20,
        fontFamily: 'Courier'
    },
    profilePic: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    font: {
        fontFamily: 'Courier'
    }
});
