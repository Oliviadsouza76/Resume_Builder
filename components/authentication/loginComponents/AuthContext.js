import React, { createContext, useState, useContext} from 'react';
import { loginUser } from './apiService';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState('');
  const [error, setError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState('');

  const login = async (username, password) => {
    try {
      const response = await loginUser(username, password);
      setToken(response);
      setError('');
    } catch (error) {
      setError(error.message);
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar=()=>{
    setOpenSnackbar(false);
  }

  return(
    <AuthContext.Provider value={{token, error, openSnackbar, login, handleCloseSnackbar}}>{children}</AuthContext.Provider>
  )
};
export const useAuth = () => useContext(AuthContext);