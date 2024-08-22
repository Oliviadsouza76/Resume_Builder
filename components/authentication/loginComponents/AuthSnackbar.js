import React from 'react';
import { Snackbar, Alert } from '@mui/material';

const AuthSnackbar = ({ open, onClose, error }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      sx={{
        position: 'static',
        top: '-90%',
        right: '80%',
        transform: 'translateY(10px)',
      }}
    >
      <Alert onClose={onClose} severity="error" sx={{ width: '100%' }}>
        {error}
      </Alert>
    </Snackbar>
  );
};

export default AuthSnackbar;
