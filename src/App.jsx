import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Map from './components/mapa/map';
import Location from './components/locations/location';
import Intro from './components/introduction/intro';
import Locales from './components/locales/locales';
import Cultura from './components/cultura/cultura';
import Places from './components/places/places';
import Chatbot from './components/chatbot/chatbot';

function App() {
  return (
    <div>
      <Navbar />
      <Intro/>
      <Map/>
      <Location/>
      <Locales/>
      <Cultura/>
      <Places/>
      <Chatbot/>
    </div>
  );
}

export default App
