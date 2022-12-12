import React, { Fragment } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

function CommonLayout() {
  return (
    <Fragment>
      <Header />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <div className="outlet">
          <Outlet />
        </div>
      </Box>
    </Fragment>
  );
}

export default CommonLayout;
