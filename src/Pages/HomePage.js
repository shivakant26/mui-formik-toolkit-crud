import { Box, Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../Component/SideBar/SideBar";

const HomePage = () => {
  return (
    <>
      <div className="main-page">
        <Grid container spacing={2} sm={12}>
          <Grid item xs={12} sm={3} lg={3}>
            <SideBar />
          </Grid>
          <Grid item xs={12} sm={9} lg={9}>
            <Box className="content-section">
              <Outlet />
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default HomePage;
