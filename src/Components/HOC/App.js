import React from 'react'
import {withPointlessHOC} from './withPointlessHOC'
function App () {
    return (
        <div>Hello World</div>
    )
}

const PointlessHOC = withPointlessHOC(App)
export default PointlessHOC