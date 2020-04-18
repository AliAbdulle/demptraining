import React from 'react'


class withToggler extends Component {
    state = {
        on: this.props.defaultOnValue
    }
    toggle = () => {
        this.setState(prevState => {
            return {
                on: !prevState.on
            }
        })
    }
    render() {
        const Component = this.props.component
        const {component: C, defaultOnValue, props} = this.props
        return (
            <C on={this.state.on} toggle={this.toggle} {...props} />
         );
    }
}

export function withToggler(component, optionObj) {
    return function (props) {
        return (
            <Toggle component={component} defaultOnValue={optionObj.defaultOnValue} {...props}
        )
    }
}