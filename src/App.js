import React from 'react';
import './App.css';
import KillerList from './components/KillerList';
import Header from './components/Header'

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="killerContainer">
      <KillerList />
      </div>

    </div>
  );
}

export default App;
