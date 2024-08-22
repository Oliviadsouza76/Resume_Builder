// src/services/authService.js
export const loginUser = async (username, password) => {
  const response = await fetch('http://localhost:8062/users/generateToken', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error('Authentication failed');
  }

  return response.text();
};
