import React from "react";
import s from "./s.module.scss";

const Button = ({ children, onClick, red, ...rest }) => {
  return (
    <button
      {...rest}
      onClick={onClick}
      className={[s.button, red && s.buttonDelete].join(" ")}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => console.warn("Empty func"),
  red: false,
};

export default Button;
