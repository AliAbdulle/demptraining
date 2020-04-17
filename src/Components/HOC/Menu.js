import React from 'react'

class Menu extends React.Component {
    state ={
        isFavorited: false
    }
    toggleFavorite = () => {
        this.setState(prevState => {
        return {
            isFavorited: !prevState.isFavorited
        }
    })
}

}
export default Menu