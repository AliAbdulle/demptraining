import React from 'react'

function Callout(props) {
    return (
//children props
        <div className="callout">
            {props.children}
        </div>
    )

}
export default Callout