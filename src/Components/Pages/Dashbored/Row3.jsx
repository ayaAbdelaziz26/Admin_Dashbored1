import React from 'react'
import { Box, Paper, Stack, Typography } from '@mui/material'
import PieChart from '../PieChart/PieChart'
import BarChart from '../BarChart/BarChart'
import Geography from '../Geography/Geography'
import { useTheme } from '@mui/material/styles'

const Row3 = () => {
    const theme=useTheme();
    return (
        <Stack direction={'row'} mt={2.5} gap={3} flexWrap={'wrap'}>
            <Paper sx={{minWidth:'300px',flexGrow:1, width: '30%' }}>
                <Typography
                color={theme.palette.secondary.main}
                p={2}
                variant='h6'
                fontWeight={'600'}
                >
                    Campaign
                </Typography>
                <PieChart isDashbored={true}/>

                <Typography variant='h6' align='center'>
                    $48,352 revenue generated
                </Typography >
                    
                <Typography variant='body2' align='center' px={0.7} pb={3}>
                includes extra misc expenditures and costs
                </Typography>
            </Paper>


            <Paper sx={{ minWidth:'300px',flexGrow:1,width: '30%' }}>
            <Typography
                color={theme.palette.secondary.main}
                p={2}
                variant='h6'
                fontWeight={'600'}
                >
                    Sales Quantity
                </Typography>

                <BarChart isDashbored={true}/>
            </Paper>


            <Paper sx={{ minWidth:'300px',flexGrow:1,width: '30%' }}>
            <Typography
                color={theme.palette.secondary.main}
                p={2}
                variant='h6'
                fontWeight={'600'}
                >
                    Geography Based Traffic
                </Typography>

                <Geography isDashbored={true}/>
            </Paper>

        </Stack>
    )
}

export default Row3
