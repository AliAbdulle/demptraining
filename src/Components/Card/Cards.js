import React, { Component } from 'react'

class Cards extends Component {
    static defaultProps ={
            cardColor: "Blue",
            height: 100,
            width: 100
    }
    render() {
        const styles = {
            backgroundColor: this.props.cardColor,
            height: 100,
            width: 100
        }
    return(
        <div style={styles}></div>
    )
    }
}

export default Cards