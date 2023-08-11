import React from 'react';
import { TableRow, TableCell, Collapse, Typography, Table, TableBody } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const SkillsDetails = ({ skills }) => {
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
                    Skills
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={2}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Typography variant="h6" gutterBottom component="div">
                            Skills
                        </Typography>
                        <Table size="small" aria-label="skills">
                            <TableBody>
                                {skills.map((skill) => (
                                    <TableRow key={skill.skills_id}>
                                        <TableCell>{skill.top_technical_skills}</TableCell>
                                        <TableCell>{skill.technical_skills}</TableCell>
                                        <TableCell>{skill.non_technical_skills}</TableCell>
                                        <TableCell>{skill.softwares}</TableCell>
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

export default SkillsDetails;
