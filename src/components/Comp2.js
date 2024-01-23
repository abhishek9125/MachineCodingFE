import React, { forwardRef } from 'react'
import withDimensions from '../hoc/WithDimensions'

function Comp2(props, ref) {
    return (
        <div ref={ref} className="comp2">
            I am Comp2 Component {props.width}
        </div>
    )
}

export default withDimensions(forwardRef(Comp2))
