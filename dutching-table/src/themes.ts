// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    success: {
      main: '#4caf50',
      light: '#e8f5e9',
      dark: '#2e7d32'
    }
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: 'bold',
          backgroundColor: '#f5f5f5'
        }
      }
    }
  }
});

export default theme;