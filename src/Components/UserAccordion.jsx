import React, { useState, useEffect } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import WorkExperienceDetails from './WorkExperienceDetails';
import EducationDetails from './EducationDetails ';
import ProjectsDetails from './ProjectsDetails';
import SkillsDetails from './SkillsDetails';
import CertificatesDetails from './CertificatesDetails'
import DownloadButton from './DownloadButton';

const UserDetailsRow = ({ label, value }) => (
    <TableRow>
        <TableCell>{label}</TableCell>
        <TableCell>{value}</TableCell>
    </TableRow>
);

const UserAccordion = ({ user }) => {
    const [downloadFormat, setDownloadFormat] = useState(null);

    const handleDownload = (format) => {
        setDownloadFormat(format);
    };

    useEffect(() => {
        if (downloadFormat) {
           
            const fileContent = generateFileContent(user, downloadFormat);

           
            const blob = new Blob([fileContent], { type: 'text/plain' });

            
            const url = URL.createObjectURL(blob);

          
            const a = document.createElement('a');
            a.href = url;
            a.download = `resume.${downloadFormat}`;
            a.click();

           
            URL.revokeObjectURL(url);
            setDownloadFormat(null); 
        }
    }, [downloadFormat, user]);
    const generateFileContent = (user, format) => {
        if (format === 'excel') {
            
            const excelContent = `
                Name\tEmail\tProfession\tLevel\tPhone Number\tPortfolio\tLinkedIn\tGitHub\tPincode
                ${user.first_name} ${user.last_name}\t${user.email}\t${user.profession}\t${user.level}\t${user.phone_number}\t${user.portfolio_link}\t${user.linkedin}\t${user.github}\t${user.pincode}
            `;
            return excelContent;
        } else if (format === 'csv') {
           
            const csvContent = `
                "Name","Email","Profession","Level","Phone Number","Portfolio","LinkedIn","GitHub","Pincode"
                "${user.first_name} ${user.last_name}","${user.email}","${user.profession}","${user.level}","${user.phone_number}","${user.portfolio_link}","${user.linkedin}","${user.github}","${user.pincode}"
            `;
            return csvContent;
        } else {
            return ''; 
        }
    };


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
                <DownloadButton onClick={() => handleDownload('excel')} format="Excel" />
                <DownloadButton onClick={() => handleDownload('csv')} format="CSV" />

            </AccordionDetails>
        </Accordion>
    );
};

export default UserAccordion;
