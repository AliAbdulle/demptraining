import React from 'react'

function Callout(props) {
    return (
//children props
        <div className="callout">
            {props.children}
            {props.name}
        </div>
    )

}
export default Callout