import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DynamicDropdownTable from './DropDownTable'; // Adjust the import path

const UserAccordion = ({ user }) => {
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{user.first_name} {user.last_name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Attribute</TableCell>
                            <TableCell>Value</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* Render user details here */}
                        <TableRow>
                            <TableCell>First Name</TableCell>
                            <TableCell>{user.first_name}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Last Name</TableCell>
                            <TableCell>{user.last_name}</TableCell>
                        </TableRow>
                        {/* Add more rows for other attributes */}
                    </TableBody>
                </Table>
                <DynamicDropdownTable userdata={user} />
            </AccordionDetails>
        </Accordion>
    );
};

export default UserAccordion;
