import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/home';
import Tienda from './components/tienda/tienda';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/tienda" element={<Tienda />} />
      </Routes>
    </Router>
  );
}

export default App
