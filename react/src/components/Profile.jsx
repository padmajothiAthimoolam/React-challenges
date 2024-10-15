import React, { useState } from 'react'

const Profile = () => {
    const [userProfile, setUserProfile] = useState({ name:"", age:""})

    const handleChange = e => {
        const { name, value} = e.target;
        setUserProfile((prevUserProfile) => ({
            ...prevUserProfile,
            [name]: value,
       }))
    }
  return (
    <div>
        <h1>User Information</h1>
        <div>
            <label> Name:
            <input type="text" name="name" placeholder='Enter name' value={userProfile.name} onChange={handleChange} />
            </label>  
        </div>
        <div>
            <label> Age:
            <input type="text" name="age" placeholder='Enter age' value={userProfile.age} onChange={handleChange} />
            </label>    
        </div>
        <h3>Profile Information</h3>
            <p> Name: {userProfile.name}</p>
            <p> Age: {userProfile.age}</p>
    
    </div>
  )
}

export default Profile
