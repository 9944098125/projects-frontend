import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAction } from "../../Redux/Actions/getProjects";
import { sign_out } from "../../Redux/Actions/signInAction";
import { GetContainer } from "../styledComponents";
import Alert from "../Modal/modal";
import ProjectItem from "./ProjectItem";

function ProjectDisplay() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const LoginDetails = useSelector((state) => state.auth);
  const AlertState = useSelector((state) => state.alert);
  const GetState = useSelector((state) => state.getReducer);
  const userIdFromLStorage = localStorage.getItem("userId");

  const oldData = {
    projectTitle: "",
    projectDescription: "",
    projectLink: "",
  };
  const [showEditor, setShowEditor] = useState({
    id: "",
    boolean: false,
    dataWithId: { ...oldData },
  });

  let projects = [];

  if (Array.isArray(GetState.projects)) {
    projects = GetState.projects;
  } else {
    projects = [];
  }

  useEffect(() => {
    dispatch(getAction(userIdFromLStorage));
  }, [userIdFromLStorage, dispatch, showEditor, projects]);

  const updateProject = (project) => {
    setShowEditor({
      id: project._id,
      boolean: !showEditor.boolean,
      dataWithId: { ...project },
    });
  };

  useEffect(() => {
    if (AlertState.type === "clear") {
      setShowEditor({ boolean: false });
    }
  }, [AlertState, showEditor]);

  useEffect(() => {
    if (LoginDetails.isAuthenticated === false || !LoginDetails.token) {
      dispatch(sign_out());
      Navigate("/");
    }
  }, [Navigate, dispatch, LoginDetails.isAuthenticated, LoginDetails.token]);

  // console.log(
  //   "data",
  //   showEditor.boolean && showEditor.dataWithId
  // );

  return (
    <Fragment>
      <GetContainer>
        {AlertState.message && <Alert show={true} />}
        {projects !== null &&
          projects.map((project, idx) => (
            <ProjectItem
              key={idx}
              project={project}
              showEditor={showEditor}
              updateProject={updateProject}
            />
          ))}
      </GetContainer>
    </Fragment>
  );
}
export default ProjectDisplay;
