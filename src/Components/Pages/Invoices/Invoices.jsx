import React from 'react'
import { rows, coulmns} from './data'
import { Box } from '@mui/material'
import { GridToolbar } from '@mui/x-data-grid'
import { DataGrid } from '@mui/x-data-grid'

const Invoices = () => {
  return (
    <Box style={{ height: 600,width:"100%"}}>
    <DataGrid
    checkboxSelection
    slots={{
      toolbar:GridToolbar
    }}
     rows={rows} columns={coulmns} />
  </Box>
  )
}

export default Invoices
