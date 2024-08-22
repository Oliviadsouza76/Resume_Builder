// RegistrationCard.jsx
import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Card } from 'react-bootstrap';
import SocialMediaIcons from '../../../SocialMedia/socialcomp';
import RegistrationForm from '../registrationComponents/RegistrationForm';

const RegistrationCard = () => (
  <div>
    <Box
      variant="gradient"
      bgColor="info"
      borderRadius="lg"
      coloredShadow="info"
      mx={4}
      mt={-2}
      p={5}
      mb={-4}
      sx={{ maxWidth: '100%', width: '300px' , border: 'none'}}
      textAlign="center"
    >
      <Typography variant="h6" fontWeight="medium" color="white" mt={1}>
        Register
      </Typography>
    </Box>
    <Box>
      <SocialMediaIcons />
    </Box>
    <Box pt={4} pb={3} px={3} maxWidth="400px" mx="auto">
      <RegistrationForm />
    </Box>
 </div>
);

export default RegistrationCard;
