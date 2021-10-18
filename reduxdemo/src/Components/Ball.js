import React,{useState} from 'react'
import { connect } from 'react-redux'
import { buyBall } from '../redux/ballActions'

function Ball({balls,buyBall,sellBall}) {
    const [qty,setQty]= useState(1)
    console.log("Ball rerendered")
    return (
        <div>
            <h1>Balls : {balls}</h1>
            <input type="number" value={qty} onChange={(e)=>setQty(e.target.value)}/>
            <button onClick={()=> buyBall(qty)}>Buy</button>
            <button onClick={sellBall}>Sell</button>
        </div>
    )
}

const mapStateToProps= (state) =>{
    return{
        balls : state.ball.balls
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        buyBall : (qty)=> dispatch(buyBall(qty)),
        sellBall : ()=>dispatch({type:'SELL_BALL'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Ball)
