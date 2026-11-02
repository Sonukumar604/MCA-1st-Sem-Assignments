


import Child from './component/Child.jsx';
import { useState } from 'react';
import { HeaderContextAPI } from './component/ContextAPI/HeaderContextAPI.jsx';

const App = () => {
  const[theme, setTheme] = useState("dark");

  return (
    <>
    <HeaderContextAPI.Provider value={{theme,setTheme}}>
      <Child/>
    </HeaderContextAPI.Provider>
    </>
  )
}

export default App
