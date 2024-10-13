import React from 'react'
import Row1 from './Row1'
import Row2 from './Row2'
import Row3 from './Row3'
import { Box } from '@mui/material'
import Button from '@mui/material/Button'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';


const Dashbored = () => {
  return (
    <div>
      <Box sx={{ textAlign: 'right' }}>
        <Button variant="contained" sx={{ p: '6px 8px' , color:'primary'}}>
          <DownloadOutlinedIcon />
          Download Reports</Button>
      </Box>
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  )
}

export default Dashbored
