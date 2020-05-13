import React, { useState} from 'react'

function App(){
    const [text, setText] = useState(" ")

    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }

    function calculateWordCount(text) {
        const wordArr = text.trim().split(" ")
        console.log(wordArr)
        return wordArr.filter(word => word !== " ").length
    }
    return (
        <div>
            <h1> How fast do you type?</h1>
            <textarea 
                onChange={handleChange}
                value={text}
            />
            <h4>Time remaining: ???</h4>
            <button onClick={()=>calculateWordCount(text)}>Start</button>
            <h1>Word count: ???</h1>
        </div>
    )
}
export default App