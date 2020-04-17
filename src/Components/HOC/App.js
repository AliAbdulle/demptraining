import React from 'react'
import {withPointlessHOC} from './Menu'
import {withExtraPropAdded } from './Favorite'
function App () {
    return (
        <div>Hello World</div>
    )
}

const PointlessHOC = withExtraPropAdded(App)
export default PointlessHOC