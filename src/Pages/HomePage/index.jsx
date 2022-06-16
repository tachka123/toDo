import React, { useState } from "react";
import { useContext } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import Button from "../../components/Button";
import Task from "../../components/Task";
import TasksContainer from "../../components/TasksContainer";
import TextField from "../../components/TextField";
import Title from "../../components/Title";
import { ThemeContext, themesConsts } from "../../Context";
import { taskSelector, taskReducer } from "../../redux/Tasks";

const HomePage = () => {
  const tasks = useSelector(taskSelector.getTasks);
  const theme = useContext(ThemeContext);
  const dispatch = useDispatch();
  const [taskValue, changeTask] = useState("");
  const onChange = useCallback((e) => {
    changeTask(e.target.value);
  }, []);
  const onAddTask = useCallback(() => {
    dispatch(taskReducer.actions.addTask({ id: v4(), text: taskValue }));
    changeTask("");
  }, [taskValue]);

  const onChangeTheme = useCallback(() => {
    theme.changeTheme(
      theme.theme === themesConsts.light
        ? themesConsts.dark
        : themesConsts.light
    );
  }, [theme]);
  return (
    <>
      <Title>Tasks</Title>
      <Button onClick={onChangeTheme}>Change theme</Button>
      <TextField value={taskValue} onChange={onChange}>
        Add task
      </TextField>
      <Button disabled={taskValue.length === 0} onClick={onAddTask}>
        Create task
      </Button>
      <TasksContainer>
        {tasks.map((props) => (
          <Task dispatch={dispatch} key={props.id} {...props} />
        ))}
      </TasksContainer>
    </>
  );
};

export default HomePage;
