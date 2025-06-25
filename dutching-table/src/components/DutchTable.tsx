import React, { useMemo, useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Chip,
  TextField,
  Paper,
  useMediaQuery,
  CssBaseline,
  ThemeProvider,
  TableContainer,
  Collapse,
  Container,
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useReactTable, getCoreRowModel, flexRender, createColumnHelper } from '@tanstack/react-table';
import { darkTheme, lightTheme } from '../theme';
import { testData } from '../data/testData';
import type { DutchBetOpportunity } from '../types/DutchBetOpportunity';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export function DutchTable() {
  const isMobile = useMediaQuery('(max-width:768px)');
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState<string | null>(null);
  const [isDarkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setDarkMode(newMode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
    }
  };

  const data = useMemo(() =>
    testData.filter((op) =>
      op.market.toLowerCase().includes(search.toLowerCase()) ||
      op.combinations.some((c) => c.selection.standardizedName.toLowerCase().includes(search.toLowerCase()))
    ), [search]
  );

  const lastUpdated = useMemo(() => {
    const timestamps = testData.flatMap((row) => row.combinations.map((c) => c.timestamp));
    const latest = Math.max(...timestamps);
    return dayjs(latest).fromNow();
  }, []);

  const columnHelper = createColumnHelper<DutchBetOpportunity>();
  const columns = [
    columnHelper.accessor((row) => {
      const teams = row.combinations.filter(c => c.selection.type === 'team').map(c => c.selection.standardizedName);
      return teams.length >= 2 ? `${teams[0]} vs ${teams[1]}` : row.market;
    }, {
      id: 'event',
      header: 'EVENT',
      cell: (info) => info.getValue()
    }),
    columnHelper.accessor((row) => dayjs(row.combinations[0].timestamp).format('HH:mm'), {
      id: 'time',
      header: 'TIME'
    }),
    columnHelper.accessor(row => row.combinations[0].bookmaker, {
      id: 'bookie1',
      header: 'BOOKIE 1',
      cell: (info) => <Chip label={info.getValue()} sx={{ backgroundColor: 'green', color: 'white' }} />
    }),
    columnHelper.accessor(row => row.combinations[0].odds, {
      id: 'odds1',
      header: 'ODDS 1'
    }),
    columnHelper.accessor(row => row.combinations[0].selection.rawName, {
      id: 'sel1',
      header: 'MARKET SELECTION'
    }),
    columnHelper.accessor(row => row.combinations[1]?.bookmaker || '-', {
      id: 'bookie2',
      header: 'BOOKIE 2',
      cell: (info) => info.getValue() !== '-' ? <Chip label={info.getValue()} sx={{ backgroundColor: 'purple', color: 'white' }} /> : '-'
    }),
    columnHelper.accessor(row => row.combinations[1]?.odds || '-', {
      id: 'odds2',
      header: 'ODDS 2'
    }),
    columnHelper.accessor(row => row.combinations[1]?.selection.rawName || '-', {
      id: 'sel2',
      header: 'MARKET SELECTION 2'
    }),
    columnHelper.accessor(() => 'PROFIT', {
      id: 'profit',
      header: 'PL',
      cell: () => <Chip label="PROFIT" color="success" />
    })
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  });
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
                '& .MuiInputLabel-root': { color: 'gray' },
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
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id} style={{ backgroundColor: '#ccc' }}>
                    {headerGroup.headers.map((header) => (
                      <th key={header.id} style={{ padding: '8px', textAlign: 'left' }}>
                        {flexRender(header.column.columnDef.header, header.getContext())}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map((row) => (
                  <React.Fragment key={row.id}>
                    <tr onClick={() => setExpanded(row.original.eventId === expanded ? null : row.original.eventId)} style={{ cursor: 'pointer' }}>
                      {row.getVisibleCells().map((cell) => (
                        <td key={cell.id} style={{ padding: '8px' }}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                      ))}
                    </tr>
                    {expanded === row.original.eventId && (
                      <tr>
                        <td colSpan={9} style={{ backgroundColor: '#2e7d32', color: 'white', padding: '1rem' }}>
                          <Box display="flex" justifyContent="space-around">
                            {[0, 1].map(i => {
                              const combo = row.original.combinations[i];
                              if (!combo) return null;
                              const stake = Math.round(2000 / (1 / combo.odds));
                              const returns = Math.round(stake * combo.odds);
                              return (
                                <Box key={i} textAlign="center">
                                  <Typography variant="subtitle2">STAKE</Typography>
                                  <Typography variant="h6">{stake}</Typography>
                                  <Typography variant="subtitle2">RETURN</Typography>
                                  <Typography variant="h6" sx={{ color: '#69f0ae' }}>{returns}</Typography>
                                </Box>
                              );
                            })}
                          </Box>
                          <Typography variant="caption" color="lightgray" textAlign="center" mt={2} display="block">
                            Last Updated: {dayjs(row.original.combinations[0]?.timestamp).fromNow()}
                          </Typography>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </TableContainer>
        </Box>
      </Box>
    </ThemeProvider>
  );
}