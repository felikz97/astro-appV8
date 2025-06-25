// src/theme.ts
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#4caf50' },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#81c784' },
    background: { default: '#121212', paper: '#1e1e1e' },
  },
});
export const theme = (isDarkMode: boolean) => (isDarkMode ? darkTheme : lightTheme);
