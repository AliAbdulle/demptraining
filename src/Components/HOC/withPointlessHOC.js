import React, { Component } from 'react'


function withPointlessHOC (component) {
    return function(props){
        return (
            <Component {...props} />
        )
    }
}