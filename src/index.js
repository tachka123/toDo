import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux";
import App from "./App";
import { ThemeContextWrapper } from "./Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeContextWrapper>
          <App />
        </ThemeContextWrapper>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
