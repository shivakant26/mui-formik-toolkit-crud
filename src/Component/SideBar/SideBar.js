import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Person3Icon from '@mui/icons-material/Person3';
import { Link, useLocation, useNavigate } from "react-router-dom";
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';

const SideBar = () => {
  const location = useLocation();
  const slug = location.pathname.replace("/", "");

  return (
    <Box className="ui-siderbar" sx={{bgcolor: 'background.paper'}}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton className="menu-btn">
              <ListItemIcon sx={{minWidth:"28px"}}>
              <Person3Icon />
              </ListItemIcon>
              <Link to="/role-list">Role</Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className="menu-btn">
              <ListItemIcon sx={{minWidth:"28px"}}>
              <Person3Icon />
              </ListItemIcon>
              <Link to="/user-list">User</Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className="menu-btn">
              <ListItemIcon sx={{minWidth:"28px"}}>
              <SwapHorizontalCircleIcon />
              </ListItemIcon>
              <Link to="/swap">Swap</Link>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};

export default SideBar;
