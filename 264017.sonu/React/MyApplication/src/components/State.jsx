import React, { useState } from 'react'

const State = () => {
    //let name="Sweta"
    const[name, setname] = useState("khushi");
    let changename=()=>{
        setname("Supriya")
    }
  return (
    <>
        <h1>{name}</h1>
        <button onClick={changename}>{name=="khushi"?"changeName":"nameChanged"}</button>
      
    </>
  )
}

export default State
