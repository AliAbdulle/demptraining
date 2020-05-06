import React from "react"
import propTypes from 'prop-types'
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
Button.propTypes = {
    theme: propTypes.oneOf(["light", "dark"])
}

Button.defualtProps = {
    theme: "light"
}

export default Button