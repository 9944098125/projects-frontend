import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";
import CommonLayout from "../Components/Header/CommonLayout";
import ProjectsDisplay from "../Components/ProjectsDisplay";
import MyAccountRoute from "../Components/MyAccountRoute/MyAccountRoute";
import ChangePassword from "../Components/ChangePassword";
import ProjectsCreation from "../Components/ProjectsCreation";

export default function BaseRoutes() {
  return (
    <Fragment>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<SignIn />} />
        <Route element={<CommonLayout />}>
          <Route path="/dashboard" element={<ProjectsDisplay />} />
          <Route path="/my-account" element={<MyAccountRoute />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/create" element={<ProjectsCreation />} />
        </Route>
      </Routes>
    </Fragment>
  );
}
