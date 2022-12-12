import React, { Fragment, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { sign_out } from "../../Redux/Actions/signInAction";
import {
  AppName,
  AvatarContainer,
  NavbarContainer,
  Username,
} from "../styledComponents";
import MyAccount from "../MyAccount";

function Header() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  // const LoginDetails = useSelector((state) => state.auth);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    dispatch(sign_out);
    Navigate("/");
  };
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  return (
    <Fragment>
      <NavbarContainer>
        <Link
          to="/dashboard"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <AppName style={{ marginTop: "15px" }}>
            Project Management Dashboard
          </AppName>
        </Link>
        <div>
          <AvatarContainer
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <Username style={{ marginTop: "15px" }}>
              {user.firstName + " " + user.lastName}
            </Username>
            <Avatar src={user.image} sx={{ ml: 2 }} />
          </AvatarContainer>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem>
              <MyAccount />
            </MenuItem>
            <MenuItem onClick={logout}>Logout</MenuItem>
          </Menu>
        </div>
      </NavbarContainer>
    </Fragment>
  );
}

export default Header;
