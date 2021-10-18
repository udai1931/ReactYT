import React from 'react'
import HOC from './HOC'

function Button(props) {
    return (
        <div style={props.style}>
            Hello...
        </div>
    )
}

export default HOC(Button);
