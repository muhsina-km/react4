import { Typography, Paper, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { tableCellClasses } from '@mui/material/TableCell';
import { blue, blueGrey } from '@mui/material/colors';
import axios from 'axios';


const Teachers = () => {
    const color = '#000000';
    const color2 = '#00b0ff';
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: color2,
            color: color,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));
    var [students, setstud] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3005/teachers")
            .then(response => {
                console.log(response.data)
                setstud(students = response.data)
            })
            .catch(err => console.log(err))
    })
    return (
        <div>
            <br></br>
            <Typography variant='h3'>Teachers</Typography>
            <br></br>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow component={Paper}>
                            <StyledTableCell><b>NAME</b></StyledTableCell>
                            <StyledTableCell><b>AGE</b></StyledTableCell>
                            <StyledTableCell><b>CLASS</b></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map((value, index) => {
                            return <TableRow>
                                <TableCell>{value.id}</TableCell>
                                <TableCell>{value.name}</TableCell>
                                <TableCell>{value.class}</TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Teachers
