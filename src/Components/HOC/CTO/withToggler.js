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
        return (  );
    }
}
 
export default withToggler;