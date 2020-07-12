import React, { Component } from 'react';
import '../About/about.css'
import Sidebar from '../Utilities/Sidebar';


class About extends Component {
    render() { 
        return (
            <div>
                <section className="about">
                    <div className="about__left">
                    </div> 
                    <article className="about__text">
                        <h2 className="about__heading"><span className="char__font">&#60;</span><span className="span__underline-red"> About Me</span><span className="char__font"> /&#62; </span></h2>
                        <p>Hello I am a hard working and passionate software developer </p>
                    </article>
                    <Sidebar />
                </section>

                <div class="arrow">
                        <span></span>
                </div>
            </div>
        );
    }
}
 
export default About;