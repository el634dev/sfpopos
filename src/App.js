import React from 'react';
import './App.css';
// Import title
// App component
import Title from './Title/Title.js';
// Import POPOSList
import POPOSList from './POPOSList/POPOSList.js';
// Import footer
import Footer from './Footer/Footer.js';

function App() {
  return (
   <div className='App'>
      <Title />
      <POPOSList />
      <Footer />
   </div>
  );
}

export default App;
