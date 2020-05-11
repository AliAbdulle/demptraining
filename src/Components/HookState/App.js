import React, { useState } from 'react'

function App() {
    const [value] = useState("Yes")
    return (
        <div>
            <h1>Is state important to know? {value}</h1>
        </div>
    )
}
export default App