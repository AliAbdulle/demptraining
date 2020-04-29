import React, { Component } from 'react'
import ThemeContext from './ThemeContext';

class Button extends Component {
    render() {
        const theme = this.context
        return ( 
            <Button className={`${theme}-theme`}>Switch Them</Button>
        );
    }
}
Button.contextType = ThemeContext
export default Button;