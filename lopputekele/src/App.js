import React from 'react';
import Menu from './Valikko';
import Linet from './Lista'

function App() {
  return (
    <div className="bg-gradient-to-b from-pink-400 to-blue-800 h-screen"  style={{ textAlign: 'center' }}>
      
      <Menu />

      <Linet />

    </div>
  );
}

export default App;
