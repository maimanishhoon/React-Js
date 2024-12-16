import React, {useContext } from 'react'
import UserContext from '../../Context/Usercontext'


function Profile() {
   const {user} = useContext(UserContext)
    if(!user) return (<div>
        <h3>Please Login</h3>
    </div>)

    return <div>
        <h3>Welcome Brother</h3>
        <h2>This is your Username : {user.username} </h2>
        <h3>shhhh! This is your Password : {user.password} </h3>
        <h2>Here's Your Key: {user.key}</h2>
    </div>; 
        
}

export default Profile