import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { userActions } from '../features/user/actions'



export default function Profil() {
    const deleteToken=()=>{localStorage.removeItem("token")}
    const token=localStorage.getItem("token")
    const user = useSelector(state => state.Users.users)
    console.log(user)
    
    
    return (
        <div>
           <h1> jawak behi profilak</h1>  

           <h2> {user.name}</h2>
            <Link to="/auth"> <button onClick={deleteToken}> Logout</button></Link>
        </div>
    )
}
