import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { List, Typography } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import "./Swap.scss";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "200px",
  overflowY: "scroll",
  position: "relative",
}));

const Swap = () => {
  const [selectdId, setSelectedId] = useState(1);
  const [tempArray, setTempArray] = useState([]);
  const [selectdItem, setSelectdItem] = useState(null);
  const [country, setCountry] = useState([
    { id: 1, countryName: "India" },
    { id: 2, countryName: "New Zealands" },
    { id: 3, countryName: "ShriLanka" },
    { id: 4, countryName: "Pakistan" },
    { id: 5, countryName: "West Indies" },
    { id: 6, countryName: "England" },
    { id: 7, countryName: "South Africa" },
    { id: 8, countryName: "Australiya" },
  ]);

  const shiftLeft = () => {
    if (selectdItem == null) {
      return false;
    } else {
      const data = tempArray.filter((el) => el.id !== selectdItem.id);
      setTempArray(data);
      country.unshift(selectdItem);
      setSelectdItem(null);
    }
  };
  const shiftRight = () => {
    if (selectdItem === null) {
      alert("select Item");
    } else {
      const data = country.filter((el) => el.id !== selectdItem.id);
      setCountry(data);
      tempArray.unshift(selectdItem);
      setSelectdItem(null);
    }
  };
  const handleChange = (item) => {
    setSelectdItem(item);
    setSelectedId(item.id);
  };
  return (
    <>
      <Box className="swap-main">
        <h2>Swap Team</h2>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={5}>
            <Item>
              <List className="ct-list">
                <Box component="div" className="card-heading">
                  <Typography variant="h6">Team First</Typography>
                </Box>
                <Box className="team">
                {country?.map((item, index) => {
                  return (
                    <p
                      key={index}
                      onClick={() => handleChange(item)}
                      className={selectdId === item.id ? "selectd" : ""}
                    >
                      {item.countryName}
                    </p>
                  );
                })}
                </Box>
              </List>
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Box component="div" className="box-group">
              <Box component="div">
                <ArrowCircleLeftIcon
                  sx={{
                    fontSize: "45px",
                    color: "skyblue",
                    transition: ".4s",
                    ":hover": {
                      color: "#0078ce",
                    },
                  }}
                  onClick={shiftLeft}
                />
              </Box>
              <Box component="div">
                <ArrowCircleRightIcon
                  sx={{
                    fontSize: "45px",
                    color: "skyblue",
                    transition: ".4s",
                    ":hover": {
                      color: "#0078ce",
                    },
                  }}
                  onClick={shiftRight}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Item>
            <List className="ct-list">
              <Box component="div" className="card-heading">
                <Typography variant="h6">Team Two</Typography>
              </Box>
              <Box className="team">
              {tempArray?.map((item, index) => {
                return (
                  <p
                    sx={{ padding: "6px 0px", margin: "0px" }}
                    key={index}
                    onClick={() => handleChange(item)}
                    className={selectdId === item.id ? "selectd" : ""}
                  >
                    {item.countryName}
                  </p>
                );
              })}
              </Box>
              </List>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Swap;
