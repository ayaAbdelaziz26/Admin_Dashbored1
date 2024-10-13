import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button, Stack } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { useForm } from 'react-hook-form';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useState } from 'react';


const data=[
  {
    label:'Admin',
    value:'Admin'
  },
  {
    label:'Manager',
    value:'Manager'
  },
  {
    label:'User',
    value:'User'
  }
];

const rejEmail=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const rejNum=/^[0-9]{10}$/;


const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({mode:'onChange'});

  const onSubmit=()=>{
    console.log("done");
    handleClick();
  }


  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Box
    component="form"
    onSubmit={handleSubmit(onSubmit)}
    sx={{
    display:"flex",
    flexDirection:"column",
    gap:3,
  }}
    noValidate
    autoComplete="off"
  >
    <Stack sx={{gap:2}} direction={'row'}>
    <TextField sx={{flex:1}}
    error={Boolean(errors.firstName)}
    helperText={Boolean(errors.firstName)?"This field is required min 3 letters":null}
    {...register('firstName', { required:true,minLength:3})}
    label="First name"
    variant="filled" />
    <TextField sx={{flex:1}}
        error={Boolean(errors.lastName)}
        helperText={Boolean(errors.lastName)?"Field is required please enter min 3 letters":null}
        {...register('lastName', { required:true,minLength:3})}
     label="Last name" variant="filled" />
    </Stack>


    <TextField
    label="Email"
    variant="filled"
    error={Boolean(errors.email)}
    helperText={Boolean(errors.email)?"email address is not valid":null}
    {...register('email', { required:true,pattern:rejEmail})}
    />
    <TextField
    label="Contact Number"
    variant="filled"
    error={Boolean(errors.number)}
    helperText={Boolean(errors.number)?"phone number is not valid":null}
    {...register('number', { required:true,pattern:rejNum})}
    />
    <TextField label="Address 1" variant="filled" />
    <TextField label="Address 2" variant="filled" />

    <TextField
    variant='filled'
          select
          label="Select"
          defaultValue="User"
        >
          {data.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        
        <Box sx={{textAlign:"center"}}>
        <Button type='submit' variant='contained'>create new user</Button>

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Submitted Successfully!
        </Alert>
      </Snackbar>
        </Box>
  </Box>
  )
}

export default Form
