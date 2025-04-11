import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/home';
import Tienda from './components/tienda/tienda';
import Navbar from './components/navbar/navbar';
import CultureLeon from './components/culturaLeon/culturaleon';
import Miticos from './components/Miticos/Miticos';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path='/culture' element={<CultureLeon />} />
        <Route path='/mythical' element={<Miticos />}/>
      </Routes>
    </Router>
  );
}

export default App
