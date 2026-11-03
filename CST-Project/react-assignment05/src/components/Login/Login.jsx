import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate()
    function handleLogin(){
        navigate('/')
    }
  return (
    <div>
      <h5>Login and Signup Page</h5>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
