import React,{useState} from 'react'
import { connect,useSelector,useDispatch } from 'react-redux'

function Bat(props) {
    // const [bat,setBat] = useState(20) //local to the component
    // console.log(props.bats)
    const bats = useSelector(state=>state.bat.bats)
    const dispatch = useDispatch();
    console.log("bat rerendered")
    return (
        <div>
            <h1>Bats : {bats}</h1>
            {/* <button onClick={()=>setBat(bat-1)}>Buy Bat</button> */}
            <button onClick={()=>dispatch({type:"BUY_BAT"})}>Buy Bat</button>
        </div>
    )
}

// const mapStateToProps = (state) => { //
//     return{
//         batss : state.bat.bats
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return{
//         buyBat : ()=>dispatch({type:"BUY_BAT"})
//     }
// }

export default (Bat)