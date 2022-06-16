import React from "react";
import { themesConsts } from "../../Context";
import s from "./s.module.scss";

const PageWrapper = ({ children, theme }) => {
  return (
    <div
      className={[
        s.container,
        theme === themesConsts.light ? s.light : s.dark,
      ].join(" ")}
    >
      {children}
    </div>
  );
};

PageWrapper.defaultProps = {
  theme: themesConsts.light,
};

export default PageWrapper;
