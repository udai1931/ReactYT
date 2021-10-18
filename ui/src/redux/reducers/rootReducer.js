import {combineReducers} from 'redux'
import documentReducer from './documentReducer'
import contactReducer from './contactReducer'
import educationReducer from './educationReducer'
import authReducer from './authReducer'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    document : documentReducer,
    contact : contactReducer,
    education : educationReducer,
    firebase : firebaseReducer, 
    firestore : firestoreReducer,
    auth : authReducer
})

export default rootReducer