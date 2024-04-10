import React from 'react';
import { Outlet } from 'react-router-dom';
// App component
import './App.css';
// Import title
import Title from '../Title/Title.js';
// Import footer
import Footer from '../Footer/Footer.js';

function App() {
  return (
   <div className='App'>
      <div className='App-content'>
        <Title />
        <Outlet />
      </div>
      <Footer />
   </div>
  );
}

export default App;
