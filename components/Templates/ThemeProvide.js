import React, { useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme } from './lightTheme';
import { darkTheme } from './darkTheme';
import { GlobalStyles } from './GlobalStyle';

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <StyledThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <button className="theme-toggle" onClick={toggleTheme}>
        Toggle Theme
      </button>
      {children}
    </StyledThemeProvider>
  );
};
