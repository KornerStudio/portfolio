import React from 'react';
import Skills from "../components/skills/Skills.jsx"
import Experience from "../components/experience/Experience"
import Contact from "../components/contact/contact"
import Header from "../components/Header/Header"

const Home = () => {
  return (
    <div >
      <Header/>
      <Skills/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default Home;
