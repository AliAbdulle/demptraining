import React from 'react'
import {withPointlessHOC} from './withPointlessHOC'
import {withExtraPropAdded } from './withExtraPropAdded'
function App () {
    return (
        <div>Hello World</div>
    )
}

const PointlessHOC = withExtraPropAdded(App)
export default PointlessHOC