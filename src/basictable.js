import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Emloyees,ID,Salary,Age,DOB) {
  return { Emloyees,ID,Salary,Age,DOB };
}

const rows = [
  createData('Tamil', 159, 15000, 22, 14.03),
  createData('Harsha', 237, 90000, 23, 23.12),
  createData('Naren', 262, 80000, 23, 25.03),
  createData('Sase', 305, 30000, 23, 8.03),
  createData('Shreedar', 356, 10000, 23, 9.03),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Emloyees</TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Salary</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">DOB</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.ID}</TableCell>
              <TableCell align="right">{row.Salary}</TableCell>
              <TableCell align="right">{row.Age}</TableCell>
              <TableCell align="right">{row.DOB}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}