import { Typography, Paper, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { tableCellClasses } from '@mui/material/TableCell';
import { blue, blueGrey } from '@mui/material/colors';
import axios, { Axios } from 'axios';


const Read = () => {
    const color = blue[400];
    const color2 = blueGrey[900];
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

    const delstu=() => {
        console.log("Deleted"+id)
        axios.delete(""+id)
        .then(response => {
            alert("deleted")
            window.location.reload(false)
        })
    }
    
    useEffect(() => {
        axios.get("http://localhost:3005/students")
            .then(response => {
                console.log(response.data)
                setstud(students = response.data)
            })
            .catch(err => console.log(err))
    })
    return (
        <div>
            <br></br>
            <Typography variant='h3'>Students</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow component={Paper}>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell>Age</StyledTableCell>
                            <StyledTableCell>Place</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map((value, index) => {
                            return <TableRow>
                                <TableCell>{value.id}</TableCell>
                                <TableCell>{value.name}</TableCell>
                                <TableCell>{value.grade}</TableCell>
                                <TableCell>
                                    <Button varient='contained' onClick={()=> delstu(value.id)}> Delete </Button>
                                </TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Read
