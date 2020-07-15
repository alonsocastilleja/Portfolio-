import React, { Component } from 'react';
import { Link } from "react-scroll";
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div>
               <section className="header">
                   <ul className="navbar hidden">
                        <Link to="hero" 
                              smooth={true}
                              spy={true}
                              className="navbar__links"><li className="link__active">Home</li></Link>
                        <Link to="projects" 
                              smooth={true}
                              spy={true}
                              className="navbar__links"><li className="link__active">Projects</li></Link>
                        <Link to="skills" 
                              smooth={true}
                              spy={true}
                              className="navbar__links"><li className="link__active">Skills</li></Link>
                       <Link to="contact" 
                              smooth={true}
                              spy={true}
                              className="navbar__links"><li className="link__active">Contact</li></Link>
                   </ul>

                   <div className="hamburger">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
               </section>
            </div>
        );
    }
}

export default Header;