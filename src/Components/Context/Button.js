import React from "react"
import { ThemeContextConsumer } from "./ThemeContext";


function Button(props) {
        return (
            <ThemeContextConsumer>
                {theme =>(
                    <button className={`${props.theme}-theme`}>Switch Theme</button>
                )}
            </ThemeContextConsumer>

        )
}

export default Button