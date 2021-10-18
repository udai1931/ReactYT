import React,{useState,useEffect} from 'react'

function Ue3() {
    const [count,setCount] = useState(0);
    const [txt,setText] = useState({msg:''})

    useEffect(()=>{
        console.log("useEffect");
        document.title = `Button clicked ${count} times`;
        //Side effects wala work 
    },[count])

    let changeText=(e)=>{
        txt.msg=e.target.value;
        console.log(txt)
        setText({...txt})
    }

    console.log('render')
    return (
        <div>
            <h1>Current Count {count}</h1>
            <button onClick={()=>setCount(count+1)}>+1</button>
            <input type="text" value={txt.msg} onChange={(e)=>changeText(e)}/>
        </div>
    )
}

export default Ue3
