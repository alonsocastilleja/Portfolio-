import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Skills />      
      <Projects />
    </div>
  );
}

export default App;
