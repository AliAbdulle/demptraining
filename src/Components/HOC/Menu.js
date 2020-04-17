import React from 'react'

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
        </div>
    )
}


}
export default Menu