import React from 'react';
import { TableRow, TableCell, Collapse, Typography, Table, TableBody } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const EducationDetails = ({ education }) => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <KeyboardArrowDownIcon
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    />
                </TableCell>
                <TableCell component="th" scope="row">
                Education
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={2}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Typography variant="h6" gutterBottom component="div">
                            Education
                        </Typography>
                        <Table size="small" aria-label="education">
                            <TableBody>
                                {education.map((edu) => (
                                    <TableRow key={edu.education_id}>
                                        <TableCell>{edu.school_name}</TableCell>
                                        <TableCell>{edu.degree}</TableCell>
                                        <TableCell>{edu.school_location}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
};

export default EducationDetails;
