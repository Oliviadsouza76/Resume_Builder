import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Card, Box, Typography } from '@mui/material';
import backgroundImage from '../../../assets/images/pngtree-abstract-illustration-background.png';
import './index.css';
import LoginForm from './LoginForm';
import SocialMediaIcons from '../../../../src/SocialMedia/socialcomp';
import AuthSnackbar from './AuthSnackbar';
import { loginUser } from './apiService'; // Import the service

const LoginPage = () => {
  const history = useHistory();
  const [error, setError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleLogin = async ({ username, password }) => {
    try {
      const token = await loginUser(username, password);
      setError('');
      history.push('/resume');
    } catch (error) {
      setError(error.message);
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden', // Prevent scrolling
    }}
    >
      <Card
       style={{
        border: 'none', // Remove border if not needed
        boxShadow: 'none', // Remove shadow if not needed
        borderRadius: '16px',
        p: 2,
        maxWidth: '500px',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0)',  // Semi-transparent background for the card
      }}
      >
        <AuthSnackbar open={openSnackbar} onClose={handleCloseSnackbar} error={error} />
        <Box
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          // coloredShadow="info"
          mx={4}
          mt={-3}
          p={5}
          mb={1}
          sx={{ maxWidth: '100%', width: '300px' }}
          textAlign="center"
        >
          <Typography className="special_fontsize" variant="h3" fontWeight="medium" mt={1}>
            Sign in
          </Typography>
        </Box>
        <SocialMediaIcons />
        <Box pt={4} pb={3} px={3} maxWidth="400px" mx="auto">
          <LoginForm onSubmit={handleLogin} />
          <Box>
            <Typography variant="button" color="text" textAlign="center">
              Don&apos;t have an account?{' '}
              <Typography
                component={Link}
                to="/register"
                variant="button"
                color="info"
                fontWeight="medium"
              >
                Sign Up
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Card>
    </div>
  );
};

export default LoginPage;
