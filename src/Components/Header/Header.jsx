import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
    
    render() {
        return (
            <div>
               <section className="header">
                   <ul className="navbar hidden">
                        <a href={'/'} className="navbar__links"><li className="link__active">Home</li></a>
                        <a href={'/'} className="navbar__links"><li>Projects</li></a>
                        <a href={'/'} className="navbar__links"><li>Skills</li></a>
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