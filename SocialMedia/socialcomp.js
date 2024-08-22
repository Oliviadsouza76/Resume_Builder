import React from 'react';
import { Grid, Typography,Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import GitHub from '@mui/icons-material/GitHub';

const SocialMediaIcons = () => (
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
);

export default SocialMediaIcons;
