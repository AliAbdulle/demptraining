import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/Context/App";
import ThemeContext from "./Components/Context/ThemeContext";


ReactDOM.render(
  <ThemeContext.Provider value={"dark"}>
    <App />
  </ThemeContext.Provider>,
  document.getElementById("root")
);


