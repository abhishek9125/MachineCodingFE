import React, { forwardRef } from 'react'
import withDimensions from '../hoc/WithDimensions'

function Comp1(props, ref) {
    return (
        <div ref={ref} className="comp1">
            I am Comp1 Component {props.width}
        </div>
    )
}

export default withDimensions(forwardRef(Comp1))
