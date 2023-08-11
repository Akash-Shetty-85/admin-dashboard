import React from 'react';
import { TableRow, TableCell, Collapse, Typography, Table, TableBody } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ProjectsDetails = ({ projects }) => {
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
                    Projects
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={2}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Typography variant="h6" gutterBottom component="div">
                            Projects
                        </Typography>
                        <Table size="small" aria-label="projects">
                            <TableBody>
                                {projects.map((project) => (
                                    <TableRow key={project.project_id}>
                                        <TableCell>{project.project_name}</TableCell>
                                        <TableCell>{project.project_link}</TableCell>
                                        <TableCell>{project.description}</TableCell>
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

export default ProjectsDetails;
