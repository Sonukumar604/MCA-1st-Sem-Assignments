

import Login from './component/Login.jsx';

import { useState } from 'react';
import {  LoginContextAPI } from './component/ContextAPI/HeaderContextAPI.jsx';

const App = () => {
  
const [login, setLogin] = useState(false);
  return (
    <>
    {/* <HeaderContextAPI.Provider value={{theme,setTheme}}>
      <Child/>
    </HeaderContextAPI.Provider> */}
    <LoginContextAPI.Provider value={{login,setLogin}}>
      <Login/>
    </LoginContextAPI.Provider>

    </>
  )
}

export default App
