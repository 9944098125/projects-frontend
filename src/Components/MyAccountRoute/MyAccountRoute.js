import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAction } from "../../Redux/Actions/getProjects";

import {
  EachRowInAccount,
  MyAccountContainer,
  TextInRow,
} from "../styledComponents";

function MyAccountRoute() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const GetState = useSelector((state) => state.getReducer);

  useEffect(() => {
    dispatch(getAction(user._id));
  }, [user._id, dispatch]);

  let projects = [];
  if (Array.isArray(GetState.projects)) {
    projects = GetState.projects;
  }

  const numberOfProjects = projects.length;

  const phNo = user.phone.slice(2);

  return (
    <Fragment>
      <MyAccountContainer>
        <EachRowInAccount>
          <TextInRow sc fs="15px" color="green" fw="600">
            First Name:
          </TextInRow>
          <TextInRow sc it ff fs="20px" color="red" fw="800">
            {user.firstName}
          </TextInRow>
        </EachRowInAccount>
        <EachRowInAccount>
          <TextInRow sc fs="15px" color="green" fw="600">
            Last Name:
          </TextInRow>
          <TextInRow sc it ff fs="20px" color="red" fw="800">
            {user.lastName}
          </TextInRow>
        </EachRowInAccount>
        <EachRowInAccount>
          <TextInRow sc fs="15px" color="green" fw="600">
            Email:
          </TextInRow>
          <TextInRow sc it ff fs="20px" color="red" fw="800">
            {user.email}
          </TextInRow>
        </EachRowInAccount>
        <EachRowInAccount>
          <TextInRow sc fs="15px" color="green" fw="600">
            Phone Number:
          </TextInRow>
          <TextInRow sc it ff fs="20px" color="red" fw="800">
            {phNo}
          </TextInRow>
        </EachRowInAccount>
        <EachRowInAccount>
          <TextInRow sc fs="15px" color="green" fw="600">
            Country:
          </TextInRow>
          <TextInRow sc it ff fs="20px" color="red" fw="800">
            {user.country}
          </TextInRow>
        </EachRowInAccount>
        <EachRowInAccount>
          <TextInRow sc fs="15px" color="green" fw="600">
            Number of Projects:
          </TextInRow>
          <TextInRow sc it ff fs="20px" color="red" fw="800">
            {numberOfProjects}
          </TextInRow>
        </EachRowInAccount>
      </MyAccountContainer>
    </Fragment>
  );
}

export default MyAccountRoute;
