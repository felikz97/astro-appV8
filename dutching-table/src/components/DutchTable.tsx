import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TextField,
  useMediaQuery,
  Box,
  CssBaseline,
  Chip,
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ThemeProvider } from '@mui/material/styles';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { lightTheme, darkTheme } from '../theme';
import { testData } from '../data/testData';
import type { DutchBetOpportunity } from '../types/DutchBetOpportunity';

dayjs.extend(relativeTime);

export function DutchTable() {
  const isMobile = useMediaQuery('(max-width:768px)');
  const [data] = useState<DutchBetOpportunity[]>(testData);
  const [search, setSearch] = useState('');
  const [userEmail] = useState('john@example.com');
  const [isDarkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });
  // Initialize dark mode based on localStorage or default to light mode
  

  const toggleTheme = () => {
    setDarkMode(prev => {
      const newMode = !prev;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  const filteredData = data.filter(opportunity =>
    opportunity.market.toLowerCase().includes(search.toLowerCase())
  );

  const latestUpdate = Math.max(
    ...data.map(op => op.combinations[0]?.timestamp || 0)
  );

  const relative = dayjs(latestUpdate).fromNow();

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />

      <Box sx={{ minHeight: '100vh' }}>
        {/* Header */}
        <AppBar position="static" color="default" elevation={1}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Box display="flex" alignItems="center" gap={1}>
              <img src="/src/assets/logo.png" alt="Logo" style={{ height: 40 }} />
            </Box>
            <Box display="flex" alignItems="center" gap={2}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <AccountCircle fontSize="large" />
                <Typography variant="caption"> account </Typography>
              </Box>
              <IconButton color="inherit" onClick={toggleTheme}>
                {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        <Box p={isMobile ? 1 : 3}>
          <Typography variant="body2" color="gray" mb={2}>
            Last Updated: {relative}
          </Typography>
          {/* Page Header */}
          <Box textAlign="center" mb={2}>
             <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                color: isDarkMode ? 'white' : 'black',
              }}
            >
              DUTCH BETS
            </Typography>
        
          </Box>

          {/* Search Bar */}
          <Box
            display="flex"
            flexDirection={isMobile ? 'column' : 'row'}
            alignItems="center"
            justifyContent="space-between"
            gap={2}
            mb={2}
          >
            {/* Search Field */}
            <TextField
              label="Search by Market"
              variant="outlined"
              size="small"
              value={search}
              onChange={e => setSearch(e.target.value)}
              fullWidth={isMobile}
              InputProps={{ style: { color: isDarkMode ? 'white' : 'black' } }}
              InputLabelProps={{ style: { color: 'gray' } }}
              sx={{
                flexGrow: 1,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: 'gray' },
                  '&:hover fieldset': { borderColor: isDarkMode ? 'white' : 'black' },
                },
              }}
            />

            {/* Refresh Button */}
            <IconButton
              onClick={() => window.location.reload()}
              sx={{
                backgroundColor: '#2e7d32',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#1b5e20',
                },
                width: 100,
                height: 40,
                borderRadius: '5px',
                textSizeAdjust: 'auto',
              }}
            >
              Refresh
            </IconButton>
          </Box>

          <TableContainer component={Paper}>
            <Table size={isMobile ? 'small' : 'medium'}>
              <TableHead bgcolor="#8d8d8d" >
                <TableRow>
                  <TableCell><b>EVENT</b></TableCell>
                  <TableCell><b>TIME</b></TableCell>
                  <TableCell><b>BOOKIE 1</b></TableCell>
                  <TableCell><b>ODDS 1</b></TableCell>
                  <TableCell><b>MARKET SELECTION</b></TableCell>
                  <TableCell><b>BOOKIE 2</b></TableCell>
                  <TableCell><b>ODDS 2</b></TableCell>
                  <TableCell><b>MARKET SELECTION 2</b></TableCell>
                  <TableCell><b>PL</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData.map(row => (
                  <TableRow key={row.eventId}>
                    <TableCell>
                      {row.combinations.length === 2
                        ? `${row.combinations[0].selection.standardizedName} vs ${row.combinations[1].selection.standardizedName}`
                        : row.combinations[0].selection.standardizedName}
                    </TableCell>
                    <TableCell>{dayjs(row.combinations[0].timestamp).format('HH:mm')}</TableCell>
                    <TableCell>
                      <Chip label={row.combinations[0]?.bookmaker} color="primary" />
                    </TableCell>
                    <TableCell>{row.combinations[0]?.odds}</TableCell>
                    <TableCell>{row.combinations[0]?.selection.rawName}</TableCell>
                    <TableCell>
                      {row.combinations[1] && (
                        <Chip label={row.combinations[1].bookmaker} color="secondary" />
                      )}
                    </TableCell>
                    <TableCell>{row.combinations[1]?.odds || '-'}</TableCell>
                    <TableCell>{row.combinations[1]?.selection.rawName || '-'}</TableCell>
                    <TableCell>
                      <Chip
                        label="PROFIT"
                        sx={{ backgroundColor: '#00c853', color: 'white', fontWeight: 'bold' }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Stake and Return Summary Section */}
          <Box
            mt={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              backgroundColor: '#38a354', // dark green
              borderRadius: '8px',
              padding: '1.5rem',
              color: 'white',
              gap: 10,
              flexWrap: 'wrap',
            }}
          >
            {/* Stake + Return Block 1 */}
            <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>STAKE</Typography>
              <Typography variant="h6">1000</Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>RETURN</Typography>
              <Typography variant="h6" sx={{ color: '#00e676' }}>1569</Typography>
            </Box>

            {/* Stake + Return Block 2 */}
            <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>STAKE</Typography>
              <Typography variant="h6">1000</Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>RETURN</Typography>
              <Typography variant="h6" sx={{ color: '#00e676' }}>2510</Typography>
            </Box>
          </Box>


          {filteredData.length === 0 && (
            <Typography variant="subtitle1" align="center" mt={2} color="gray">
              No opportunities found
            </Typography>
          )}
        </Box>
      </Box>
      
    </ThemeProvider>
  );
}
