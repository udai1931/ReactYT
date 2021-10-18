import React,{useContext} from 'react'
import context from './Context'

function Navbar() {
    const {theme} = useContext(context);
    console.log("Navbar called");
    return (
        <div className={theme?"dark":"light"}>
            Navbar
        </div>
    )
}

export default Navbar
