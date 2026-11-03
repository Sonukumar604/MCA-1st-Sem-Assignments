import  { useContext } from 'react'
import { LoginContextAPI } from './ContextAPI/LoginContextAPI'

const Login = () => {
  const{login, setLogin} = useContext(LoginContextAPI);
  function handlelogin(){
    setLogin(login===false?true:false)
  }
  return (
    <div>
      <h1>Login:{login}</h1>
      {login?<h1>Welcome user</h1>:<h1>Try again</h1>}
      <button onClick={handlelogin}>
        {login ? "Logout" : "login"}
      </button>
      
    </div>
  )
}

export default Login
