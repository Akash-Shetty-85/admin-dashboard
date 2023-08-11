import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import WorkExperienceDetails from './WorkExperienceDetails';
import EducationDetails from './EducationDetails ';
import ProjectsDetails from './ProjectsDetails';
import SkillsDetails from './SkillsDetails';
import CertificatesDetails from './CertificatesDetails'

const UserDetailsRow = ({ label, value }) => (
    <TableRow>
        <TableCell>{label}</TableCell>
        <TableCell>{value}</TableCell>
    </TableRow>
);

const UserAccordion = ({ user }) => {
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className='username'>{user.first_name} {user.last_name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Table>
                    <TableBody>
                     
                            <UserDetailsRow label="Name" value={`${user.first_name} ${user.last_name}`} />
                            <UserDetailsRow label="Email" value={user.email} />
                            <UserDetailsRow label="Profession" value={user.profession} />
                            <UserDetailsRow label="Level" value={user.level} />
                            <UserDetailsRow label="Phone number" value={user.phone_number} />
                            <UserDetailsRow label="Portfolio">
                                <a href={user.portfolio_link} target="_blank" rel="noopener noreferrer">
                                    {user.portfolio_link}
                                </a>
                            </UserDetailsRow>
                            <UserDetailsRow label="LinkedIn" value={user.linkedin} />
                            <UserDetailsRow label="GitHub" value={user.github} />
                            <UserDetailsRow label="Pincode" value={user.pincode} />
                        
                    </TableBody>
                </Table>
                
                <EducationDetails education={user.education} />
                <WorkExperienceDetails workExperience={user.work_experience} />
                <ProjectsDetails projects={user.projects} />
                <SkillsDetails skills={user.skills} />
                <CertificatesDetails certificates={user.certificates} />
                
            </AccordionDetails>
        </Accordion>
    );
};

export default UserAccordion;
