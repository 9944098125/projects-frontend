import React, { Fragment } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/material";
import BrowserUpdatedIcon from "@mui/icons-material/BrowserUpdated";
import Tooltip from "@mui/material/Tooltip";
import { EachItem, EachItemText, EachItemUpperPart } from "../styledComponents";
import UpdateProject from "./UpdateProject";

function ProjectItem({ project, showEditor, updateProject }) {
  return (
    <Fragment>
      <EachItem key={project._id}>
        <EachItemUpperPart>
          <EachItemText ff fs="23px" fw="700">
            {project.projectTitle}
          </EachItemText>
          <EachItemText ff fs="18px" fw="500" it>
            {project.projectDescription}
          </EachItemText>
          <EachItemText fs="14px" fw="700" links>
            {/* {console.log(project.projectLink)} */}
            <a
              rel="noreferrer"
              href={project.projectLink}
              target="_blank"
              style={{ color: "white" }}
            >
              {project.projectLink}
            </a>
          </EachItemText>
        </EachItemUpperPart>
        <Box sx={{ p: 2, display: "flex", alignItems: "center", mt: 2 }}>
          <Tooltip title="Update">
            <BrowserUpdatedIcon
              onClick={() => {
                updateProject(project);
                // console.log(project);
              }}
              sx={{ mr: 5, color: "blue", cursor: "pointer" }}
            />
          </Tooltip>
          <Tooltip title="Delete">
            <DeleteIcon sx={{ color: "red", cursor: "pointer" }} />
          </Tooltip>
        </Box>
        {showEditor.id === project._id && showEditor.boolean === true ? (
          <>
            <UpdateProject showEditor={showEditor} project={project} />
          </>
        ) : null}
      </EachItem>
    </Fragment>
  );
}

export default ProjectItem;
