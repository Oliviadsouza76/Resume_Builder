// RegistrationForm.jsx
import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import { SignupSchema } from '../../../SignUpSchemaValid';

import {FormInputField} from '../../authentication/registrationComponents/FormInputField';
import {FormErrorMessage} from './FormErrorMessage';
import {FormSubmitButton} from './FormSubmitButton'
import { registerUser } from './apiService'; 
const RegistrationForm = () => (
  <Formik
    initialValues={{
      user_name:'',
      firstName: '',
      lastName: '',
      mobileNumber: '',
      email: '',
      password: '',
    }}
    validationSchema={SignupSchema}
    onSubmit={async (values, { setSubmitting, setErrors }) => {
      try {
        const response = await registerUser(values);
        console.log('Form submitted successfully:', response);
        // Handle successful registration (e.g., redirect, show a message)
      } catch (error) {
        console.error('Error submitting form:', error);
        setErrors({ api: error.message || 'Registration failed' });
      } finally {
        setSubmitting(false);
      }
    }}
  >
    {({ errors, touched, isSubmitting }) => (
      <Form>
        <FormInputField
          name="firstName"
          label="First Name"
          error={touched.firstName && Boolean(errors.firstName)}
          helperText={touched.firstName && errors.firstName}
        />
        <FormInputField
          name="lastName"
          label="Last Name"
          error={touched.lastName && Boolean(errors.lastName)}
          helperText={touched.lastName && errors.lastName}
        />
        <FormInputField
          name="mobileNo"
          label="Mobile No"
          error={touched.mobileNumber && Boolean(errors.mobileNumber)}
          helperText={touched.mobileNumber && errors.mobileNumber}
        />
        <FormInputField
          name="email"
          label="Email"
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />
        <FormInputField
          name="password"
          label="Password"
          type="password"
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
        />
        <FormErrorMessage message={errors.api} />
        <FormSubmitButton isSubmitting={isSubmitting} text="Sign In" />
        <Box>
          <Typography variant="button" color="text" textAlign="center">
            Already have an account?{' '}
            <Typography
              component={Link}
              to="/login"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
              textAlign="center"
            >
              Sign up
            </Typography>
          </Typography>
        </Box>
      </Form>
    )}
  </Formik>
);

export default RegistrationForm;
