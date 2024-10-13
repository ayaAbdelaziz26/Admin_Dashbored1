import './App.css';
import SideBar from './Components/SideBar';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TopBar from './Components/TopBar';
import { useState } from 'react';
import { ThemeProvider} from '@emotion/react';
import { getDesignTokens } from './Components/Theme';
import { createTheme } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';
import Dashbored from './Components/Pages/Dashbored/Dashbored';
import Contacts from './Components/Pages/Contacts/Contacts';
import BarChart from './Components/Pages/BarChart/BarChart';
import Calendar from './Components/Pages/Calendar/Calendar';
import FAQ from './Components/Pages/FAQ/FAQ';
import Geography from './Components/Pages/Geography/Geography';
import Invoices from './Components/Pages/Invoices/Invoices';
import LineChart from './Components/Pages/LineChart/LineChart';
import PieChart from './Components/Pages/PieChart/PieChart';
import Team from './Components/Pages/Team/Team';
import Form from './Components/Pages/Form/Form';
import { Box,Typography,styled} from '@mui/material';


const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

function App() {

const [open, setOpen] = useState(false);

const handleDrawerOpen = () => {
setOpen(true)
};

const handleDrawerClose = () => {
setOpen(false)
};

const myMode=localStorage.getItem("currentmode");

const[mode,setMode]=useState(myMode);
const theme=React.useMemo(()=>createTheme(getDesignTokens
  (myMode?myMode:'light')),[myMode])

  return (
      <ThemeProvider theme={theme}>
      <Box display={'flex'}>
      <CssBaseline />
      <TopBar open={open} handleDrawerOpen={handleDrawerOpen} setMode={setMode}/>
      <SideBar open={open} handleDrawerClose={handleDrawerClose}/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
        <Typography>
        <Routes>
        <Route path='/' element={<Dashbored/>} />
        <Route path='/dashbored' element={<Dashbored/>} />
        <Route path='/contacts' element={<Contacts/>} />
        <Route path='/barchart' element={<BarChart/>} />
        <Route path='/calendar' element={<Calendar/>} />
        <Route path='/faq' element={<FAQ/>} />
        <Route path='/form' element={<Form/>} />
        <Route path='/geochart' element={<Geography/>} />
        <Route path='/invoices' element={<Invoices/>} />
        <Route path='/linechart' element={<LineChart/>} />
        <Route path='/piechart' element={<PieChart/>} />
        <Route path='/team' element={<Team/>} />
      </Routes>
        </Typography>
      </Box>
      </Box>
      </ThemeProvider>
    
  );
}

export default App;
