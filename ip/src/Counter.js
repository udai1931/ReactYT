import React, { useState,useReducer } from 'react'

const initialState = {
    count:0 
}

const reducer = (state,action) => {
    switch(action.type){
        case 'Inc' : 
            return {count:state.count+1}
        case 'Dec' :
            return {count:state.count-1}
    }
}

function Counter() {
    // const [count,setCount] = useState(0)
    const [state,dispatch] = useReducer(reducer,initialState)
    return (
        <div>
            {state.count}
            <button onClick={()=>dispatch({type:'Inc'})}>+</button>
            <button onClick={()=>dispatch({type:'Dec'})}>-</button>
        </div>
    )
}

export default Counter
