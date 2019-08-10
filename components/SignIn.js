
import * as yup from 'yup'
import { Formik } from 'formik'

import React, { Component, Fragment } from 'react';
import { TextInput, Text, Button, Alert, StyleSheet } from 'react-native';


export default class SignIn extends Component {
    render() {
        return (
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={values => Alert.alert(JSON.stringify(values))}
                validationSchema={yup.object().shape({
                email: yup
                    .string()
                    .email()
                    .required(),
                password: yup
                    .string()
                    .min(8)
                    .required(),
                })}
            >
            {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
                <Fragment>
                    <TextInput
                        style={styles.inputs}
                        value={values.email}
                        onChangeText={handleChange('email')}
                        onBlur={() => setFieldTouched('email')}
                        placeholder="E-mail"
                    />
                    {touched.email && errors.email &&
                        <Text style={styles.errors}>{errors.email}</Text>
                    }
                    <TextInput
                        style={styles.inputs}
                        value={values.password}
                        onChangeText={handleChange('password')}
                        placeholder="Password"
                        onBlur={() => setFieldTouched('password')}
                        secureTextEntry={true}
                    />
                    {touched.password && errors.password &&
                        <Text style={styles.errors}>{errors.password}</Text>
                    }
                    <Button
                        title="Sign In"
                        disabled={!isValid}
                        onPress={handleSubmit}
                    />
                </Fragment>
            )}
            </Formik>
        );
    }
}


styles = StyleSheet.create({
    inputs: {
        fontSize: 10,
        color: 'black'
    },
    errors: {
        fontSize: 10,
        color: red
    }
})
