import React, { memo } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import Title from "../../components/Title";
import { taskReducer, taskSelector } from "../../redux/Tasks";

const ChangeTaskNamePage = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const taskAcc = useSelector(taskSelector.getTaskAcc);
  const [taskValue, changeTaskValue] = useState(taskAcc.text);
  const onChangeValue = useCallback((e) => {
    changeTaskValue(e.target.value);
  }, []);
  const goBack = useCallback(() => {
    navigator(-1);
  }, [navigator]);
  const onAcceptChanges = useCallback(() => {
    dispatch(taskReducer.actions.editTask({ id: taskAcc.id, text: taskValue }));
    goBack();
  }, [taskAcc, taskValue, goBack]);
  return (
    <>
      <Title>Change name of task</Title>
      <TextField value={taskValue} onChange={onChangeValue}>
        New name
      </TextField>
      <Button onClick={onAcceptChanges} disabled={taskValue.length === 0}>
        Accept changes
      </Button>
      <Button onClick={goBack}>Cancel</Button>
    </>
  );
};

export default memo(ChangeTaskNamePage);
