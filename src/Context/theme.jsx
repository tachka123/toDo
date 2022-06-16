import React from "react";
import { useState } from "react";

export const themesConsts = {
  light: "light",
  dark: "dark",
};

export const ThemeContext = React.createContext({
  theme: themesConsts.light,
  changeTheme: (theme) => {},
});

export const ThemeContextWrapper = ({ children }) => {
  const [theme, changeTheme] = useState(themesConsts.light);
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
