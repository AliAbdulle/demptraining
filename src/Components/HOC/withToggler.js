import React, { Component} from 'react'


class withToggler extends Component {
    state = {
        on: this.props.defaultOnValue
    }
    withToggler = () => {
        this.setState(prevState => {
            return {
                on: !prevState.on
            }
        })
    }
    render() {
        const {component: C, defaultOnValue, ...props} = this.props
        return (
            <C on={this.state.on} toggle={this.toggle} {...props} />
         );
    }
}

export function withToggler(component, optionObj) {
    return function (props) {
        return (
            <Toggler component={component} defaultOnValue={optionObj.defaultOnValue} {...props} />
        )
    }
}