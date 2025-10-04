import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Hero from './components/Hero'
import About from './components/About'
import Creative from './components/Creative'
import Research from './components/Research'
import CreativePage from './pages/Creative';
import MainPage from './pages/MainPage';

import NavBar from './components/Home'
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/creative" element={<CreativePage />} />
      </Routes>
    </div>
  );
}

export default App
