import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { CreatePost } from './CreatePost';

export class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            isModalVisible: false,
        }
    }

    closeModal(){
        this.setState({isModalVisible: !this.state.isModalVisible});
    }

    render(){
        return (
            <View style={styles.container}>

                <TouchableOpacity onPress={() => this.setState({isModalVisible: true})} style={styles.buttonContainer}>
                    <Text style={styles.button}>add a title + </Text>
                </TouchableOpacity>

                <CreatePost isModalVisible={this.state.isModalVisible} closeModal={() => this.closeModal()} platform={this.props.platform} />

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Courier',
        flex: 1
    },
    button: {
        alignSelf: 'flex-end',
        fontFamily: 'Courier',
    },
    buttonContainer: {
        paddingRight: 5,
        justifyContent: 'flex-end'
    }
})
