import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Map from "./Map";

export default function TableComponent(data: any) {

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table" sx={{ minWidth: 50 }}>
                <TableHead>
                    <TableRow>
                        <TableCell style={{ width: 160 }} align="center">FLAG</TableCell>
                        <TableCell style={{ width: 160 }}align="center">NAME</TableCell>
                        <TableCell style={{ width: 160 }}align="center">CAPITAL</TableCell>
                        <TableCell style={{ width: 160 }}align="center">AREA</TableCell>
                        <TableCell style={{ width: 160 }}align="center">PAPULATION</TableCell>
                        <TableCell style={{ width: 160 }}align="center">MAP</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.rows?.map((row: any) => (
                        <TableRow
                            key={row.name}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell style={{ width: 160 }}align="center"><img className="flag" src={row.flag} alt=""/></TableCell>
                            <TableCell style={{ width: 160 }}align="center">{row.name}</TableCell>
                            <TableCell style={{ width: 160 }}align="center">{row.capital?.[0]}</TableCell>
                            <TableCell style={{ width: 160 }}align="center">{row.area}</TableCell>
                            <TableCell style={{ width: 160 }}align="center">{row.population}</TableCell>
                            <TableCell style={{ width: 160 }}align="right">
                                <Map
                                    lng={row.longitude}
                                    lat={row.latitude}
                                    zoom={10}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}