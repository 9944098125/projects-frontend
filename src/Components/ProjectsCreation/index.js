import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  AllFieldsContainer,
  CreateButton,
  ProjectCreationContainer,
} from "../styledComponents";
import { createAction } from "../../Redux/Actions/createProject";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import Alert from "../Modal/modal";
import { CircularProgress } from "@mui/material";

function ProjectCreation() {
  const Navigate = useNavigate();
  const userIdFromLStorage = localStorage.getItem("userId");
  const AlertState = useSelector((state) => state.alert);
  const CreateState = useSelector((state) => state.createReducer);
  const [values, setValues] = useState({
    projectTitle: "",
    projectDescription: "",
    projectLink: "",
    userId: userIdFromLStorage,
  });
  const dispatch = useDispatch();

  const validate = (values) => {
    let errors = {};
    if (!values.projectTitle) {
      errors.projectTitle = "Please Give a Title to your Project";
    }
    if (!values.projectDescription) {
      errors.projectDescription = "Please describe your project";
    }
    if (!values.projectLink) {
      errors.projectLink = "Please Provide your Project Link";
    }
    return errors;
  };

  const callCreateApi = (values) => {
    dispatch(createAction(values));
  };

  useEffect(() => {
    if (AlertState.type === "success") {
      setTimeout(() => {
        Navigate("/dashboard");
      }, 2500);
    }
  }, [AlertState, Navigate]);

  return (
    <Fragment>
      <ProjectCreationContainer>
        {AlertState.message && <Alert show={true} />}
        <AllFieldsContainer>
          <Formik
            initialValues={values}
            validate={(values) => validate(values)}
            onSubmit={(values) => callCreateApi(values)}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="mb-4">
                  <Field
                    type="text"
                    name="projectTitle"
                    placeholder="Please enter your Project Title"
                    className={
                      touched.projectTitle && errors.projectTitle
                        ? "is-invalid create-fields form-control"
                        : "create-fields form-control"
                    }
                  />
                  {touched.projectTitle && errors.projectTitle && (
                    <div className="error-feedback">{errors.projectTitle}</div>
                  )}
                </div>
                <div className="mb-4">
                  <Field
                    as="textarea"
                    rows="6"
                    type="text"
                    name="projectDescription"
                    placeholder="Please enter your Project Description"
                    className={
                      touched.projectDescription && errors.projectDescription
                        ? "is-invalid  form-control"
                        : "form-control"
                    }
                  />
                  {touched.projectDescription && errors.projectDescription && (
                    <div className="error-feedback">
                      {errors.projectDescription}
                    </div>
                  )}
                </div>
                <div className="mb-4">
                  <Field
                    type="text"
                    name="projectLink"
                    placeholder="Please enter your Project Link"
                    className={
                      touched.projectLink && errors.projectLink
                        ? "is-invalid create-fields form-control"
                        : "create-fields form-control"
                    }
                  />
                  {touched.projectLink && errors.projectLink && (
                    <div className="error-feedback">{errors.projectLink}</div>
                  )}
                </div>
                <div className="d-flex">
                  <CreateButton type="submit">
                    {CreateState.loading && <CircularProgress />}
                    Create Project
                  </CreateButton>
                </div>
              </Form>
            )}
          </Formik>
        </AllFieldsContainer>
      </ProjectCreationContainer>
    </Fragment>
  );
}
export default ProjectCreation;
