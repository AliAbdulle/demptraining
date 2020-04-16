import React from 'react'


export function withExtraPropAdded () {
    const Component = component
    return function(props){
        return (
            <Component {...props} />
        )
    }
}