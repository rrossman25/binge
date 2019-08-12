
import * as yup from 'yup'
import { Formik } from 'formik'

import React, { Component, Fragment } from 'react';
import { TextInput, Text, Button, Alert, StyleSheet, View } from 'react-native';

import {FirebaseWrapper} from '../firebase/firebase'


export class SignIn extends Component {

    async logInUser(values){
        try {
            await FirebaseWrapper.GetInstance().SetupCollectionListener('users', (container) => {
                let user = container.filter(username => {
                  if (username.email === values.email && username.password === values.password){
                    return username;
                  }
                });
                if (user.length !== 0){
                    Alert.alert('logged in', 'click go home to return to the home screen');
                }
                else {
                    Alert.alert('user does not exist', 'please try again');
                }
            })
        } catch (error) {console.log('something went wrong signing in', error)}
    }


    render() {
        return (
            <Formik
                initialValues={{ email: '', password: '', agree: false }}
                onSubmit={values => Alert.alert(JSON.stringify(values))}
                validationSchema={yup.object().shape({
                email: yup
                    .string()
                    .email('not a valid email')
                    .required('please enter email'),
                password: yup
                    .string()
                    .min(8, 'too short')
                    .max(12, 'too long')
                    .required('please enter password'),
                })}
            >
            {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit, setFieldValue }) => (
                <Fragment>
                    <View style={styles.container}>
                        <Text style={styles.inputs}>
                            email
                        </Text>
                        <TextInput
                            style={styles.inputs}
                            value={values.email}
                            onChangeText={handleChange('email')}
                            onBlur={() => setFieldTouched('email')}
                            placeholder="chosen1@wiznet.com"
                            autoFocus
                        />
                        {touched.email && errors.email &&
                            <Text style={styles.errors}>{errors.email}</Text>
                        }
                        <Text style={styles.inputs}>
                            password
                        </Text>
                        <TextInput
                            style={styles.inputs}
                            value={values.password}
                            onChangeText={handleChange('password')}
                            placeholder="expelliarmus"
                            onBlur={() => setFieldTouched('password')}
                            secureTextEntry={true}
                        />
                        {touched.password && errors.password &&
                            <Text style={styles.errors}>{errors.password}</Text>
                        }
                        <Button
                            style={styles.inputs}
                            title="sign in"
                            disabled={!isValid}
                            onPress={() => this.logInUser(values)}
                        />
                    </View>
                </Fragment>
            )}
            </Formik>
        );
    }
}


styles = StyleSheet.create({
    inputs: {
        fontSize: 50,
        color: 'black',
        fontFamily: 'Courier',
        borderColor: 'black',
        borderWidth: 1,
        height: 50
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        height: 50,
        marginLeft: 20
    },
    errors: {
        fontSize: 50,
        color: 'red',
        fontFamily: 'Courier'
    }
})
