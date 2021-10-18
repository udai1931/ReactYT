import React,{useState,useEffect} from 'react'

function Infinite() {
    const [count,setCount] = useState(0);

    useEffect(()=>{
        console.log("useEffect");
        document.title = `Button clicked ${count} times`;
        // setCount(100);
        // let num = Math.random()*100;
        // setCount(num)
        //Side effects wala work 
    })
    
    console.log('render')
    return (
        <div>
            <h1>Current Count {count}</h1>
            <button onClick={()=>setCount(count+1)}>+1</button>

        </div>
    )
}

export default Infinite
