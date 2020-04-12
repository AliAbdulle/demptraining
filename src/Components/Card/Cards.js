import React from 'react'
import propsTypes from 'prop-types'

function Cards (props) {
    const styles = {
        backgroundColor: props.cardColor,
        height: props.height,
        width: props.width
    }

    return(
        <div style={styles}></div>
    )

}

Cards.propsTypes ={
    backgroundColor: propsTypes.oneOf(['red', 'green', 'blue', 'purple']).isRequired,
    height: propsTypes.number.isRequired,
    width: propsTypes.number

}

//DefualtProps feeds
Cards.defaultProps = {
    height: 100,
    width:100
}

export default Cards