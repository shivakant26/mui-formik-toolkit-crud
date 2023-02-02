import { Box, Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../Component/SideBar/SideBar";

const HomePage = () => {
  return (
    <>
      <div className="main-page">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <SideBar />
          </Grid>
          <Grid item xs={9}>
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
