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
                        <p className="about__description">Hello, I am a hard working and passionate <span className="span__underline-red">software developer.</span> I enjoy the process of being 
                        stuck on a problem and using Google to solve it. I enjoy seeing my ideas and thoughts come to life through the use of different technologies.
                        I am looking forward to learning more technologies and languages for the span of 
                        my career!
                        </p>
                        <div className="about__quote">
                            <p>"Greatness exists in all of us"</p>
                            <p>- Will Smith</p>
                        </div>
                    </article>
                    <figure className="about__photo">
                        <img src="alonso_me.jpg" 
                             alt="Alonso Castilleja is awesome!"
                             height="300px"
                             width="300px"
                             ></img>
                        <button className="about__btn"><a href="assets/resume.pdf" target="_blank">Resume</a></button>
                    </figure>

                    <Sidebar /> 
                    <div class="arrow">
                        <span></span>
                    </div>
                </section>
            </div>
        );
    }
}
 
export default About;