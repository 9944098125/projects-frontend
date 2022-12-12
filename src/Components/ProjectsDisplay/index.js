import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAction } from "../../Redux/Actions/getProjects";
import { sign_out } from "../../Redux/Actions/signInAction";
import {
  EachItem,
  EachItemText,
  EachItemUpperPart,
  GetContainer,
} from "../styledComponents";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/material";
import BrowserUpdatedIcon from "@mui/icons-material/BrowserUpdated";
import Tooltip from "@mui/material/Tooltip";

function ProjectDisplay() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const LoginDetails = useSelector((state) => state.auth);
  const GetState = useSelector((state) => state.getReducer);
  const userIdFromLStorage = localStorage.getItem("userId");

  useEffect(() => {
    if (LoginDetails.isAuthenticated === false || !LoginDetails.token) {
      dispatch(sign_out());
      Navigate("/");
    }
  }, [Navigate, dispatch, LoginDetails]);

  useEffect(() => {
    dispatch(getAction(userIdFromLStorage));
  }, [userIdFromLStorage, dispatch]);

  return (
    <Fragment>
      <GetContainer>
        {GetState.projects !== null &&
          GetState.projects.map((project, idx) => (
            <EachItem key={idx}>
              <EachItemUpperPart>
                <EachItemText ff fs="23px" fw="700">
                  {project.projectTitle}
                </EachItemText>
                <EachItemText ff fs="18px" fw="500" it>
                  {project.projectDescription}
                </EachItemText>
                <EachItemText fs="14px" fw="700" links>
                  {/* {console.log(project.projectLink)} */}
                  <a href={project.projectLink} target="_blank">
                    {project.projectLink}
                  </a>
                </EachItemText>
              </EachItemUpperPart>
              <Box sx={{ p: 2, display: "flex", alignItems: "center", mt: 2 }}>
                <Tooltip title="Update">
                  <BrowserUpdatedIcon
                    sx={{ mr: 5, color: "blue", cursor: "pointer" }}
                  />
                </Tooltip>
                <Tooltip title="Delete">
                  <DeleteIcon sx={{ color: "red", cursor: "pointer" }} />
                </Tooltip>
              </Box>
            </EachItem>
          ))}
      </GetContainer>
    </Fragment>
  );
}
export default ProjectDisplay;
