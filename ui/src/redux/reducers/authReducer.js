import initialState from './initialState.json';
import * as authActions from '../actions/actions';

const authReducer = (state=initialState.auth,action) => {
    switch(action.type){
        case authActions.SIGN_IN_REQUEST : 
            return {...state,loading:true}
        case authActions.SIGN_IN_SUCCESS : 
            return {...state,loading:false}
        case authActions.SIGN_OUT_FAILED : 
            return {...state,loading:false,error:action.error.message}
        case authActions.REGISTER_REQUEST : 
            return {...state,loading:true}
        case authActions.REGISTER_SUCCESS :
            return {...state,loading:false}
        case authActions.REGISTER_FAILED :
            return {...state,loading:false,error:action.error.message}
        case authActions.REMOVE_ERROR : 
            return {...state,error:''}
        default : return state
    }
}

export default authReducer