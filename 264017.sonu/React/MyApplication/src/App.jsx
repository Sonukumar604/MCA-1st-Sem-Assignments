
import { ThemeContext } from './Context';
import Child from './component/Child.jsx';
import { useState } from 'react';

const App = () => {
  const[theme, setTheme] = useState("dark");

  return (
    <>
    <ThemeContext.Provider value={{theme,setTheme}}>
      <Child/>
    </ThemeContext.Provider>
    </>
    
  )
}

export default App
