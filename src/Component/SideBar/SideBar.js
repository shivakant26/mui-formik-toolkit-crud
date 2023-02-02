import {
  Button,
  Grid,
  MenuItem,
  MenuList,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Person3Icon from '@mui/icons-material/Person3';
import { Link, useLocation, useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const slug = location.pathname.replace("/", "");

  return (
    <Box className="ui-siderbar">
      <Stack direction="row" spacing={2}>
        <MenuList className="menu-item">
          <MenuItem>
          <Person3Icon />
            <Link to="/role-list">Role</Link>
          </MenuItem>
          <MenuItem>
          <Person3Icon />
            <Link to="/user-list">User</Link>
          </MenuItem>
        </MenuList>
      </Stack>
    </Box>
  );
};

export default SideBar;
