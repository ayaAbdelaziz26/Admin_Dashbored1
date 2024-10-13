import React from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import MuiDrawer from '@mui/material/Drawer';
import { IconButton, Typography } from '@mui/material';
import { styled} from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { useLocation, useNavigate } from 'react-router-dom';
import { grey } from '@mui/material/colors';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }));


  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      variants: [
        {
          props: ({ open }) => open,
          style: {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
          },
        },
        {
          props: ({ open }) => !open,
          style: {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
          },
        },
      ],
    }),
  );


  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });
  
  const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const arrayGroup1=[{"text":'Dashbored',"path":"/dashbored",
    "icon":<HomeOutlinedIcon/>},
    {"text":'Manage Team',"path":"/team",
    "icon":<GroupOutlinedIcon/>},
    {"text":'Contacts Information',"path":"/contacts",
    "icon":<ContactsOutlinedIcon/>},
    {"text":'Invoices Balances',"path":"/invoices",
    "icon":<ReceiptOutlinedIcon/>}];


    const arrayGroup2=[{"text":'Profile Form',"path":"/form",
        "icon":<PermIdentityOutlinedIcon/>},
        {"text":'Calendar',"path":"/calendar",
        "icon":<CalendarTodayOutlinedIcon/>},
        {"text":'FAQ Page',"path":"/faq",
        "icon":<HelpOutlineOutlinedIcon/>}];


        const arrayGroup3=[{"text":'Bar Chart',"path":"/barchart",
            "icon":<BarChartOutlinedIcon/>},
            {"text":'Pie Chart',"path":"/piechart",
            "icon":<PieChartOutlineOutlinedIcon/>},
            {"text":'Line Chart',"path":"/linechart",
            "icon":<TimelineOutlinedIcon/>},
            {"text":'Geography Chart',"path":"/geochart",
            "icon":<MapOutlinedIcon/>}];


export default function SideBar({open,handleDrawerClose}) {
    const theme=useTheme();
    const navigate=useNavigate();
    const location=useLocation();
  
  return (
       
       <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>

        <Box display="flex"
        flexDirection={'column'}
      alignItems="center" sx={{m:2}}>

        <Avatar sx={{height:open?88:36, width:open?88:36,border:2,transition:"0.25s"}} alt="Remy Sharp" src="https://www.profilebakery.com/wp-content/uploads/2023/04/AI-Profile-Picture.jpg" />
        <Box>
        <Typography align='center' sx={{fontSize: open?18:0,transition:"0.25s"}}>Aya Abdelaziz</Typography>
        <Typography align='center' sx={{fontSize:open?15:0,transition:"0.25s",color:theme.palette.info.main}}>Admin</Typography>
        </Box>
        </Box>

        <Divider />
        <List>
          {arrayGroup1.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              onClick={()=>{
                navigate(item.path)
              }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    bgcolor:location.pathname===item.path?theme.palette.mode==="dark"? grey[900]:grey[400]:null
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />
        <List>
          {arrayGroup2.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                   onClick={()=>{
                      navigate(item.path)
                   }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    bgcolor:location.pathname===item.path?theme.palette.mode==="dark"? grey[900]:grey[400]:null
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>


        <Divider/>
        <List>
          {arrayGroup3.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                   onClick={()=>{
                      navigate(item.path)
                    }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    bgcolor:location.pathname===item.path?theme.palette.mode==="dark"? grey[900]:grey[400]:null
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>


      </Drawer>
  )
}
