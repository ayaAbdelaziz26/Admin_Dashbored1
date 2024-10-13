import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { rows,coulmns } from './data'
import { Box } from '@mui/material'

const Contacts = () => {
  return (
    <Box style={{ height: 600,width:"100%"}}>
    <DataGrid
    slots={{
      toolbar:GridToolbar
    }}
     rows={rows} columns={coulmns} />
  </Box>
  )
}

export default Contacts
