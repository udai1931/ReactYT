import axios from 'axios'
import * as actionTypes from './action'

const fetchReq=()=>{
    return {
        type:actionTypes.FETCH_REQ
    }
}

const fetchSuc = (users) => {
    return{
        type:actionTypes.FETCH_SUC,
        payload:users
    }
}

const fetchFail = (err) => {
    return{
        type:actionTypes.FETCH_FAIL,
        payload:err.message
    }
}

export const fetchUserss = () => {
    //thunk middleware
    return async(dispatch)=>{
        dispatch(fetchReq())
        try{
            let res = await axios.get('https://jsonplaceholder.typicode.com/users');
            let data = res.data
            dispatch(fetchSuc(data))
        }
        catch(err){
            dispatch(fetchFail(err))
        }
    }
}