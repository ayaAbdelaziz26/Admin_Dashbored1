import React from 'react'
import { DataGrid} from '@mui/x-data-grid';
import { rows } from './data';
import { Box, Typography } from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import { useTheme } from '@mui/material/styles';



const Team = () => {
  const theme=useTheme();

  const columns= [
    { 
        field: 'id',
        headerName: 'ID',
        align:"center",
        headerAlign:"center"
    },
    { 
    field: 'name',
     headerName: 'Name',
     align:"center",
     headerAlign:"center"
     },
    { 
        field: 'email',
         headerName: 'Email',
         flex:1,
         align:"center",
         headerAlign:"center"
         },
         
      { 
        field: 'age',
         headerName: 'Age',
         align:"center",
         headerAlign:"center"
        },
        {
         field: 'phone',
         headerName: 'Phone',
         flex:1,
         align:"center",
         headerAlign:"center"
        },
       {
        field: 'access',
        headerName: 'Access',
        flex:1,
        align:"center",
        headerAlign:"center",

        renderCell:({row:{access}})=>{
          return(
            <Box sx={{
                backgroundColor: access==="Admin"? theme.palette.primary.dark:
                access==="Manager"?theme.palette.secondary.dark:"#3da58a",
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                width: '110px',
                margin: '6px auto',
                padding:"7px",
                borderRadius:"3px",
                cursor:"pointer",
            }}>

              {access==="Admin"&&(
                <AdminPanelSettingsIcon sx={{fontSize:"large",color:"#fff"}}/>
              )}

              {access==="Manager"&&(
                <SecurityOutlinedIcon sx={{fontSize:"large",color:"#fff"}}/>
              )}

              {access==="User"&&(
                <LockOpenIcon sx={{fontSize:"large",color:"#fff"}}/>
              )}
              
              <Typography variant='body1' sx={{fontSize:"13px",color:"#fff"}}>{access}</Typography>
            </Box>
          );
        },
    },
  ];

  return (
    <div style={{ height: 600,width:"100%"}}>
    <DataGrid rows={rows} columns={columns} />
  </div>
  )
}

export default Team
