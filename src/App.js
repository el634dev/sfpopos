import React from 'react';
import logo from './logo.svg';
import './App.css';
// Import title
import Title from './Title.js';

function App() {
  return (
   <div className='App'>
      <Title />
      <img src={logo} alt=''/>
   </div>
  );
}

export default App;
