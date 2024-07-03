import React from 'react';
import MainPage from './pages/MainPage';
import CommunityPage from './pages/CommunityPage';
import { BrowserRouter, Route, Routes, Link, Router } from 'react-router-dom';
import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className='App'>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/community" element={<CommunityPage/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
