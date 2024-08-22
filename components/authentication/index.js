import { useState } from 'react';
import {
  Typography,
  Grid,
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  Snackbar,
  Alert,
} from '@mui/material';
import Button from '@mui/material/Button';
import { useHistory, Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import { GitHub } from '@mui/icons-material';
import { Card } from 'react-bootstrap';
import backgroundImage from '../../assets/images/pngtree-abstract-illustration-background.png';
import './alindex.css';

const LoginPage = () => {
  const history = useHistory();

  // State variables
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [error, setError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    try {
      const response = await fetch('http://localhost:8062/users/generateToken', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const token = await response.text();
        setToken(token);
        setError('');
        // Redirect to another page after successful login
        history.push('/resume');
      } else {
        throw new Error('Authentication failed');
      }
    } catch (error) {
      setError(error.message);
      setOpenSnackbar(true);
    }
  };

  // Handle snackbar close
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
        sx={{
          border: 'none', // Remove border if not needed
          boxShadow: 'none', // Remove shadow if not needed
          borderRadius: '16px',
          p: 2,
          maxWidth: '500px',
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background for the card
        }}
      >
        {/* Snackbar positioned relative to the Typography */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          sx={{
            position: 'static',
            top: '-90%', // Position it below the Typography
            right: '80%', // Align it to the right
            transform: 'translateY(10px)', // Optional: Adjust spacing
          }}
        >
          <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }} >
            {error}
          </Alert>
        </Snackbar>
        <Box
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
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
        <Box>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={2}>
              <Typography component="a" href="#" variant="body1" color="blue">
                <FacebookIcon color="inherit" fontSize="large" />
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography component="a" href="#" variant="body1" color="blue">
                <InstagramIcon color="inherit" fontSize="large" />
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography component="a" href="#" variant="body1" color="blue">
                <GoogleIcon color="inherit" fontSize="large" />
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography component="a" href="#" variant="body1" color="blue">
                <GitHub color="inherit" fontSize="large" />
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box pt={4} pb={3} px={3} maxWidth="400px" mx="auto">
          <Box component="form" role="form" onSubmit={handleSubmit}>
            <Box mb={5}>
              <TextField
                type="text"
                label="Email"
                variant="outlined"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Box>
            <Box mb={2}>
              <TextField
                type="password"
                label="Password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>
            <Box mb={5}>
              <FormControlLabel control={<Checkbox color="primary" />} label="Remember Me" />
            </Box>
            <Box mt={4} mb={3}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ backgroundColor: 'yellow', '&:hover': { backgroundColor: 'orange' } }}
                fullWidth
              >
                Sign In
              </Button>
            </Box>
            {token && <p>Token: {token}</p>}

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
        </Box>
      </Card>
    </div>
  );
};

export default LoginPage;
