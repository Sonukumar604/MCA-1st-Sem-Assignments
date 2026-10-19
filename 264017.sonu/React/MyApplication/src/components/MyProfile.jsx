import React from 'react'

const MyProfile = (props) => {
    console.log(props)
  return (
    <div>
      <h1>My profile</h1>
      <h1>Name:{props.name}</h1>
      <h1>Class: {props.class}</h1>
      <h1>College: {props.College}</h1>
    </div>
  )
}

export default MyProfile
