import React, { Component } from 'react';
import './sidebar.css'

class Sidebar extends Component {
    render() {
        return (
            <div>
                   <div className="social-media">
                        <ul className="social-media__links">
                            <a href="mailTo:castilleja.alonso@gmail.com"><i className="fa fa-envelope"></i></a>
                            <a href={'/'}><i className="fa fa-codepen"></i></a>
                            <a href={'https://github.com/alonsocastilleja'} rel="noopener noreferrer" target="_blank"><i className="fa fa-github"></i></a>
                            <a href={'https://www.linkedin.com/in/alonso-castilleja-nino-aa3924137/'} rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin"></i></a>
                        </ul>
                    </div>
            </div>
        );
    }
}

export default Sidebar;