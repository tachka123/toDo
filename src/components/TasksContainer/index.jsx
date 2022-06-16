import React from "react";

import s from "./s.module.scss";

const TasksContainer = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default TasksContainer;
