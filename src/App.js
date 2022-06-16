import Router from "./Router";
import { ThemeContext } from "./Context";
import "./App.css";
import PageWrapper from "./components/PageWrapper";
import { useContext } from "react";

function App() {
  const theme = useContext(ThemeContext);
  return (
    <PageWrapper theme={theme.theme}>
      <Router />
    </PageWrapper>
  );
}

export default App;
