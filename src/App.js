import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About'
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

function App() {
  const scrollIntoThisDiv = (id) => {
    const divToScrollInto = document.getElementById(`${id}`);
    divToScrollInto.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="App">
      <Hero scrollIntoThisDiv={scrollIntoThisDiv}/>
      <About scrollIntoThisDiv={scrollIntoThisDiv}/>
      <Skills />
      <Projects />      
      <Contact />
    </div>
  );
}

export default App;
