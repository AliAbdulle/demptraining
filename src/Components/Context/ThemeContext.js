import React, {Component} from 'react'
import {Provider, Consumer} = React.createContext()

class ThemeContextProvider extends Component {
    render() {
        return (
            <Provider value={light}>
                {this.props.children}
            </Provider>
        )
    }

}
export {ThemeContextProvider, Consumer as ThemeContextConsumer}