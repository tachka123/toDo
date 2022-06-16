import React from "react";
import { Route, Routes } from "react-router-dom";
import ChangeTaskNamePage from "../Pages/ChangeTaskName";
import HomePage from "../Pages/HomePage";
import routes from "./routes";

const Router = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<HomePage />}></Route>
      <Route path={routes.changeName} element={<ChangeTaskNamePage />}></Route>
    </Routes>
  );
};

export default Router;
