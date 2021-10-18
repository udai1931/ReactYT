import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { fetchUserss } from '../redux/userActions';
import { connect } from 'react-redux';

function User({userData,fetchUsers}) {
    // const [loading,setLoading] = useState(true);
    // const [error,setError] = useState('')
    // const [users,setUsers] = useState([])
    console.log("User rerendered")
    useEffect(()=>{
        fetchUsers();
    },[])

    return (
        <>
            {
                userData.loading?<h1>Loading....</h1>:userData.error!=''?<h1>{userData.error}</h1>:
                <ul>
                    {
                        userData.users.length>0 && userData.users.map((user)=>(
                            <li>{user.name}</li>
                        ))
                    }
                </ul>
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return{
    userData : state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchUsers : ()=>dispatch(fetchUserss())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(User)
