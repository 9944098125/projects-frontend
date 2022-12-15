import React, { Fragment, useState, useEffect } from "react";
import DocumentTitle from "../DocumentTitle";
import { Formik, Form, Field } from "formik";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useDispatch, useSelector } from "react-redux";
import {
  Description,
  GlassEffect,
  GlassEffectUpperPart,
  Linked,
  LoginContainer,
  Options,
  SignInHead,
  SubmitButton,
  Title,
  TotalGlassContainer,
} from "../styledComponents";
import { signInAction } from "../../Redux/Actions/signInAction";
import Alert from "../Modal/modal";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  DocumentTitle("Dashboard - SignIn");

  const AlertState = useSelector((state) => state.alert);
  const LoginDetails = useSelector((state) => state.auth);

  const initialValues = {
    email: "",
    password: "",
  };

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email is required";
    } else if (isNaN(values.email)) {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        //eslint-disable-line
        errors.email = "Email is invalid";
      }
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/.test(
        //eslint-disable-line
        values.password
      )
    ) {
      errors.password =
        "Password must contain 8 characters with atleast one number, one capital letter and one special character";
    }
    return errors;
  };

  const callLoginApi = (values) => {
    dispatch(signInAction(values));
  };

  useEffect(() => {
    if (
      LoginDetails.isAuthenticated === true &&
      LoginDetails.token !== undefined
    ) {
      Navigate("/dashboard");
    }
  }, [Navigate, LoginDetails]);

  return (
    <Fragment>
      <LoginContainer>
        {AlertState.message && <Alert show={true} />}
        <div className="d-flex flex-column d-xs-none">
          <Title>PMD</Title>
          <div className="d-flex flex-column align-items-center ms-5 mt-5 pt-5 ps-5">
            <Description>PROJECT MANAGEMENT DASHBOARD</Description>
            <Description>If You don't have an account,</Description>
            <Description>
              Please <Linked to="/sign-up">Sign Up</Linked>
            </Description>
          </div>
        </div>
        <TotalGlassContainer>
          <GlassEffectUpperPart>
            <div className="d-flex align-items-center">
              <Options fs="16px">
                <Linked
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "grey",
                    cursor: "not-allowed",
                  }}
                >
                  Sign In
                </Linked>
              </Options>
              <Options fs="16px">
                <Linked to="/sign-up">Sign Up</Linked>
              </Options>
            </div>
          </GlassEffectUpperPart>
          <GlassEffect>
            <div className="d-flex align-items-center justify-content-center">
              <SignInHead>Sign In</SignInHead>
            </div>
            <div className="form-section mt-4">
              <Formik
                initialValues={initialValues}
                validate={(values) => validate(values)}
                onSubmit={(values) => {
                  callLoginApi(values);
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    {/* email field */}
                    <div className="form-group mb-4">
                      <Field
                        name="email"
                        type="text"
                        placeholder="Enter email or phone number"
                        className={
                          errors.email && touched.email
                            ? "form-control login-input-field is-invalid"
                            : "form-control login-input-field"
                        }
                      />
                      {touched.email && errors.email ? (
                        <div className="invalid-feedback">{errors.email}</div>
                      ) : null}
                    </div>

                    {/* password field */}
                    <div className="form-group mb-5">
                      <div className="input-group">
                        <Field
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter password"
                          className={
                            errors.password && touched.password
                              ? "form-control login-input-field is-invalid"
                              : "form-control login-input-field pass"
                          }
                        />
                        {/* eye icon */}
                        <span
                          className="input-group-text"
                          id="basic-addon2"
                          onClick={toggleShowPassword}
                        >
                          {showPassword ? (
                            <VisibilityIcon
                              fontSize="small"
                              className="iconColor"
                            />
                          ) : (
                            <VisibilityOffIcon
                              fontSize="small"
                              className="iconColor"
                            />
                          )}
                        </span>
                        {touched.password && errors.password ? (
                          <div className="invalid-feedback">
                            {errors.password}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    {/* submit button */}
                    <div className="form-group col">
                      <SubmitButton type="submit">Sign In</SubmitButton>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </GlassEffect>
        </TotalGlassContainer>
      </LoginContainer>
    </Fragment>
  );
}
export default SignIn;
