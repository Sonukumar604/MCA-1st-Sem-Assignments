import React from 'react'

const MyProfile = (props) => {
    console.log(props)
  return (
    <div>
      <h1>My profile</h1>
      <h1>Name:{props.studentDetails.name}</h1>
      <h1>Class: {props.studentDetails.class}</h1>
      <h1>College: {props.studentDetails.college}</h1>
      <h2>My Subjects:</h2>
      
      {props.skills.map((subjects,index)=>(
        <h3 key={index}>{subjects}</h3>
      ))}
    </div>
  )
}

export default MyProfile;
