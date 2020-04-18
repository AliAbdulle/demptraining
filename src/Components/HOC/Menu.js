import React from 'react'
import { withToggler } from './CTO/withToggler'

class Menu extends React.Component {
    state ={
        show: true
    }
    toggleFavorite = () => {
        this.setState(prevState => {
        return {
            show: !prevState.show
        }
    })
}

render () {
    return (
        <div>
            <button onClick={this.state.show}>{this.state.show ? "hide" : "show"} Menu</button>
            <nav style={{display: this.state.show ? "block" : "none"}}>
                    <h6>Signed in as Coder123</h6>
                    <p>Your Profile</p>
                    <p>Your Repositories</p>
                    <p>Your Stars</p>
                    <p>Your Gists</p>
            </nav>
        </div>
    )
}


}
export default withToggler(Menu, {defaultOnValue: true})