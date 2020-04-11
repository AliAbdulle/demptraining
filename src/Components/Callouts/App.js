import React from 'react'
import infoCallout from './InfoCallout'
import ImagCallout from './ImageCallout'
import EmailCallout from './EmailCallout'

function App(){
    return (
        <main>
            <h1>Welcome!</h1>
            <infoCallout />
            <ImagCallout />
            <EmailCallout />
        </main>
    )
}