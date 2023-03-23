import { Typography, Paper, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { tableCellClasses } from '@mui/material/TableCell';
import { blue, blueGrey } from '@mui/material/colors';
import axios, { Axios } from 'axios';
import Addstudent from './Addstudent';


const Read = () => {
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
    var [update,setupdate] = useState(false)
    var [singleValue,setsingleValue] = useState([])
    var [students, setstud] = useState([])

    const updstu=(value) => {
        setsingleValue(value);
        setupdate(true);
    }

    const delstu=(id) => {
        console.log("Deleted"+id)
        axios.delete("http://localhost:3005/students/"+id)
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
    },[])

    var finaljsx = 
    <TableContainer component={Paper}>
    <Table>
        <TableHead>
            <TableRow component={Paper}>
                <StyledTableCell><b>NAME</b></StyledTableCell>
                <StyledTableCell><b>AGE</b></StyledTableCell>
                <StyledTableCell><b>PLACE</b></StyledTableCell>
                <StyledTableCell><b>DELETE</b></StyledTableCell>
                <StyledTableCell><b>UPDATE</b></StyledTableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {students.map((value, index) => {
                return <TableRow>
                    <TableCell>{value.id}</TableCell>
                    <TableCell>{value.name}</TableCell>
                    <TableCell>{value.grade}</TableCell>
                    <TableCell>
                        <Button varient='contained' onClick={()=> delstu(value.id)}>Delete</Button> 
                    </TableCell>
                    <TableCell>
                        <Button varient='contained'  onClick={()=> updstu(value)}>Update</Button>
                    </TableCell>

                        
                   
                </TableRow>
            })}
        </TableBody>
    </Table>
</TableContainer>

       if (update)
       finaljsx = <Addstudent data={singleValue} method="put"> </Addstudent>
    return (
        <div>
           <br></br>
            {finaljsx}
        </div>
    )
}

export default Read
