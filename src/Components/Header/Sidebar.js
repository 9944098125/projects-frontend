import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sign_out } from "../../Redux/Actions/signInAction";
import { SidebarContainer, SidebarItems } from "../styledComponents";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import CreateIcon from "@mui/icons-material/Create";
import AutoDeleteIcon from "@mui/icons-material/AutoDelete";

function Sidebar() {
  return (
    <Fragment>
      <SidebarContainer>
        <SidebarItems>
          <Link
            to="/create"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <CreateIcon sx={{ mr: 2 }} /> Create Project
          </Link>
        </SidebarItems>
        <SidebarItems>
          <Link
            to="/dashboard"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <DashboardIcon sx={{ mr: 2 }} /> Dashboard
          </Link>
        </SidebarItems>
        <SidebarItems>
          <Link
            to="/my-account"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <AccountCircleIcon sx={{ mr: 2 }} /> My Account
          </Link>
        </SidebarItems>
        <SidebarItems>
          <Link
            to="/change-password"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <KeyIcon sx={{ mr: 2 }} /> Change Password
          </Link>
        </SidebarItems>
        <SidebarItems>
          <Link
            to="/deleted"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <AutoDeleteIcon sx={{ mr: 2 }} /> Deleted Projects
          </Link>
        </SidebarItems>
      </SidebarContainer>
    </Fragment>
  );
}

export default Sidebar;
