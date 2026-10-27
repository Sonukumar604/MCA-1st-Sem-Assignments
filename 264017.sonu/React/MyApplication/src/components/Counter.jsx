import React, { useState } from 'react';
import './Counter.css';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h2>React Counter App</h2>
      <div className="counter-display">{count}
        
      </div>
      <div className="counter-buttons">
        <button onClick={() => setCount(count - 1)}>-</button>

        <button onClick={() => setCount(0)}>Reset</button>
        <button 
        onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}