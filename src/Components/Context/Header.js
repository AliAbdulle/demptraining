import React from "react";
import { ThemeContextConsumer } from "./ThemeContext";
//functional  components
function Header() {
  return (
    <ThemeContextConsumer>
      {context => (
        <header className={`${context.theme}-theme`}>
          <h2>{context.theme === "light" ? "Light" : "Dark"}Light Theme</h2>
        </header>
      )}
    </ThemeContextConsumer>
  );
}

export default Header;
