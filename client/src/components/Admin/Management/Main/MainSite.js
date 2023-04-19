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


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import {useNavigate} from 'react-router-dom'
import { Button } from 'react-bootstrap';

const drawerWidth = 240;


export default function Mainside(props) {



  
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
      <Toolbar style={{fontWeight:"700"}}>
        DashBoard
      </Toolbar>
      <Divider />
      <List>
        <ListItemButton onClick={()=>navigate('/admin/manage')} style={{backgroundColor:"black"}}>
          <ListItemIcon>
          <ListItemIcon style={{color:"white"}}><InboxIcon /> </ListItemIcon>
          </ListItemIcon>
          <ListItemText style={{color:"white"}} >Managing</ListItemText>
        </ListItemButton>
        <ListItemButton  onClick={()=>navigate('/admin/view/feedback')}>
          <ListItemIcon>
          <ListItemIcon><InboxIcon /> </ListItemIcon>
          </ListItemIcon>
          <ListItemText>FeedBack</ListItemText>
        </ListItemButton>
        <ListItemButton >
          <ListItemIcon>
          <ListItemIcon><InboxIcon /> </ListItemIcon>
          </ListItemIcon>
          <ListItemText id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}>
                Product Request 
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
                <MenuItem onClick={()=>navigate('/admin/view/thappi')} >Thappi</MenuItem>
          </Menu>
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
            Main
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
        <div> 
            <table >
              <tr>
                <th>TodayPurchase</th>
                <th>Bundle</th>
                <th>PointRate</th>
                <th>Starch</th>
                <th>Thappi</th>
                <th>Expensive</th>
                <th>Date</th>
                <th>starchStock</th>
                <th>thappiStock</th>
                <th>totalAmount</th>
                <th>Edit</th>
              </tr>
              {props.data.map(i=>{
                return(
                  <tr>
                    <td>{i.TodayPurchase}</td>
                    <td>{i.Bundle}</td>
                    <td>{i.PointRate}</td>
                    <td>{i.Starch}</td>
                    <td>{i.Thappi}</td>
                    <td>{i.Expensive}</td>
                    <td>{i.Date}</td>
                    <td>{i.starchStock}</td>
                    <td>{i.thappiStock}</td>
                    <td>{i.totalAmount}</td>
                    <td><Button value={i.name} variant="success">Edit</Button></td>
                  </tr>
                )
              })}
            </table>
            
        </div>
        </Typography>
        <Typography paragraph>
        
        </Typography>
      </Box>
    </Box>
  );
}
