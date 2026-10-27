import React, { useState } from 'react';
import './counter.css';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-card">
      <h2>{count}</h2>
      
      <p className="message">
        {count > 0 
          ? "Counter is Positive" 
          : count < 0 
            ? "Counter is Negative" 
            : "Counter is Zero"}
      </p>

      <div className="btn-group">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}