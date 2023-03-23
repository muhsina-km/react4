import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'



const Addstudent = (props) => {
    var [students,setstudents]= useState(props.data)

    const handler = (e) => {
        const{name,value} = e.target
        setstudents({... students,[name]:value})
        console.log(students)
    }
     const inputhandler=(e) => {
        console.log("clicked")

        if (props.method === "post") {
        axios.post("http://localhost:3005/students",students)
        .then(response => {
            alert("Succesfully added")
        })
        .catch(error => {
            alert("Failed")
        })
      }

        else if(props.method === "put") {
        axios.put("http://localhost:3005/students/"+students.id,students)
        .then((response) => {
          console.log("put data"+response.data)
          alert("success")
          window.location.reload(false);
        })
        .catch((err) => {
          console.log(err)
        })
      }
     }

  return (
    <div>
      <Typography variant='h3'>Add Students</Typography>
      <br></br>

      <TextField name='id' variant='outlined' label="ID" onChange={handler}> id </TextField>
      <br></br><br></br>
      <TextField name='name' variant='outlined' label="Name"  onChange={handler}> name </TextField>
      <br></br><br></br>
      <TextField name='grade' variant='outlined' label="Grade"  onChange={handler}> grade </TextField>
      <br></br><br></br>
      <Button variant='contained' onClick={inputhandler}>SUBMIT</Button>
    </div>
  )
}


export default Addstudent