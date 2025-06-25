import React from 'react';
import { TableRow, TableCell, Chip } from '@mui/material';
import dayjs from 'dayjs';
import { getMatchLabel } from '../utils/getMatchLabel';
import type { DutchBetOpportunity } from '../types/DutchBetOpportunity';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
interface Props {
    row: DutchBetOpportunity;
    isExpanded: boolean;
    onToggleExpand: () => void;
}

const [drawerOpen, setDrawerOpen] = useState(false);

const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
};

export const DutchTableRow: React.FC<Props> = ({ row, isExpanded, onToggleExpand }) => {
    const [a, b] = row.combinations;
    return (
        <>
        <TableRow onClick={onToggleExpand} hover sx={{ cursor: 'pointer' }}>
            <TableCell>{getMatchLabel(row.combinations)}</TableCell>
            <TableCell>{dayjs(a.timestamp).format('HHmm') + 'HRS'}</TableCell>
            <TableCell><Chip label={a.bookmaker} color="primary" /></TableCell>
            <TableCell>{a.odds}</TableCell>
            <TableCell>{a.selection.rawName}</TableCell>
            <TableCell>{b ? <Chip label={b.bookmaker} color="secondary" /> : '-'}</TableCell>
            <TableCell>{b?.odds || '-'}</TableCell>
            <TableCell>{b?.selection.rawName || '-'}</TableCell>
            <TableCell>
            <Chip
                label="PROFIT"
                sx={{ backgroundColor: '#00c853', color: 'white', fontWeight: 'bold' }}
            />
            </TableCell>
        </TableRow>

        {isExpanded && (
            <TableRow>
            <TableCell colSpan={9} sx={{ backgroundColor: '#1b5e20', color: 'white' }}>
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div>
                    <strong>STAKE</strong> <br /> 1000
                </div>
                <div>
                    <strong>STAKE</strong> <br /> 1000
                </div>
                <div>
                    <strong>RETURN</strong> <br /> <span style={{ color: 'lime' }}>1569</span>
                </div>
                <div>
                    <strong>RETURN</strong> <br /> <span style={{ color: 'lime' }}>2510</span>
                </div>
                </div>
            </TableCell>
            </TableRow>
        )}
        </>
    );
};

export default DutchTableRow;