import React from 'react';
import './App.css';
import KillerList from './components/KillerList';
import Header from './components/Header'

const App = () => {
  return (
    <div className="App">
      <KillerList />
      <Header />
    </div>
  );
}

export default App;
