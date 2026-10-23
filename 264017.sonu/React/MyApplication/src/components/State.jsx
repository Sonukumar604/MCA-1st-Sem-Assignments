import React, { useState } from 'react'

const State = () => {
    //let name="Sweta"
    const[name, setname] = useState("khushi");
    let changename=()=>{
        setname("khushi")
    }
  return (
    <div>
        <h1>{name}</h1>
        
      
    </div>
  )
}

export default State
