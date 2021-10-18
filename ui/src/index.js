import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import {createStore,applyMiddleware} from 'redux'
import rootReducer from './redux/reducers/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension'
import { Provider } from 'react-redux';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBMaW34uo1zaUMIeT0wdORiO-8D21bur6o",
  authDomain: "resume-yt-9e26e.firebaseapp.com",
  projectId: "resume-yt-9e26e",
  storageBucket: "resume-yt-9e26e.appspot.com",
  messagingSenderId: "1070979660486",
  appId: "1:1070979660486:web:969255fdd64ff32b6a35c7"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore()

const reduxStore = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),reduxFirestore(firebase)))  //binding for redux to get firestore

ReactDOM.render(
  <Provider store={reduxStore}>
    <BrowserRouter>
      <ReactReduxFirebaseProvider
        firebase={firebase}
        config={firebaseConfig}
        dispatch={reduxStore.dispatch}
        createFirestoreInstance={createFirestoreInstance}>
        <App />
      </ReactReduxFirebaseProvider>
    </BrowserRouter>
  </Provider>
,
  document.getElementById('root')
); 