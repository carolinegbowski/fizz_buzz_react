import React from 'react';
import './App.css';
import FizzBuzz from './components/FizzBuzz'
import Router from './components/Router'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header/>
      <Router/>
      <h1>F I Z Z B U Z Z</h1>
      <FizzBuzz/>
    </div>
  );
}

export default App;
