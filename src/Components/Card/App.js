import React from 'react'
import Card from './Cards'
//three different cards
function App () {
    return (
        <div>
            <Card cardColor="red" height={200} width={200} />
            <Card cardColor='purple' />
            <Card cardColor="green" />
            <Card cardColor="Blue" />
        </div>

    )
}
export default App