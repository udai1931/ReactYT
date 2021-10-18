import React,{useState,useEffect} from 'react'
import { auth } from '../firebase';

export const AuthContext = React.createContext();
export function AuthProvider({children}){
    const [user,setUser] = useState();
    const [loading,setLoading] = useState(true)

    function signup(email,password){
        return auth.createUserWithEmailAndPassword(email,password);
    }

    function login(email,password){
        return auth.signInWithEmailAndPassword(email,password);
    }

    function logout(){
        return auth.signOut()
    }

    useEffect(()=>{
        const unsub = auth.onAuthStateChanged((user)=>{
            setUser(user);
            setLoading(false);
        })
        return ()=>{
            unsub();
        }
    },[])

    const store={
        user,
        signup,
        login,
        logout
    }

    return(
        <AuthContext.Provider value={store}>
            {!loading && children}
        </AuthContext.Provider>
    )
}