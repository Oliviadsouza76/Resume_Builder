import { Box, Button } from '@material-ui/core';
export const FormSubmitButton = ({ isSubmitting, text }) => (
  <Box mt={4} mb={3}>
    <Button
      type="submit"
      style={{
        backgroundColor: 'yellow',
        color: 'black', // Ensure text color is set if background is light
        '&:hover': { backgroundColor: 'orange' },
      }}
      variant="contained" // Change variant to "contained" to ensure styles are applied
      fullWidth
      disabled={isSubmitting}
    >
      {text}
    </Button>
  </Box>
);
