import * as React from 'react';
import { useEffect } from 'react';
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
import RateReviewIcon from '@mui/icons-material/RateReview';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FactoryIcon from '@mui/icons-material/Factory';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import {useNavigate} from 'react-router-dom'

import {Col, Row, Stack} from 'react-bootstrap'

import form_img from '../../../assets/Images/Admin/form.jpg'
import { Button, TextField } from '@mui/material';

const drawerWidth = 240;


export default function RemoveStock(props) {

  const [amount,setamount]=React.useState('')
  const [total,settotal]=React.useState('')
  const [name,setname]=React.useState('')
  const [tons,settons]=React.useState('')
  const [product,setproduct]=React.useState('')
  const [date,setdate]=React.useState('')

  async function submit(e){
    e.preventDefault();
    try{
        const data = {
          name:name,
          product:product,
          tons:tons,
          amount:amount,
          total:total,
          date:date};
        console.log(data)
        await fetch("https://ses-uvx3.onrender.com/admin/clearstock",{
          body : JSON.stringify(data),
          method : "post",
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
        ).then((response) => response.json())
        .then((data) =>{
          console.log(data)
          if(data==="done")
        {
          navigate('/dashboard')
        }

        });
        
    }
    catch(e){
      console.log(e)
    }
  }

  useEffect(() => {
    settotal(amount*tons);
  }, [amount,tons])
  

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
      <FactoryIcon/> &nbsp;&nbsp;
        DashBoard
      </Toolbar>
      </button>
      <Divider />
      <List>
        <ListItemButton onClick={()=>navigate('/admin/manage')} >
          <ListItemIcon>
          <ListItemIcon><InboxIcon /> </ListItemIcon>
          </ListItemIcon>
          <ListItemText  >Add Purchase</ListItemText>
        </ListItemButton>
        <ListItemButton  onClick={()=>navigate('/admin/sale')} style={{backgroundColor:"black"}}>
          <ListItemIcon>
          <ListItemIcon style={{color:"white"}}><ArrowCircleUpIcon /> </ListItemIcon>
          </ListItemIcon>
          <ListItemText style={{color:"white"}}>Sale Product</ListItemText>
        </ListItemButton>
        <ListItemButton onClick={()=>navigate('/admin/main')}>
          <ListItemIcon>
          <ListItemIcon><ManageAccountsIcon />  </ListItemIcon>
          </ListItemIcon>
          <ListItemText >Managing</ListItemText>
        </ListItemButton>
        <ListItemButton  onClick={()=>navigate('/admin/view/feedback')}>
          <ListItemIcon>
          <ListItemIcon><RateReviewIcon /> </ListItemIcon>
          </ListItemIcon>
          <ListItemText>FeedBack</ListItemText>
        </ListItemButton>
        <ListItemButton >
          <ListItemIcon>
          <ListItemIcon><ShoppingCartIcon /> </ListItemIcon>
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
            Sale Today
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
        <Row>
        <Col md={2}></Col>
        <Col md={6}>
        <div style={{boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",textAlign:"center",paddingTop:'2vh',paddingBottom:'2vh'}}>
        <img src={form_img} alt='form_img' style={{width:"70%"}}/>
        <div ><br/>
        <form >
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '47ch' },
      }}
      noValidate
      autoComplete="off"
    >
<TextField id="outlined-basic" onChange={(e)=>setname(e.target.value)} value={name} label="Customer Name" variant="outlined" /><br/>

<select style={{marginRight:"5vh"}} className="form-select d-inline-flex p-2" required 
                onChange={(e) => {
                  setproduct(e.target.value);
                }}
              >
                <option value="product"  disabled selected>
                  Product
                </option>
                <option value="Starch">Tapico Starch</option>
                <option value="Thappi">Tapico Waste</option>
              </select>
              <TextField id="outlined-basic" onChange={(e)=>settons(e.target.value)} value={tons} label="Tons Saleout" variant="outlined" /><br/>
              <TextField id="outlined-basic" onChange={(e)=>setamount(e.target.value)}  value={amount} label="Amount Per Ton" variant="outlined" /><br/>
              <TextField id="outlined-basic" onChange={(e)=>settotal(e.target.value)} value={total} label="Total Amount" variant="outlined" /><br/>
              <TextField id="outlined-basic" onChange={(e)=>setdate(e.target.value)} value={date}  variant="outlined" type='date'/><br/>
                                          
                        <Stack >
                            <Button onClick={submit} variant="contained">Saled</Button>
                            
                        </Stack>
    </Box>
    </form>
    </div>
    </div>
        </Col>
        </Row>
        
        </Typography>
        <Typography paragraph>
        
        </Typography>
      </Box>
    </Box>
  );
}

