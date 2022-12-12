import React, { Fragment, useState, useEffect } from "react";
import DocumentTitle from "../DocumentTitle";
import { Formik, Form, Field } from "formik";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ReactFlagsSelect from "react-flags-select";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
import { signUpAction } from "../../Redux/Actions/signUpAction";
import { CircularProgress } from "@mui/material";
import Alert from "../Modal/modal";

function SignUp() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    password: "",
    confirmPassword: "",
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selected, setSelected] = useState("");
  const [value, setValue] = useState("");
  const [code, setCode] = useState("");
  const [validateCountry, setValidateCountry] = useState(false);
  const [url, setUrl] = useState("");

  const AlertState = useSelector((state) => state.alert);
  const SignUpState = useSelector((state) => state.signup);

  DocumentTitle("Dashboard - SignUp");

  const validate = (values) => {
    let errors = {};
    if (!values.firstName) {
      errors.firstName = "First Name is required";
    }
    if (!values.lastName) {
      errors.lastName = "Last Name is required";
    }
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
        "Password must 8 characters long with at least one Capital letter, one number and one special character";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm Your Password";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Password and Confirm Password are not matching";
    }
    return errors;
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onChange = (value, data, event, formattedValue) => {
    setValue(value);
    setCode(data.dialCode);
  };

  const onImageChange = (image) => {
    if (image === undefined) {
      return;
    }
    if (
      image.type === "image/jpeg" ||
      "image/jpg" ||
      "image/png" ||
      "image/svg"
    ) {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "projects");
      data.append("cloud_name", "dakda5ni3");
      fetch("https://api.cloudinary.com/v1_1/dakda5ni3/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setUrl(data.url);
          console.log(data.url);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return;
    }
  };

  const callRegisterApi = (values) => {
    if (selected === "" || value === "") {
      return;
    }
    const data = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone: value,
      country: selected,
      password: values.password,
      image: url,
    };

    dispatch(signUpAction(data));
    console.log("values", data);
  };

  useEffect(() => {
    if (AlertState.type === "success") {
      setTimeout(() => {
        Navigate("/");
      }, 3000);
    }
  }, [Navigate, AlertState]);

  return (
    <Fragment>
      <LoginContainer>
        {AlertState.message && <Alert show={true} />}
        <div className="d-flex flex-column d-xs-none">
          <Title>PMD</Title>
          <div className="d-flex flex-column align-items-center ms-5 mt-5 pt-5 ps-5">
            <Description>PROJECT MANAGEMENT DASHBOARD</Description>
            <Description>If You already have an account,</Description>
            <Description>
              Please <Linked to="/">Sign In</Linked>
            </Description>
          </div>
        </div>
        <TotalGlassContainer reg>
          <GlassEffectUpperPart>
            <div className="d-flex align-items-center">
              <Options fs="16px">
                <Linked
                  to="/sign-up"
                  style={{
                    textDecoration: "none",
                    color: "grey",
                    cursor: "not-allowed",
                  }}
                >
                  Sign Up
                </Linked>
              </Options>
              <Options fs="16px">
                <Linked to="/">Sign In</Linked>
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
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={(values) => {
                  callRegisterApi(values);
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="row">
                      <div className="col-md">
                        <div className="form-group mb-4">
                          {/* first name */}
                          <Field
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="Enter your first name"
                            className={
                              errors.firstName && touched.firstName
                                ? "form-control primary-input-field is-invalid"
                                : "form-control primary-input-field"
                            }
                          />
                          {touched.firstName && errors.firstName ? (
                            <div className="invalid-feedback">
                              {errors.firstName}
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <div className="col-md">
                        <div className="form-group mb-4">
                          {/* last name */}
                          <Field
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Enter Your last name"
                            className={
                              errors.lastName && touched.lastName
                                ? "form-control primary-input-field is-invalid"
                                : "form-control primary-input-field"
                            }
                          />
                          {touched.lastName && errors.lastName ? (
                            <div className="invalid-feedback">
                              {errors.lastName}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md">
                        <div className="form-group mb-4">
                          {/* email */}
                          <Field
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Enter your email address"
                            className={
                              errors.email && touched.email
                                ? "form-control primary-input-field is-invalid"
                                : "form-control primary-input-field"
                            }
                          />
                          {touched.email && errors.email ? (
                            <div className="invalid-feedback">
                              {errors.email}
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group mb-4">
                          {/* phone number */}
                          <PhoneInput
                            country={"gb"}
                            isValid={(value) => {
                              if (value.match(/^(?![\s\S])/)) {
                                return "Phone number is required";
                              } else {
                                return true;
                              }
                            }}
                            value={value}
                            onChange={onChange}
                            placeholder={"Enter your phone number"}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md">
                        <div className="form-group mb-4">
                          <div className="input-group">
                            {/* password */}
                            <Field
                              type={showPassword ? "text" : "password"}
                              id="password"
                              name="password"
                              placeholder="Enter your password"
                              className={
                                errors.password && touched.password
                                  ? "form-control primary-input-field is-invalid pass"
                                  : "form-control primary-input-field pass"
                              }
                            />
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
                      </div>

                      <div className="col-md">
                        <div className="form-group mb-4">
                          <div className="input-group">
                            {/* confirm-password */}
                            <Field
                              type={showConfirmPassword ? "text" : "password"}
                              id="confirmPassword"
                              name="confirmPassword"
                              placeholder="Re-enter your password"
                              className={
                                errors.confirmPassword &&
                                touched.confirmPassword
                                  ? "form-control primary-input-field is-invalid pass"
                                  : "form-control primary-input-field pass"
                              }
                            />
                            <span
                              className="input-group-text"
                              id="basic-addon2"
                              onClick={toggleShowConfirmPassword}
                            >
                              {showConfirmPassword ? (
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
                            {touched.confirmPassword &&
                            errors.confirmPassword ? (
                              <div className="invalid-feedback">
                                {errors.confirmPassword}
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex align-items-center mb-4">
                      <div className="col-md-6 me-5">
                        <div className="demo-wrapper">
                          {/* country */}
                          <ReactFlagsSelect
                            selected={selected}
                            onSelect={(code) => setSelected(code)}
                            searchable={true}
                          />
                        </div>
                        {validateCountry && (
                          <div className="invalid-feedback">
                            Country is required
                          </div>
                        )}
                      </div>
                      <input
                        type="file"
                        onChange={(e) => onImageChange(e.target.files[0])}
                      />
                    </div>

                    <div className="form-group text-center mb-2">
                      <SubmitButton type="submit">
                        {SignUpState.loading && <CircularProgress />} Sign Up
                      </SubmitButton>
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
export default SignUp;
