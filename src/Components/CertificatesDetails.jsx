import React from 'react';
import { TableRow, TableCell, Collapse, Typography, Table, TableBody } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const CertificatesDetails = ({ certificates }) => {
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
                    Certificates
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={2}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Typography variant="h6" gutterBottom component="div">
                            Certificates
                        </Typography>
                        <Table size="small" aria-label="certificates">
                            <TableBody>
                                {certificates.map((certificate) => (
                                    <TableRow key={certificate.certi_id}>
                                        <TableCell>{certificate.certi_name}</TableCell>
                                        <TableCell>{certificate.certi_link}</TableCell>
                                        <TableCell>{certificate.certi_start_date}</TableCell>
                                        <TableCell>{certificate.certi_end_date}</TableCell>
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

export default CertificatesDetails;

