
import * as yup from 'yup'
import { Formik } from 'formik'

import React, { Component, Fragment } from 'react';
import { TextInput, Text, Button, Alert, StyleSheet, Switch, View } from 'react-native';

import {FirebaseWrapper} from '../firebase/firebase'


export class SignUp extends Component {

    async createUser(values){

        try {
            await FirebaseWrapper.GetInstance().CreateNewDocument('users', { email: values.email, password: values.password});
            Alert.alert('congrats you are now a member', 'click go home to return to the home screen')
        } catch (error) {console.log('something went wrong signing up', error)}
    }


    render() {
        return (
            <Formik
                initialValues={{ email: '', password: '', agree: false }}
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
                confirmPassword: yup
                    .string()
                    .required('please confirm password')
                    .test('confirm-password', 'passwords do not match', function(val){return this.parent.password === val}),
                agree: yup
                    .boolean()
                    .test('is-true', 'must agree to terms to continue', val => val === true)
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
                        <Text style={styles.inputs}>
                            confirm password
                        </Text>
                        <TextInput
                            style={styles.inputs}
                            value={values.confirmPassword}
                            onChangeText={handleChange('confirmPassword')}
                            placeholder="expelliarmus"
                            onBlur={() => setFieldTouched('confirmPassword')}
                            secureTextEntry={true}
                        />
                        {touched.confirmPassword && errors.confirmPassword &&
                            <Text style={styles.errors}>{errors.confirmPassword}</Text>
                        }
                        <Text style={styles.inputs}>agree to terms</Text>
                        <Switch
                            value={values.agree}
                            onValueChange={value => {setFieldValue('agree', value);}}
                        />
                        <Text style={styles.errors}>
                            {touched.agree && errors.agree}
                        </Text>
                        <Button
                            style={styles.inputs}
                            title="sign up"
                            disabled={!isValid}
                            onPress={() => this.createUser(values)}
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
        fontSize: 10,
        color: 'black',
        fontFamily: 'Courier'
    },
    container: {
        justifyContent: 'center',
        alignContent: 'center'
    },
    errors: {
        fontSize: 10,
        color: 'red',
        fontFamily: 'Courier'
    }
})
