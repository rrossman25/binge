import React, {Component} from 'react';
import {Modal, TextInput, View, TouchableHighlight, Image, StyleSheet, Button} from 'react-native';
import { FirebaseWrapper } from '../firebase/firebase';


export class CreatePost extends Component {
    constructor(){
        super();
        this.state = {
            text: ''
        }
    }

    async createPost(){
        try {
            await FirebaseWrapper.GetInstance().CreateNewDocument('posts', { title: this.state.text, platform: this.props.platform })
            this.props.closeModal();
            this.setState({text: ''})
        } catch (error) {console.log('something went wrong creating post', error)}
    }

    render(){
        return (
            <Modal
            animationType="slide"
            transparent={false}
            visible={this.props.isModalVisible}>
                <View style={{marginTop: 22}}>
                    <TouchableHighlight
                        onPress={() => {
                        this.props.closeModal();
                        }}>
                        <Image
                            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShsLUKwsKHI46biBYRFWvpF0le_ZW0ar08C3MIxScRyW6DwxEz'}}
                            style={styles.close}
                        />
                    </TouchableHighlight>
                    <TextInput
                        multiline={false}
                        onChangeText={(text) => this.setState({text})}
                        placeholder="add a new show or movie to the list"
                        value={this.state.text}
                        style={styles.input}
                    />
                </View>
                <Button title="add title" onPress={() => this.createPost()} />
            </Modal>
        )
    }

}


const styles = StyleSheet.create({
    input: {
        height: 20,
        marginLeft: 10
    },
    close: {
        width: 40,
        height: 40,
        alignSelf: 'flex-end',
        marginRight: 10,
        marginBottom: 10
    }
})
