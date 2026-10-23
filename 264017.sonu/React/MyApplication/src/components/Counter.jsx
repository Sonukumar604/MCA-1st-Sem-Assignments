import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0);
    const increment =()=>{
        
    }
  return (
    <div>
      <h1>counter:{count}</h1>
      <button>count+1</button>
      <button>count-1</button>
    </div>
  )
}

export default Counter
