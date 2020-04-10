import React, {Component} from "react"

class NewJSFeatures extends Component {
   state = {
            count: 0,
            greating: "Hi",
            age: 24
        }

    increment = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    
    decrement = () => {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }
    
    render() {
        const {count, greating, age} = this.state
        return (
            <div>
                <h1>{count} {greating} {age}</h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}

export default NewJSFeatures