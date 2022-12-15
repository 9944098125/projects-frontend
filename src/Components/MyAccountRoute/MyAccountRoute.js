import { Avatar } from "@mui/material";
import { Formik, Form, Field } from "formik";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAUser } from "../../Redux/Actions/getUserAction";
import { updateUserAction } from "../../Redux/Actions/updateUserAction";

import { MyAccountContainer, Labels, UpdateButton } from "../styledComponents";
import Alert from "../Modal/modal";
import { useNavigate } from "react-router-dom";

function MyAccountRoute() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
  });
  const [url, setUrl] = useState("");

  const GetUserState = useSelector((state) => state.getUserReducer);
  const AlertState = useSelector((state) => state.alert);
  let userFilledInFields = GetUserState.user;
  // console.log(userFilledInFields);

  useEffect(() => {
    dispatch(getAUser(user._id));
  }, [user._id, dispatch]);

  useEffect(() => {
    if (userFilledInFields) {
      setValues((prevState) => {
        return {
          ...prevState,
          firstName: userFilledInFields.firstName,
          lastName: userFilledInFields.lastName,
          email: userFilledInFields.email,
          phone: userFilledInFields.phone,
          country: userFilledInFields.country,
        };
      });
      setUrl(userFilledInFields.image);
    }
  }, [userFilledInFields]);

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
          setUrl(data.url.toString());
          console.log(data.url);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return;
    }
  };

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
    }
    if (!values.phone) {
      errors.phone = "Phone number is required";
    }
    if (!values.country) {
      errors.country = "Country is required";
    }
    return errors;
  };

  const callUpdateAccountApi = (values) => {
    if (values) {
      const data = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone,
        country: values.country,
        image: url,
      };
      dispatch(updateUserAction(user._id, data));
    }
  };

  useEffect(() => {
    if (AlertState.type === "success") {
      setTimeout(() => {
        Navigate("/dashboard");
      }, 3000);
    }
  });

  return (
    <Fragment>
      <MyAccountContainer>
        {AlertState.message && <Alert show={true} />}
        <Formik
          initialValues={values}
          enableReinitialize
          validate={(values) => validate(values)}
          onSubmit={(values) => callUpdateAccountApi(values)}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="d-flex flex-column mb-5">
                <Labels>First Name</Labels>
                <Field
                  type="text"
                  name="firstName"
                  placeholder="Enter your First Name"
                  className={
                    errors.firstName && touched.firstName
                      ? "edit-fields is-invalid"
                      : "edit-fields"
                  }
                />
                {errors.firstName && touched.firstName && (
                  <div className="error-feedback">{errors.firstName}</div>
                )}
              </div>
              <div className="d-flex flex-column mb-5">
                <Labels>Last Name</Labels>
                <Field
                  type="text"
                  name="lastName"
                  placeholder="Enter your Last Name"
                  className={
                    errors.lastName && touched.lastName
                      ? "edit-fields is-invalid"
                      : "edit-fields"
                  }
                />
                {errors.lastName && touched.lastName && (
                  <div className="error-feedback">{errors.lastName}</div>
                )}
              </div>
              <div className="d-flex flex-column mb-5">
                <Labels>Email</Labels>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your Email address"
                  className={
                    errors.email && touched.email
                      ? "edit-fields is-invalid"
                      : "edit-fields"
                  }
                />
                {errors.email && touched.email && (
                  <div className="error-feedback">{errors.email}</div>
                )}
              </div>
              <div className="d-flex flex-column mb-5">
                <Labels>Phone</Labels>
                <Field
                  type="number"
                  name="phone"
                  placeholder="Enter your Phone Number"
                  className={
                    errors.phone && touched.phone
                      ? "edit-fields is-invalid"
                      : "edit-fields"
                  }
                />
                {errors.phone && touched.phone && (
                  <div className="error-feedback">{errors.phone}</div>
                )}
              </div>
              <div className="d-flex flex-column mb-5">
                <Labels>Country</Labels>
                <Field
                  type="text"
                  name="country"
                  placeholder="Enter your country"
                  className={
                    errors.country && touched.country
                      ? "edit-fields is-invalid"
                      : "edit-fields"
                  }
                />
                {errors.country && touched.country && (
                  <div className="error-feedback">{errors.country}</div>
                )}
              </div>
              <div className="d-flex flex-column mb-5">
                <Labels>Profile Picture</Labels>
                <input
                  type="file"
                  onChange={(e) => onImageChange(e.target.files[0])}
                />
                <Avatar
                  src={url}
                  sx={{ height: "100px", mt: 4, width: "100px" }}
                />
              </div>
              <div className="p-5">
                <UpdateButton
                  style={{
                    width: "100%",
                    padding: "15px",
                    marginBottom: "50px",
                  }}
                  type="submit"
                >
                  Update My Account
                </UpdateButton>
              </div>
            </Form>
          )}
        </Formik>
      </MyAccountContainer>
    </Fragment>
  );
}

export default MyAccountRoute;
