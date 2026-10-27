import React from 'react';
import Counter from './counter';
import './App.css';

function Header() {
  return (
    <header className="header">
      <h1>Counter Application</h1>
    </header>
  );
}

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <Counter />
    </div>
  );
}