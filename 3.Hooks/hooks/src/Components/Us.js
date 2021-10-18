import React,{useState} from 'react'

function Us() {
    const [count,setCount] = useState(0);
    const [obj,setObj] = useState({msg:'hello'})
    return (
        <div>
            <h1>Current Count {count}</h1>
            <button onClick={()=>setCount(count+1)}>+1</button>
            <h2>{obj.msg}</h2>
            
        </div>
    )
}

export default Us
