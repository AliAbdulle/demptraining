import React from "react"
import ThemeContext from "./ThemeContext"

function Button(props) {
        return (
            <ThemeContext.Consumer>
                {theme =>(

            <button className={`${theme}-theme`}>Switch Theme</button>
                )}
            </ThemeContext.Consumer>
        
        )
}

Button.contextType = ThemeContext

export default Button