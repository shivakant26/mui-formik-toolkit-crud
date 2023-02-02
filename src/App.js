import React, { Suspense } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Component/Header/Header";
import { CircularProgress } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PublicRoutes from "./Routes/PublicRoutes";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Suspense
          fallback={
            <div>
              <CircularProgress disableShrink />
            </div>
          }
        >
          <PublicRoutes />
        </Suspense>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
