import initialState from './initialState.json'
import * as contactActions from '../actions/actions'

const contactReducer = (state=initialState.contact,action) => {
    switch(action.type){
        case contactActions.SET_CONTACT : 
            return {...action.pay}
        case contactActions.UPDATE_CONTACT : 
            return {...action.payload}
        default : return state 
    }
}

export default contactReducer;