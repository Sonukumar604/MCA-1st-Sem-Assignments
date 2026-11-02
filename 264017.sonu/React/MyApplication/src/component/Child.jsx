import { useContext } from "react"
import { ThemeContext } from "../Context"


const Child = () => {
    const {theme,setTheme}=useContext(ThemeContext)
    function handleTheme(){
        setTheme(theme==="dark"?"light":"dark")
    }
  return (
    
    <div>
      <h1>color theme : {theme}</h1>
      <button onClick={handleTheme}>changeTheme</button>
    </div>
  )
}

export default Child
