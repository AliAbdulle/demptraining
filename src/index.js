import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/Context/App";
import {ThemeContextProvider} from "./Components/Context/ThemeContext";

//Added all file display the page
ReactDOM.render(
  <ThemeContextProvider value={"dark"}>
    <App />
  </ThemeContextProvider>,
  document.getElementById("root")
);


