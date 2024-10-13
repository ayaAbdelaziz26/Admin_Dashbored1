import React from 'react'
import LineChart from '../LineChart/LineChart'
import { Paper, Stack, Typography,Box, IconButton } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import { Transactions } from './data';

const Row2 = () => {
    const theme=useTheme();
  return (
    <Stack direction={'row'} gap={2} flexWrap={'wrap'}>
      <Paper sx={{maxWidth:900,flexGrow:1}}>

        <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'space-between'} alignItems={'center'} m={2}>
            <Box>
                <Typography color={theme.palette.secondary.main} variant='h6'>
                Revenue Generated
                </Typography>

                <Typography variant='body2'>
                    $59,342.32</Typography>

            </Box>

            <Box>
                <IconButton>
                    <DownloadOutlinedIcon/>
                </IconButton>
            </Box>
        </Stack>
        <LineChart isDashbored={true}/>
      </Paper>

      <Box sx={{flexGrow:1,minWidth:"250px",overflow:'auto',maxHeight:380}}>
        <Paper>
            <Typography
            color={theme.palette.secondary.main}
                fontWeight={"bold"}
                p={1.2}
                variant='h6'
            >
                Recent Transaction
            </Typography>
        </Paper>

        {Transactions.map((item)=>{
            return(
                
        <Paper sx={{display:'flex',justifyContent:'space-between',alignItems:'center',p:1.5,mt:1}}>
        <Box>
            <Typography variant='body1'>{item.txId}</Typography>
                
            <Typography variant='body2'>{item.user}</Typography>
        </Box>

        <Typography variant='body1'>{item.date}</Typography>

        <Typography
        p={1.2}
        bgcolor={theme.palette.error.main}
        color={theme.palette.getContrastText(theme.palette.error.main)}
        borderRadius={1.2}
        variant='body2'>{item.cost}$</Typography>
    </Paper>
            )
        })}

      </Box>
    </Stack>
    
  )
}

export default Row2
