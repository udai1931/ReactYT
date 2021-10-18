import React from 'react'

function Child(props) {
    console.log("child render")
    return (
        <div>
            {props.count}
        </div>
    )
}

export default React.memo(Child)
