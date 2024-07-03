import React from 'react';
import MainPage from './pages/MainPage';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';

import Home from './components/Home';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Home/>
    </div>
  );
};

export default App;
