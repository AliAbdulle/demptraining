import React from "react"
import { ThemeContextConsumer } from "./ThemeContext";


function Button(props) {
        return (
            <ThemeContextConsumer>
                {context =>(
                    //function onclick change the state
                    <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Switch Theme</button>
                )}
            </ThemeContextConsumer>

        )
}

export default Button