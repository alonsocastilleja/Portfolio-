import React, { Component } from 'react';
import './sidebar.css'

class Sidebar extends Component {
    render() {
        return (
            <div>
                   <aside className="social-media">
                        <ul className="social-media__links">
                            <a aria-label="email" alt="email icon" href="mailTo:castilleja.alonso@gmail.com"><i className="fa fa-envelope"></i></a>
                            <a aria-label="codepen" alt="codepen icon" href={'https://codepen.io/ACasNin'} rel='noopener noreferrer' target="_blank"><i className="fa fa-codepen"></i></a>
                            <a aria-label="github" alt="github icon" href={'https://github.com/alonsocastilleja'} rel="noopener noreferrer" target="_blank"><i className="fa fa-github"></i></a>
                            <a aria-label="linkedin" alt="linkedin icon" href={'https://www.linkedin.com/in/alonso-castilleja-nino-aa3924137/'} rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin"></i></a>
                        </ul>
                    </aside>
            </div>
        );
    }
}

export default Sidebar;