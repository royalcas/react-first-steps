import React from 'react';
import './App.css';
import { Index } from './pages/Index';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Health App</h1>
      </header>
      <main>
        <Index />
      </main>
    </div>
  );
}

export default App;
