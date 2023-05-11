import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import RateReviewIcon from "@mui/icons-material/RateReview";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FactoryIcon from "@mui/icons-material/Factory";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const drawerWidth = 240;

export default function Mainside(props) {
  const [todayPurchase, settodayPurchase] = React.useState("");
  const [bundle, setbundle] = React.useState("");
  const [pointRate, setpointRate] = React.useState("");
  const [starch, setstarch] = React.useState("");
  const [thappi, setthappi] = React.useState("");
  // const [date,setdate]=React.useState('')
  const [expensive, setexpensive] = React.useState("");
  const [starchStock, setstarchStock] = React.useState("");
  const [thappiStock, setthappiStock] = React.useState("");
  const [totalAmount, settotalAmount] = React.useState("");

  const [data1, setdata] = React.useState("");
  const [index, setindex] = React.useState(0);
  const [index1, setindex1] = React.useState(3);
  const [index2, setindex2] = React.useState(4);

  async function editChange(e) {
    try {
      setindex2(0);
      const data = { Date: e.target.value };
      console.log(data);
      await fetch("https://ses-uvx3.onrender.com/admin/edit", {
        body: JSON.stringify(data),
        method: "post",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setdata(data.data);

          settodayPurchase(data1[0].TodayPurchase);
          setbundle(data1[0].Bundle);
          setpointRate(data1[0].PointRate);
          setstarch(data1[0].Starch);
          setthappi(data1[0].Thappi);
          setexpensive(data1[0].Expensive);
          setstarchStock(data1[0].starchStock);
          setthappiStock(data1[0].thappiStock);
          settotalAmount(data1[0].totalAmount);
          setindex(1);
          setindex1(4);
        });
    } catch (e) {
      console.log(e);
    }
  }
  async function save(e) {
    try {
      const data = {
        TodayPurchase: todayPurchase,
        Bundle: bundle,
        PointRate: pointRate,
        Starch: starch,
        Thappi: thappi,
        Expensive: expensive,
        starchStock: starchStock,
        thappiStock: thappiStock,
        totalAmount: totalAmount,
        Date: e.target.value,
      };
      console.log(data);
      await fetch("https://ses-uvx3.onrender.com/admin/update", {
        body: JSON.stringify(data),
        method: "put",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then(
        await fetch("https://ses-uvx3.onrender.com/admin/data", {
          method: "get",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setdata(data.data);
            console.log("data1");
            console.log(data1);
            setindex(0);
            setindex2(5);
          })
      );
    } catch (e) {
      console.log(e);
    }
  }

  const navigate = useNavigate();

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
      <button
        onClick={() => navigate("/dashboard")}
        style={{ fontWeight: "700", width: "100%" }}
      >
        <Toolbar>
          <FactoryIcon /> &nbsp;&nbsp; DashBoard
        </Toolbar>
      </button>
      <Divider />
      <List>
        <ListItemButton onClick={() => navigate("/admin/manage")}>
          <ListItemIcon>
            <ListItemIcon>
              <InboxIcon />{" "}
            </ListItemIcon>
          </ListItemIcon>
          <ListItemText>Add Purchase</ListItemText>
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/admin/sale")}>
          <ListItemIcon>
            <ListItemIcon>
              <ArrowCircleUpIcon />{" "}
            </ListItemIcon>
          </ListItemIcon>
          <ListItemText>Sale Product</ListItemText>
        </ListItemButton>
        <ListItemButton
          onClick={() => navigate("/admin/main")}
          style={{ backgroundColor: "black" }}
        >
          <ListItemIcon>
            <ListItemIcon style={{ color: "white" }}>
              <ManageAccountsIcon />{" "}
            </ListItemIcon>
          </ListItemIcon>
          <ListItemText style={{ color: "white" }}>Managing</ListItemText>
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/admin/view/feedback")}>
          <ListItemIcon>
            <ListItemIcon>
              <RateReviewIcon />{" "}
            </ListItemIcon>
          </ListItemIcon>
          <ListItemText>FeedBack</ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ListItemIcon>
              <ShoppingCartIcon />{" "}
            </ListItemIcon>
          </ListItemIcon>
          <ListItemText
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Product Request
          </ListItemText>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={() => navigate("/admin/view/starch")}>
              Starch
            </MenuItem>
            <MenuItem onClick={() => navigate("/admin/view/sago")}>
              Sago
            </MenuItem>
            <MenuItem onClick={() => navigate("/admin/view/thappi")}>
              Thappi
            </MenuItem>
          </Menu>
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/admin/view/soldout")}>
          <ListItemIcon>
            <ListItemIcon>
              <CurrencyRupeeIcon />{" "}
            </ListItemIcon>
          </ListItemIcon>
          <ListItemText>Sold Out</ListItemText>
        </ListItemButton>
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
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
            sx={{ mr: 2, display: { sm: "none" } }}
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
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Typography paragraph></Typography>
        <Typography paragraph>
          <div>
            {index === 1 ? (
              <>
                <h1>Edit</h1>

                <Table style={{ border: "1px solid black" }}>
                  <Thead style={{ border: "1px solid black" }}>
                    <Tr style={{ border: "1px solid black" }}>
                      <Th style={{ border: "1px solid black" }}>
                        TodayPurchase
                      </Th>
                      <Th style={{ border: "1px solid black" }}>Bundle</Th>
                      <Th style={{border:"1px solid black"}}>PointRate</Th>
                      <Th style={{border:"1px solid black"}}>Starch</Th>
                      <Th style={{border:"1px solid black"}}>Thappi</Th>
                      <Th style={{border:"1px solid black"}}>Expensive</Th>
                      <Th style={{border:"1px solid black"}}>starchStock</Th>
                      <Th style={{border:"1px solid black"}}>ThappiStock</Th>
                      <Th style={{border:"1px solid black"}}>totalAmount</Th>
                      <Th style={{border:"1px solid black"}}>Save</Th>
                    </Tr>
                  </Thead>
                  <Tbody style={{border:"1px solid black"}}>
                    {data1.map((i) => {
                      return (
                        <>
                          <Tr>
                            <Td style={{border:"1px solid black"}}>
                              <input style={{width:"100px"}}
                                value={todayPurchase}
                                onChange={(e) =>
                                  settodayPurchase(e.target.value)
                                }
                              />
                            </Td >
                            <Td style={{border:"1px solid black"}}>
                              <input style={{width:"100px"}}
                                value={bundle}
                                onChange={(e) => setbundle(e.target.value)}
                              />
                            </Td>
                            <Td style={{border:"1px solid black"}}>
                              <input style={{width:"100px"}}
                                value={pointRate}
                                onChange={(e) => setpointRate(e.target.value)}
                              />
                            </Td>
                            <Td style={{border:"1px solid black"}}>
                              <input style={{width:"100px"}}
                                value={starch}
                                onChange={(e) => setstarch(e.target.value)}
                              />
                            </Td>
                            <Td style={{border:"1px solid black"}}>
                              <input style={{width:"100px"}}
                                value={thappi}
                                onChange={(e) => setthappi(e.target.value)}
                              />
                            </Td>
                            <Td style={{border:"1px solid black"}}>
                              <input style={{width:"100px"}}
                                value={expensive}
                                onChange={(e) => setexpensive(e.target.value)}
                              />
                            </Td>
                            <Td style={{border:"1px solid black"}}>
                              <input style={{width:"100px"}}
                                value={starchStock}
                                onChange={(e) => setstarchStock(e.target.value)}
                              />
                            </Td>
                            <Td style={{border:"1px solid black"}}>
                              <input style={{width:"100px"}}
                                value={thappiStock}
                                onChange={(e) => setthappiStock(e.target.value)}
                              />
                            </Td>
                            <Td style={{border:"1px solid black"}}>
                              <input style={{width:"100px"}}
                                value={totalAmount}
                                onChange={(e) => settotalAmount(e.target.value)}
                              />
                            </Td>
                            <Td style={{border:"1px solid black"}}>
                              <Button
                                value={i.Date}
                                onClick={save}
                                variant="success"
                              >
                                Save
                              </Button>
                            </Td>
                          </Tr>
                        </>
                      );
                    })}
                  </Tbody>
                </Table>

              </>
            ) : (
              ""
            )}

            {index1 === 3 ? (
              <div className="index1">
                <Table style={{border:"1px solid black"}}>
                  <Thead style={{border:"1px solid black"}}>
                    <Tr style={{border:"1px solid black"}}>
                      <Th style={{border:"1px solid black"}}>TodayPurchase</Th>
                      <Th style={{border:"1px solid black"}}>Bundle</Th>
                      <Th style={{border:"1px solid black"}}>PointRate</Th>
                      <Th style={{border:"1px solid black"}}>Starch</Th>
                      <Th style={{border:"1px solid black"}}>Thappi</Th>
                      <Th style={{border:"1px solid black"}}>Expensive</Th>
                      <Th style={{border:"1px solid black"}}>Date</Th>
                      <Th style={{border:"1px solid black"}}>starchStock</Th>
                      <Th style={{border:"1px solid black"}}>ThappiStock</Th>
                      <Th style={{border:"1px solid black"}}>totalAmount</Th>
                      <Th style={{border:"1px solid black"}}>Edit</Th>
                    </Tr>
                  </Thead>
                  <Tbody style={{border:"1px solid black"}}>
                    {props.data.map((i, index) => {
                      return (
                        <Tr>
                          <Td style={{border:"1px solid black"}}>{i.TodayPurchase}</Td>
                          <Td style={{border:"1px solid black"}}>{i.Bundle}</Td>
                          <Td style={{border:"1px solid black"}}>{i.PointRate}</Td>
                          <Td style={{border:"1px solid black"}}>{i.Starch}</Td>
                          <Td style={{border:"1px solid black"}}>{i.Thappi}</Td>
                          <Td style={{border:"1px solid black"}}>{i.Expensive}</Td>
                          <Td style={{border:"1px solid black"}}>{i.Date}</Td>
                          <Td style={{border:"1px solid black"}}>{i.starchStock}</Td>
                          <Td style={{border:"1px solid black"}}>{i.thappiStock}</Td>
                          <Td style={{border:"1px solid black"}}>{i.totalAmount}</Td>
                          <Td style={{border:"1px solid black"}}>
                            <Button
                              value={i.Date}
                              onClick={editChange}
                              variant="success"
                            >
                              Edit
                            </Button>
                          </Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </div>
            ) : (
              ""
            )}

            {index2 === 5 ? (
              <div className="index2">
                <Table style={{border:"1px solid black"}}>
                  <Thead style={{border:"1px solid black"}}>
                    <Tr style={{border:"1px solid black"}}>
                      <Th style={{border:"1px solid black"}}>TodayPurchase</Th>
                      <Th style={{border:"1px solid black"}}>Bundle</Th>
                      <Th style={{border:"1px solid black"}}>PointRate</Th>
                      <Th style={{border:"1px solid black"}}>Starch</Th>
                      <Th style={{border:"1px solid black"}}>Thappi</Th>
                      <Th style={{border:"1px solid black"}}>Expensive</Th>
                      <Th style={{border:"1px solid black"}}>Date</Th>
                      <Th style={{border:"1px solid black"}}>starchStock</Th>
                      <Th style={{border:"1px solid black"}}>ThappiStock</Th>
                      <Th style={{border:"1px solid black"}}>totalAmount</Th>
                      <Th style={{border:"1px solid black"}}>Edit</Th>
                    </Tr>
                  </Thead>
                  <Tbody style={{border:"1px solid black"}}>
                    {data1.map((i) => {
                      return (
                        <Tr style={{border:"1px solid black"}}>
                          <Td style={{border:"1px solid black"}}>{i.TodayPurchase}</Td>
                          <Td style={{border:"1px solid black"}}>{i.Bundle}</Td>
                          <Td style={{border:"1px solid black"}}>{i.PointRate}</Td>
                          <Td style={{border:"1px solid black"}}>{i.Starch}</Td>
                          <Td style={{border:"1px solid black"}}>{i.Thappi}</Td>
                          <Td style={{border:"1px solid black"}}>{i.Expensive}</Td>
                          <Td style={{border:"1px solid black"}}>{i.Date}</Td>
                          <Td style={{border:"1px solid black"}}>{i.starchStock}</Td>
                          <Td style={{border:"1px solid black"}}>{i.thappiStock}</Td>
                          <Td style={{border:"1px solid black"}}>{i.totalAmount}</Td>
                          <Td style={{border:"1px solid black"}}>
                            <Button
                              value={i.Date}
                              onClick={editChange}
                              variant="success"
                            >
                              Edit
                            </Button>
                          </Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </div>
            ) : (
              ""
            )}
          </div>
        </Typography>
      </Box>
    </Box>
  );
}
