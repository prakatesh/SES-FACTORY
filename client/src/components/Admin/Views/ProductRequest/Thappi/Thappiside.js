import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from 'react-bootstrap/Button';
import RateReviewIcon from '@mui/icons-material/RateReview';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FactoryIcon from '@mui/icons-material/Factory';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import {useNavigate} from 'react-router-dom'

const drawerWidth = 240;


export default function Thappiside(props) {

  const deleteThappi = async (id) =>{
    alert(id)
    const response=await fetch(`https://ses-uvx3.onrender.com/admin/delete/thappi/${id}`,{
      method:"delete"
  })
  if(response.ok){
    props.getdata();
  }
  else{
    alert("Record not Deleted")
  }
  }


  // console.log(props.data)
  const navigate=useNavigate()

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <div>
      <button onClick={()=>navigate('/dashboard')} style={{fontWeight:"700" , width:"100%"}} >
      <Toolbar>
        <FactoryIcon/>
        &nbsp;&nbsp;DashBoard
      </Toolbar>
      </button>
      <Divider />
      <List>
        <ListItemButton onClick={()=>navigate('/admin/manage')}>
          <ListItemIcon>
          <ListItemIcon><InboxIcon /> </ListItemIcon>
          </ListItemIcon>
          <ListItemText >Add Purchase</ListItemText>
        </ListItemButton>
        <ListItemButton onClick={()=>navigate('/admin/sale')}>
          <ListItemIcon>
          <ListItemIcon><ArrowCircleUpIcon /> </ListItemIcon>
          </ListItemIcon>
          <ListItemText>Sale Product</ListItemText>
        </ListItemButton>
        <ListItemButton onClick={()=>navigate('/admin/main')}>
          <ListItemIcon>
          <ListItemIcon><ManageAccountsIcon /> </ListItemIcon>
          </ListItemIcon>
          <ListItemText >Managing</ListItemText>
          </ListItemButton>

        <ListItemButton  onClick={()=>navigate('/admin/view/feedback')}>
          <ListItemIcon>
          <ListItemIcon  ><RateReviewIcon /> </ListItemIcon>
          </ListItemIcon>
          <ListItemText >FeedBack</ListItemText>
        </ListItemButton>
        <ListItemButton style={{backgroundColor:"black"}} >
          <ListItemIcon>
          <ListItemIcon style={{color:"white"}}><ShoppingCartIcon /> </ListItemIcon>
          </ListItemIcon>
          <ListItemText style={{color:"white"}} id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}>
                Thappi Request 
              </ListItemText>
          <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}>
                <MenuItem onClick={()=>navigate('/admin/view/starch')} >Starch</MenuItem>
                <MenuItem onClick={()=>navigate('/admin/view/sago')} >Sago</MenuItem>
                <MenuItem style={{backgroundColor:"black",color:"white"}} onClick={()=>navigate('/admin/view/thappi')} >Thappi</MenuItem>
          </Menu>
        </ListItemButton>
        <ListItemButton  onClick={()=>navigate('/admin/view/soldout')}>
          <ListItemIcon>
          <ListItemIcon><CurrencyRupeeIcon /> </ListItemIcon>
          </ListItemIcon>
          <ListItemText>Sold Out</ListItemText>
        </ListItemButton>
      </List>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Thappi request
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography paragraph>
        <Table style={{border:"1px solid black"}}>
              <Thead style={{border:"1px solid black"}}>
              <Tr style={{border:"1px solid black"}}>
                <Th style={{border:"1px solid black"}}>Name</Th>
                <Th style={{border:"1px solid black"}}>Email</Th>
                <Th style={{border:"1px solid black"}}>Number</Th>
                <Th style={{border:"1px solid black"}}>Quantity</Th>
                <Th style={{border:"1px solid black"}}>Comment</Th>
                <Th style={{border:"1px solid black"}}>Purpose</Th>
                <Th style={{border:"1px solid black"}}>Message</Th>
                <Th style={{border:"1px solid black"}}>Delete</Th>
              </Tr>
              </Thead>
              <Tbody style={{border:"1px solid black"}}>
              {props.data.map(i=>{
                return(
                  <Tr style={{border:"1px solid black"}}>
                    <Td style={{border:"1px solid black"}}>{i.name}</Td>
                    <Td style={{border:"1px solid black"}}>{i.email}</Td>
                    <Td style={{border:"1px solid black"}}>{i.number}</Td>
                    <Td style={{border:"1px solid black"}}>{i.Quantity}</Td>
                    <Td style={{border:"1px solid black"}}>{i.Purpose}</Td>
                    <Td style={{border:"1px solid black"}}>{i.comment}</Td>
                    <Td style={{border:"1px solid black"}}><Button variant="success"><a style={{textDecoration:"none",color:"white"}} href={"mailto:" + i.email+"?Subject=Hello%20"+i.name}>Message</a></Button></Td>
                    <Td style={{border:"1px solid black"}}><Button value={i.name} onClick={() => deleteThappi(i._id)} variant="danger">Delete</Button></Td>
                  </Tr>
                )
              })}
              </Tbody>
            </Table>
        </Typography>
        <Typography paragraph>
          
        </Typography>
      </Box>
    </Box>
  );
}