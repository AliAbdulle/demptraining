import React from 'react'
import infoCallout from './InfoCallout'
import ImagCallout from './ImageCallout'
import EmailCallout from './EmailCallout'

function App(){
    return (
        <main>
            <h1>Welcome!</h1>
            <infoCallout />
            <ImagCallout 
                img={"https://picsum.photos/id/102/4320/3240"}
                caption="Just look at those sparkling raspberries!"
            />
            <EmailCallout
                 header="Give us your email. We definitely won't sell it to anyone." 
                 btnText="Sign me up!" 
             />
        </main>
    )
}