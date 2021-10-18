import React, { useState,useMemo,useCallback } from 'react'
import Child from './Child';

function Parent() {
    const [count,setCount] = useState(0);
    const [text,setText] = useState('Hello');
    const person = {
        name : "Udai",
        city : "delhi"
    }
    const memoizedObj = useMemo(()=>person,[])
    function fn(){
        console.log("hhi");
    }
    const memoizedfn = useCallback(()=>fn,[])

    console.log("parent render")
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Change count</button>
            <button onClick={()=>setText(text+'..')}>Change Text</button>
            <Child count={count} fn={memoizedfn}/>
        </div>
    )
}

export default Parent
