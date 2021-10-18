import React,{useContext} from 'react'
import Child from './Child'
import context from './Context'

function Parent1() {
    const state = useContext(context)
    console.log(state)
    console.log("Parent1 called");
    return (
        <div className={state.theme?"dark":"light"}>
            Parent1
            <Child/>
        </div>
    )
}

export default Parent1
