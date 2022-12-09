import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";
import CommonLayout from "../Components/Header/CommonLayout";
import ProjectsDisplay from "../Components/ProjectsDisplay";

export default function BaseRoutes() {
  return (
    <Fragment>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<SignIn />} />
        <Route element={<CommonLayout />}>
          <Route path="/dashboard" element={<ProjectsDisplay />} />
        </Route>
      </Routes>
    </Fragment>
  );
}
