import React from 'react'
import Card from './Cards'

function App () {
    return (
        <div>
            <Card cardColor="red" height={200} width={200} />
            <Card />
            <Card cardColor="green" />
        </div>

    )
}
export default App