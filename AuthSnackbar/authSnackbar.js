import React from 'react';
import { Snackbar, Alert } from '@mui/material';

const AuthSnackbar = ({ open, onClose, error }) => (
  <Snackbar
    open={open}
    autoHideDuration={6000}
    onClose={onClose}
    sx={{
      position: 'absolute',
      top: '16px', // Adjust if needed
      right: '16px',
      transform: 'translateY(10px)', // Optional: Adjust spacing
    }}
  >
    <Alert onClose={onClose} severity="error" sx={{ width: '100%' }}>
      {error}
    </Alert>
  </Snackbar>
);

export default AuthSnackbar;
