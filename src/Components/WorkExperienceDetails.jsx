import React from 'react';
import { TableRow, TableCell, Collapse, Typography, Table, TableBody } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const WorkExperienceDetails = ({ workExperience }) => {
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
                   Work expernince
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={2}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Typography variant="h6" gutterBottom component="div">
                            Work Experience
                        </Typography>
                        <Table size="small" aria-label="work-experience">
                            <TableBody>
                                {workExperience.map((work) => (
                                    <TableRow key={work.work_id}>
                                        <TableCell>{work.job_title}</TableCell>
                                        <TableCell>{work.company_name}</TableCell>
                                        <TableCell>{work.company_location}</TableCell>
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

export default WorkExperienceDetails;
