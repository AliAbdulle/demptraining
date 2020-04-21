import React from 'react'
import withToggler from './CTO/withToggler'
import { render } from '@testing-library/react'

function Favorite(props) {
    return (
        <withToggler render={
            function () {
                return (


            <div>
                <h3>Click heart to favorite</h3>
                <h1>
                    <span
                        onClick={props.toggle}
                    >
                        {props.on ? "❤️" : "♡"}
                    </span>
                </h1>
            </div>
                )
            }
        } />
    )
}
//Higher Order Components

export default Favorite