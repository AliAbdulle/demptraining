import React from 'react'
import Toggler from './Toggler'

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
//Render function display 
render () {
    return (
        <Toggler render={(on, toggle) => (

            <div>
                <button onClick={this.state.show}>{this.state.show ? "hide" : "show"} Menu</button>
                <nav style={{display: this.state.show ? "block" : "none"}}>
                        <h6>Signed in as Coder123</h6>
                        <p>Your Profile</p>
                        <p>Your Repositories</p>
                        <p>Your Stars</p>
                        <p>Your Gists</p>
                        <p>Sport section</p>
                </nav>
            </div>
        )} />
    )
}


}
export default Menu