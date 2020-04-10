import React, { Component } from 'react'


class NewJSFeatures extends Component {
    constructor() {
        super()
        this.state = {
            count : 0
        }
        this.increment = this.increment.bind(this)

    }
    increment() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.state.increment}>+</button>
                <button onClick={this.state.decrement}>-</button>
            </div>
        )
    }

}

export default NewJSFeatures