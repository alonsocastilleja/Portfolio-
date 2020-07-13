import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About'
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Skills />
      <Projects />      
      <Contact />
    </div>
  );
}

export default App;
