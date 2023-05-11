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
import RateReviewIcon from '@mui/icons-material/RateReview';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FactoryIcon from '@mui/icons-material/Factory';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';



import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import {useNavigate} from 'react-router-dom'

import {Button, Col, Row} from 'react-bootstrap'

const drawerWidth = 240;


export default function ResponsiveDrawer(props) {

  const [array,setarry]=React.useState([])

  React.useEffect(()=>{
    fetch("https://ses-uvx3.onrender.com/admin/dashboard",{
        method:"get"
    }).then((res)=>res.json())
    .then((data)=>{
        // console.log(data.data)
        setarry(data.data)
    })
  },[])

  const [searchdate,setsearchdate]=React.useState('')
  const [data1,setdata]=React.useState('')
  const [index,setindex]=React.useState(0)

  async function search()
  {
    try
    {
    const data={Date:searchdate}
    await fetch("https://ses-uvx3.onrender.com/admin/edit",{
      body:JSON.stringify(data),
    method:"post",
    headers: {
      'Content-type':'application/json; charset=UTF-8',
    },
    }).then((res)=>res.json())
    .then((data)=>{
        console.log(data.data)
        setdata(data.data)
        setindex(1)
    })
  }
  catch(e)
  {
    console.log(e)
  }
  }

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
        <ListItemButton onClick={()=>navigate('/admin/manage')}>
          <ListItemIcon>
          <ListItemIcon><InboxIcon /> </ListItemIcon>
          </ListItemIcon>
          <ListItemText >Add Purchase</ListItemText>
        </ListItemButton>
        <ListItemButton  onClick={()=>navigate('/admin/sale')}>
          <ListItemIcon>
          <ListItemIcon><ArrowCircleUpIcon /> </ListItemIcon>
          </ListItemIcon>
          <ListItemText>Sale Product</ListItemText>
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
          <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
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
            Welcome Admin
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
            <Col md={4}>
            <div style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",backgroundColor:"#F9B115",padding:"5vh"}}>
            <div style={{fontWeight:"bolder"}}>
            Purchase cost
            </div>
            <div style={{fontWeight:"500"}}>
            <span style={{color:"black",fontWeight:"bolder"}}>Rs : </span>{array[0]}
            </div>
          </div>
            </Col>
            <Col md={4}>
            <div style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",backgroundColor:"#E55353",padding:"5vh"}}>
            <div style={{fontWeight:"700"}}>
            Expense cost
            </div>
            <div style={{fontWeight:"500"}}>
              <span style={{color:"black",fontWeight:"bolder"}}>Rs : </span>{array[1]}
            </div>
          </div>
            </Col>
            <Col md={4}>
            <div style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",backgroundColor:"#AF1763",padding:"5vh"}}>
            <div style={{fontWeight:"700"}}>
            Total Cost
            </div>
            <div style={{fontWeight:"500"}}>
            <span style={{color:"black",fontWeight:"bolder"}}>Rs : </span>{array[2]}
            </div>
          </div>
            </Col>
          </Row>
        </Typography>
        <Typography paragraph>
        <Row>
          <Col md={4}>
            <div style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",backgroundColor:"#0DCAF0",padding:"5vh"}}>
            <div style={{fontWeight:"700"}}>
            Total Tons
            </div>
            <div style={{fontWeight:"500"}}>
              <span style={{color:"black",fontWeight:"bolder"}}>Tons : </span>{array[3]}
            </div>
          </div>
            </Col>
            <Col md={4}>
            <div style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",backgroundColor:"lightgreen",padding:"5vh"}}>
            <div style={{fontWeight:"700"}}>
            Saled tons
            </div>
            <div style={{fontWeight:"500"}}>
              <span style={{color:"black",fontWeight:"bolder"}}>Tons : </span>{array[4]}
            </div>
          </div>
            </Col>
            <Col md={4}>
            <div style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",backgroundColor:"lightpink",padding:"5vh"}}>
            <div style={{fontWeight:"700"}}>
            Instock tons
            </div>
            <div style={{fontWeight:"500"}}>
            <span style={{color:"black",fontWeight:"bolder"}}>Tons : </span>{array[5]}
            </div>
          </div>
            </Col>
          </Row>
        </Typography>
        <Typography paragraph>
        <Row>
          <Col md={4}>
            <div style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",backgroundColor:"lightyellow",padding:"5vh"}}>
            <div style={{fontWeight:"700"}}>
            Sold Out
            </div>
            <div style={{fontWeight:"500"}}>
            <span style={{color:"black",fontWeight:"bolder"}}>Rs : </span>{array[6]}
            </div>
          </div>
            </Col>
            <Col md={4}>
            <div style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",backgroundColor:"#A05AFF",padding:"5vh"}}>
            <div style={{fontWeight:"700"}}>
            Profit/Loss
            </div>
            <div style={{fontWeight:"500"}}>
            <span style={{color:"black",fontWeight:"bolder"}}>Rs :  </span>{array[7]}
            </div>
          </div>
            </Col>
          </Row>
        </Typography>
        <Typography paragraph>
          {index===0?
          <>
          <input style={{width:'230px',margin:'2vh'}} value={searchdate} onChange={(e)=>{setsearchdate(e.target.value)}} type='date'/>
          <Button onClick={search}>Search</Button>
          </>:
            <>
            <h1>Views</h1>


            <Table style={{border:"1px solid black"}}>
      <Thead style={{border:"1px solid black"}}>
        <Tr style={{border:"1px solid black"}}>
                    <Th style={{border:"1px solid black"}}>TodayPurchase</Th>
                    <Th style={{border:"1px solid black"}}>Bundle</Th>
                    <Th style={{border:"1px solid black"}}>PointRate</Th>
                    <Th style={{border:"1px solid black"}}>Starch</Th>
                    <Th style={{border:"1px solid black"}}>Thappi</Th>
                    <Th style={{border:"1px solid black"}}>Expensive</Th>
                    <Th style={{border:"1px solid black"}}>starchStock</Th>
                    <Th style={{border:"1px solid black"}}>ThappiStock</Th>
                    <Th style={{border:"1px solid black"}}>totalAmount</Th>
        </Tr>
      </Thead>
      <Tbody>
      {data1.map(i=>{
                    
                    return(
                    <><Tr>
                <Td style={{border:"1px solid black"}}>{i.TodayPurchase}</Td>
                <Td style={{border:"1px solid black"}}>{i.Bundle}</Td>
                <Td style={{border:"1px solid black"}}>{i.PointRate}</Td>
                <Td style={{border:"1px solid black"}}>{i.Starch}</Td>
                <Td style={{border:"1px solid black"}}>{i.Thappi}</Td>
                <Td style={{border:"1px solid black"}}>{i.Expensive}</Td>
                <Td style={{border:"1px solid black"}}>{i.starchStock}</Td>
                <Td style={{border:"1px solid black"}}>{i.thappiStock}</Td>
                <Td style={{border:"1px solid black"}}>{i.totalAmount}</Td>
                </Tr>
                      </>)
        })}
      </Tbody>
    </Table>

            {/* <Table style={{ backgroundColor: "white" }} striped bordered hover>
              <thead>
              <tr>
                    <th>TodayPurchase</th>
                    <th>Bundle</th>
                    <th>PointRate</th>
                    <th>Starch</th>
                    <th>Thappi</th>
                    <th>Expensive</th>
                    <th>starchStock</th>
                    <th>thappiStock</th>
                    <th>totalAmount</th>
                  </tr>
              </thead>
            <tbody>
                  {data1.map(i=>{
                    
                    return(
                    <>
                <td>{i.TodayPurchase}</td>
                <td>{i.Bundle}</td>
                <td>{i.PointRate}</td>
                <td>{i.Starch}</td>
                <td>{i.Thappi}</td>
                <td>{i.Expensive}</td>
                <td>{i.starchStock}</td>
                <td>{i.thappiStock}</td>
                <td>{i.totalAmount}</td>
                      </>)
                  })}
            </tbody>
          </Table> */}
           <Button onClick={()=>setindex(0)} variant="success">Okay</Button>
            </>
          }
        </Typography>
      </Box>
    </Box>
  );
}