import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'



const Addstudents = () => {
    var [students,setstudents]= useState({
        id:"",
        name:"",
        grade:''
    })

    const handler = (e) => {
        const{name,value} = e.target
        setstudents({... students,[name]:value})
        console.log(students)
    }
     const inputhandler=(e) => {
        console.log("button clicked")
        axios.post("http://localhost:3005/students",students)
        .then(response => {
            alert("Succesfully added")
        })
        .catch(error => {
            alert("Failed")
        })
     }

  return (
    <div>
      <Typography variant='h3'>Add Students</Typography><br></br>
      <TextField name='id' variant='outlined' label="ID" onChange={handler}> id </TextField><br></br><br></br>
      <TextField name='name' variant='outlined' label="Name"  onChange={handler}> name </TextField><br></br><br></br>
      <TextField name='grade' variant='outlined' label="Grade"  onChange={handler}> grade </TextField><br></br><br></br>
      <Button variant='contained' onClick={inputhandler}>SUBMIT</Button>
    </div>
  )
}


export default Addstudents