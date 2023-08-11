import React, { useState } from 'react';
import { TableRow, TableCell, IconButton,  } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const DynamicDropdownTable = ({ userdata }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {userdata.first_name + " " + userdata.last_name}
                </TableCell>
            </TableRow>
            {/* Add more rows and content for the expanded section */}
        </>
    );
};

export default DynamicDropdownTable;
