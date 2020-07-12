import React, { Component } from 'react';
import '../Hero/hero.css'

class Sidebar extends Component {
    render() {
        return (
            <div>
                   <div className="social-media">
                        <ul className="social-media__links">
                            <a href={'/'}><i class="fa fa-envelope"></i></a>
                            <a href={'/'}><i class="fa fa-codepen"></i></a>
                            <a href={'/'}><i class="fa fa-github"></i></a>
                            <a href={'/'}><i class="fa fa-linkedin"></i></a>
                        </ul>
                    </div>
            </div>
        );
    }
}

export default Sidebar;