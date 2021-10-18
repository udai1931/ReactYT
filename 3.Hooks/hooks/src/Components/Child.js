import React from 'react'

function Child() {
    console.log("child called");
    return (
        <div>
            Child component
        </div>
    )
}

export default React.memo(Child)
