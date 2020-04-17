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
            
        </div>
    )
}


}
export default Menu