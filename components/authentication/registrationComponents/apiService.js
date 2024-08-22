// apiService.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8062/users', // Replace with your actual API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export const registerUser = async (userData) => {
  try {
    const response = await apiClient.post('/addRegisterUser', userData);
    // Assuming that the successful response returns the saved user data
    return response.data;
  } catch (error) {
    // If the response has an error, it will be in error.response
    if (error.response) {
      // Log the error for debugging purposes (optional)
      console.error('Error response:', error.response.data);
      throw new Error(error.response.data || 'Failed to register');
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Error request:', error.request);
      throw new Error('No response received from server');
    } else {
      // Something happened in setting up the request that triggered an error
      console.error('Error message:', error.message);
      throw new Error('Error during registration process');
    }
  }
};
