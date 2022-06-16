import React, { memo } from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router";
import { taskReducer } from "../../redux/Tasks";
import routes from "../../Router/routes";
import Button from "../Button";
import s from "./s.module.scss";

const Task = ({ text, id, dispatch }) => {
  const navigator = useNavigate();
  const onDeleteTask = useCallback(() => {
    dispatch(taskReducer.actions.deleteTask(id));
  }, [id]);
  const cbOnEditTask = useCallback(() => {
    dispatch(taskReducer.actions.setTaskAcc({ id, text }));
    navigator(routes.changeName);
  }, [navigator, id, text]);
  return (
    <div className={s.task}>
      <span>{text}</span>
      <Button onClick={onDeleteTask} red>
        Delete
      </Button>
      <Button onClick={cbOnEditTask}>Change name</Button>
    </div>
  );
};

Task.defaultProps = {
  text: "Empty",
  id: 0,
};

export default memo(Task);
