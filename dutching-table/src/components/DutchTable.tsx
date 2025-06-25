import React, { useState } from 'react';
{/* eslint-disable @typescript-eslint/no-unused-vars */}
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
  Tabs,
  Tab,
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

{/* eslint-disable @typescript-eslint/no-unused-vars */}
// Main component for the Dutch Table
export function DutchTable() {
  const isMobile = useMediaQuery('(max-width:768px)');
  const [data] = useState<DutchBetOpportunity[]>(testData);
  const [search, setSearch] = useState('');
  // const [userEmail] = useState('john@example.com');  
  const [isDarkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  const [expandedRow, setExpandedRow] = useState<string | null>(null);
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

  {/* eslint-disable @typescript-eslint/no-unused-vars */}
  // Render the main table with search, theme toggle, and data display
  {/* eslint-disable @typescript-eslint/no-unused-vars */}
  if (!data || data.length === 0) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Typography variant="h6" color="gray">
          No data available
        </Typography>
      </Box>
    );
  }

  
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
              label="Search by Event/Market"
              variant="outlined"
              size="small"
              value={search}
              onChange={e => setSearch(e.target.value)}
              fullWidth={isMobile}
              InputProps={{ style: { color: isDarkMode ? 'white' : 'black' } }}
              InputLabelProps={{ style: { color: 'grey' } }}
              sx={{
                flexGrow: 1,
                maxWidth: 300,
                minWidth: 200,
                '& .MuiOutlinedInput-root': {
                  color: 'green',
                  '& fieldset': { borderColor: 'gray' },
                  '&:hover fieldset': { borderColor: 'green' },
                },
                '& .MuiInputLabel-root': {color: 'gray',
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
          </Box> {/* Table Container */}
          <TableContainer component={Paper}>
            <Table size={isMobile ? 'small' : 'medium'}>
              <TableHead sx={{ backgroundColor: "#8d8d8d"}} >
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
                {filteredData.map((row) => {
                  const isExpanded = expandedRow === row.eventId;
                  return (
                    <React.Fragment key={row.eventId}>
                      <TableRow
                        onClick={() => setExpandedRow(isExpanded ? null : row.eventId)}
                        hover
                        sx={{ cursor: 'pointer' }}
                      >
                        <TableCell>
                          {
                            (() => {
                              const teams = row.combinations
                                .filter(c => c.selection.type === 'team')
                                .map(c => c.selection.standardizedName);

                              if (teams.length >= 2) {
                                return `${teams[0]} vs ${teams[1]}`;
                              }

                              const fallbackSelections = row.combinations
                                .slice(0, 2)
                                .map(c => c.selection.standardizedName);

                              return fallbackSelections.length === 2
                                ? `${fallbackSelections[0]} vs ${fallbackSelections[1]}`
                                : fallbackSelections[0] || '—';
                            })()
                          }
                        </TableCell>

                        <TableCell>{dayjs(row.combinations[0].timestamp).format('HH:mm')}</TableCell>
                        <TableCell>
                          <Chip label={row.combinations[0]?.bookmaker} color="primary" />
                        </TableCell>
                        <TableCell>{row.combinations[0]?.odds}</TableCell>
                        <TableCell>{row.combinations[0]?.selection.rawName}</TableCell>
                        <TableCell>
                          {row.combinations[1] && (
                            <Chip label={row.combinations[1]?.bookmaker} color="secondary" />
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

                      {/* Expanded row with mock data */}
                      {isExpanded && (() => {
                        const totalStake = 2000;
                        const odds1 = row.combinations[0]?.odds ?? 1;
                        const odds2 = row.combinations[1]?.odds ?? 1;
                        const inverseSum = 1 / odds1 + 1 / odds2;

                        const stake1 = totalStake / inverseSum / odds1;
                        const stake2 = totalStake / inverseSum / odds2;

                        const roundedStake1 = Math.round(stake1);
                        const roundedStake2 = Math.round(stake2);
                        const return1 = Math.round(roundedStake1 * odds1);
                        const return2 = Math.round(roundedStake2 * odds2);

                        {/* this returns expandable rows*/}
                        return (
                          <TableRow>
                            <TableCell colSpan={9} sx={{ backgroundColor: '#2e7d32', padding: 2 }}>
                              <Box
                                display="flex"
                                justifyContent="space-evenly"
                                alignItems="center"
                                flexWrap="wrap"
                                sx={{ color: 'white' }}
                              >
                                {/* BOOKIE 1 */}
                                <Box textAlign="center" flex={1} minWidth={120}>
                                  <Typography variant="subtitle2">STAKE</Typography>
                                  <Typography variant="h6">{roundedStake1}</Typography>
                                  <Typography variant="subtitle2">RETURN</Typography>
                                  <Typography variant="h6" sx={{ color: '#69f0ae' }}>{return1}</Typography>
                                </Box>

                                {/* BOOKIE 2 */}
                                <Box textAlign="center" flex={1} minWidth={120}>
                                  <Typography variant="subtitle2">STAKE</Typography>
                                  <Typography variant="h6">{roundedStake2}</Typography>
                                  <Typography variant="subtitle2">RETURN</Typography>
                                  <Typography variant="h6" sx={{ color: '#69f0ae' }}>{return2}</Typography>
                                </Box>
                              </Box>

                              <Typography variant="caption" color="lightgray" textAlign="center" mt={1} display="block">
                                Last Updated: {dayjs(row.combinations[0]?.timestamp).fromNow()}
                              </Typography>
                            </TableCell>
                          </TableRow>
                        );
                      })()}
                    </React.Fragment>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          {filteredData.length === 0 && (
            <Typography variant="subtitle1" align="center" mt={2} color="gray">
              No markt or event found
            </Typography>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
