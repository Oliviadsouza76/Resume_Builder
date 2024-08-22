import { useState } from 'react';
import { Typography, Grid, Box, TextField } from '@material-ui/core';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import { GitHub } from '@material-ui/icons';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { SignupSchema } from '../../../SignUpSchemaValid';

const RegistrationPage = () => {
  return (
    <div className="MainDivStyle">
      <Card className="MainCardStyle">
        <Box
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="transparent"
          mx={4}
          mt={-2}
          p={5}
          mb={-4}
          textAlign="center"
        >
          <Typography variant="h6" fontWeight="medium" color="primary" mt={1}>
            Register
          </Typography>
        </Box>
        <Box>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={2}>
              <Typography component={Link} to="#" variant="body1" color="primary">
                <FacebookIcon color="inherit" fontSize="large" />
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography component={Link} to="#" variant="body1" color="primary">
                <InstagramIcon color="inherit" fontSize="large" />
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography component={Link} to="#" variant="body1" color="primary">
                <GoogleIcon color="inherit" fontSize="large" />
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography component={Link} to="#" variant="body1" color="primary">
                <GitHub color="inherit" fontSize="large" />
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box pt={4} pb={3} px={3} maxWidth="400px" mx="auto">
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              mobileNo: '',
              email: '',
              password: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              console.log('Form submitted with values:', values);
            }}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <Box mb={3}>
                  <Field
                    as={TextField}
                    name="firstName"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    error={touched.firstName && Boolean(errors.firstName)}
                    helperText={touched.firstName && errors.firstName}
                  />
                </Box>
                <Box mb={3}>
                  <Field
                    as={TextField}
                    name="lastName"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    error={touched.lastName && Boolean(errors.lastName)}
                    helperText={touched.lastName && errors.lastName}
                  />
                </Box>
                <Box mb={3}>
                  <Field
                    as={TextField}
                    name="mobileNo"
                    label="Mobile No"
                    variant="outlined"
                    fullWidth
                    error={touched.mobileNo && Boolean(errors.mobileNo)}
                    helperText={touched.mobileNo && errors.mobileNo}
                  />
                </Box>
                <Box mb={3}>
                  <Field
                    as={TextField}
                    name="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                </Box>
                <Box mb={3}>
                  <Field
                    as={TextField}
                    name="password"
                    label="Password"
                    variant="outlined"
                    type="password"
                    fullWidth
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                  />
                </Box>
                <Box mt={4} mb={3}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ backgroundColor: 'orange', '&:hover': { backgroundColor: 'darkorange' } }}
                    fullWidth
                    disabled={isSubmitting}
                  >
                    Sign Up
                  </Button>
                </Box>
                <Box textAlign="center">
                  <Typography variant="button" color="textSecondary">
                    Already have an account?{' '}
                    <Typography
                      component={Link}
                      to="/login"
                      variant="button"
                      color="primary"
                      fontWeight="medium"
                    >
                      Sign in
                    </Typography>
                  </Typography>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Card>
    </div>
  );
};

export default RegistrationPage;
