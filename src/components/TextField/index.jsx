import React from "react";
import s from "./s.module.scss";

const TextField = ({ children, value, onChange }) => {
  return (
    <label className={s.textFieldWrapper}>
      <span>{children}</span>
      <input value={value} onChange={onChange} type="text" />
    </label>
  );
};

TextField.defaultProps = {
  value: "",
  onChange: () => {
    console.warn("empty");
  },
};

export default TextField;
