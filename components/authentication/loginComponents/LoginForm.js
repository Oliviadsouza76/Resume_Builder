import React, { useState } from 'react';
import { Box, TextField, FormControlLabel, Checkbox, Button } from '@mui/material';

const LoginForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ username, password });
  };

  return (
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
    </Box>
  );
};

export default LoginForm;
