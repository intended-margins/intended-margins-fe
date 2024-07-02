import React from 'react';
import MainPage from './pages/MainPage';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
