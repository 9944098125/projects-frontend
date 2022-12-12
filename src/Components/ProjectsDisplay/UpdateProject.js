import React, { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Alert from "../Modal/modal";
import { Typography, CircularProgress } from "@mui/material";

import { updateAction } from "../../Redux/Actions/updateAction";

import {
  AllFieldsContainer,
  UpdateButton,
  TextField,
  TextArea,
} from "../styledComponents";

function UpdateProject({ showEditor, project }) {
  const dispatch = useDispatch();
  const AlertState = useSelector((state) => state.alert);
  const UpdateState = useSelector((state) => state.updateReducer);

  const [projectTitle, setProjectTitle] = useState(
    showEditor.boolean && showEditor.dataWithId.projectTitle
  );
  const [projectDescription, setProjectDescription] = useState(
    showEditor.boolean && showEditor.dataWithId.projectDescription
  );
  const [projectLink, setProjectLink] = useState(
    showEditor.boolean && showEditor.dataWithId.projectLink
  );

  const [errors, setErrors] = useState({
    projectTitle: false,
    projectDescription: false,
    projectLink: false,
  });

  const handleTitleChange = (e) => {
    setErrors((pre) => {
      return { ...pre, projectTitle: false };
    });
    setProjectTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setErrors((pre) => {
      return { ...pre, projectDescription: false };
    });
    setProjectDescription(e.target.value);
  };

  const handleLinkChange = (e) => {
    setErrors((pre) => {
      return { ...pre, projectLink: false };
    });
    setProjectLink(e.target.value);
  };

  const callUpdateApi = (projectId) => {
    if (!projectTitle) {
      setErrors((pre) => {
        return { ...pre, projectTitle: true };
      });
    }
    if (!projectDescription) {
      setErrors((pre) => {
        return { ...pre, projectDescription: true };
      });
    }
    if (!projectLink) {
      setErrors((pre) => {
        return { ...pre, projectLink: true };
      });
    }
    if (projectTitle && projectDescription && projectLink) {
      const body = {
        projectTitle,
        projectDescription,
        projectLink,
      };
      dispatch(updateAction(projectId, body));
      // console.log("values", body, projectId);
    }
  };

  return (
    <Fragment>
      {AlertState.message && <Alert show={true} />}
      <AllFieldsContainer>
        {/* {console.log("data", showEditor.dataWithId)} */}
        <div className="d-flex flex-column mb-4">
          <TextField
            placeholder="Enter Project Title"
            name="projectTitle"
            value={projectTitle}
            onChange={handleTitleChange}
            type="text"
          />
          {errors.projectTitle && (
            <Typography variant="body" color="error">
              Title is required
            </Typography>
          )}
        </div>
        <div className="d-flex flex-column mb-4">
          <TextArea
            rows="6"
            type="text"
            placeholder="Enter Project Description"
            name="projectDescription"
            value={projectDescription}
            onChange={handleDescriptionChange}
          />
          {errors.projectDescription && (
            <Typography variant="body" color="error">
              Description is required
            </Typography>
          )}
        </div>
        <div className="d-flex flex-column mb-4">
          <TextField
            placeholder="Enter Project Link"
            name="projectLink"
            value={projectLink}
            onChange={handleLinkChange}
            type="text"
          />
          {errors.projectLink && (
            <Typography variant="body" color="error">
              Link is required
            </Typography>
          )}
        </div>
        <div className="d-flex">
          <UpdateButton
            type="button"
            onClick={() => {
              callUpdateApi(project._id);
              console.log(project._id);
            }}
          >
            {UpdateState.loading && <CircularProgress />}
            Update Project
          </UpdateButton>
        </div>
      </AllFieldsContainer>
    </Fragment>
  );
}

export default UpdateProject;
