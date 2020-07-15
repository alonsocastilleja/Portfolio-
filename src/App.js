import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Hero from './Components/Hero/Hero';
import About from './Components/About/About'
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      about: "about",
      skills: "skills",
      projects: "projects",
      contact: "contact",
      hero: "hero",
      down: "icons/down-arrow.svg",
      up: "icons/up-arrow.svg",
    }
  }

  render() {
    // Initialize AOS 
    AOS.init();

    return (
      <div className="App">
        <Hero down={this.state.about} arrow={this.state.down}/>
        <About down={this.state.skills} arrow={this.state.down}/>
        <Skills down={this.state.projects} arrow={this.state.down}/>
        <Projects down={this.state.contact} arrow={this.state.down}/>      
        <Contact up={this.state.hero} arrow={this.state.up} />
      </div>
  );
  }
  
}

export default App;
