import React from 'react';
import '../About/about.css';
import Arrow from '../Utilities/Arrows/Arrows';


const About = (props) => {
        return (
            <div>
                <section className="about">
                    <article className="about__text">
                        <h2 className="about__heading"><span className="char__font">&#60;</span> About Me <span className="char__font"> /&#62; </span></h2>
                        <p className="about__description">Hello, I am a hard working and passionate <span data-aos="fade-up" data-aos-delay="1300" data-aos-transition="2000" className="char__font-about">software developer.</span> I enjoy the process of being 
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
                        <img data-aos="fade-left" 
                            data-aos-delay="250"
                            data-aos-duration="2000"
                            className="about__text"
                            src="alonso_me.png"
                            alt="Beginning of the program"></img>
                    </figure>
                    <Arrow down={props.down} arrow={props.arrow} />
                </section>
            </div>
        );
    }

export default About;