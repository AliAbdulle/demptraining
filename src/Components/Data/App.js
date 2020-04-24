import React from 'react'
import DataFatcher from './DataFetcher'

function App() {
    return(
        <div>
            <DataFatcher url='https://swapi.co/api/people/1'>
                {(data, loading) => {
                    return (
                        loading ?
                        <h1>Loading...</h1> :
                        <p>{JSON.stringify(data)}</p>
                    )
                }}

            </DataFatcher>
        </div>
    )

}
export default App