import React from 'react'

function Cards (props) {
    const style = {
        backgroundColor: props.cardColor,
        hight: 100,
        width: 100
    }

    return(
        <div style={style}></div>
    )
}

export default Cards