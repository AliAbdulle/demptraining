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
        return (
            <div>
                    {this.props.render=(this.state.on, this.withToggler)}
            </div>
         );
    }
}

export default withToggler