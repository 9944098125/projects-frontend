import React, { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { useNavigate } from "react-router";
import { Form, Formik } from "formik";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { resetPasswordAction } from "../../Redux/Actions/resetPassword";
import Alert from "../Modal/modal";
import {
  Labels,
  PasswordFieldContainer,
  PasswordFields,
  UpdateButton,
} from "../styledComponents";
import { CircularProgress } from "@mui/material";

function ChangePassword() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const ResetState = useSelector((state) => state.resetReducer);
  const AlertState = useSelector((state) => state.alert);

  const [values, setValues] = useState({
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validate = (values) => {
    let errors = {};
    if (!values.password) {
      errors.password = "Password is required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/.test(
        values.password
      )
    ) {
      errors.password =
        "Password must contain at least 8 characters with one capital letter, one number and one special character";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm Your Password";
    }
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Your passwords are not matching";
    }
    return errors;
  };

  const callChangePasswordApi = (values) => {
    if (values) {
      const body = {
        userId: localStorage.getItem("userId"),
        newPassword: values.password,
      };
      dispatch(resetPasswordAction(body));
    }
  };

  useEffect(() => {
    if (AlertState.type === "success") {
      setTimeout(() => {
        Navigate("/dashboard");
      }, 3000);
    }
  }, [AlertState, Navigate]);

  return (
    <Fragment>
      {AlertState.message && <Alert show={true} />}
      <Formik
        initialValues={values}
        validate={(values) => validate(values)}
        onSubmit={(values) => callChangePasswordApi(values)}
      >
        {({ errors, touched }) => (
          <Form>
            <PasswordFieldContainer>
              <Labels>New Password</Labels>
              <div className="d-flex align-items-center">
                <PasswordFields
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className={
                    errors.password && touched.password && "is-invalid"
                  }
                  placeholder="Enter your New Password"
                />
                {showPassword ? (
                  <VisibilityIcon
                    onClick={toggleShowPassword}
                    sx={{ cursor: "pointer" }}
                  />
                ) : (
                  <VisibilityOffIcon
                    onClick={toggleShowPassword}
                    sx={{ cursor: "pointer" }}
                  />
                )}
              </div>
              {errors.password && touched.password && (
                <div className="error-feedback">{errors.password}</div>
              )}
            </PasswordFieldContainer>
            <PasswordFieldContainer>
              <Labels>Confirm New Password</Labels>
              <div className="d-flex align-items-center">
                <PasswordFields
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  className={
                    errors.confirmPassword &&
                    touched.confirmPassword &&
                    "is-invalid"
                  }
                  placeholder="Enter your New Password"
                />
                {showPassword ? (
                  <VisibilityIcon
                    onClick={toggleShowConfirmPassword}
                    sx={{ cursor: "pointer" }}
                  />
                ) : (
                  <VisibilityOffIcon
                    onClick={toggleShowConfirmPassword}
                    sx={{ cursor: "pointer" }}
                  />
                )}
              </div>
              {errors.confirmPassword && touched.confirmPassword && (
                <div className="error-feedback">{errors.confirmPassword}</div>
              )}
              <UpdateButton style={{ marginTop: "25px" }} type="submit">
                {ResetState.loading && <CircularProgress />}
                Change Password
              </UpdateButton>
            </PasswordFieldContainer>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
}

export default ChangePassword;
