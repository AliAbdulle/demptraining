import React from 'react'
import withToggler from './withToggler'

function Favorite(props) {
    return (
        <withToggler render={
         (on, toggle) => {
                return (
                    <div>
                        <h3>Click heart to favorite</h3>
                        <h1>
                            <span
                                onClick={toggle}
                            >
                                {on ? "❤️" : "♡"}
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