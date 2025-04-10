import Intro from "../components/introduction/intro";
import Map from "../components/mapa/map";
import Locales from "../components/locales/locales";
import Cultura from "../components/cultura/cultura";
import Places from "../components/places/places";
import Chatbot from "../components/chatbot/chatbot";
import React from 'react';


function Home() {
  return (
    <div>
      <Intro/>
      <Map/>
      <Locales/>
      <Cultura/>
      <Places/>
      <Chatbot/>
    </div>
  );
}

export default Home;