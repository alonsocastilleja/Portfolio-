import React from 'react';
import Header from '../Header/Header';
import '../Hero/hero.css';
import Sidebar from '../Utilities/Sidebar';
import Arrow from '../Utilities/Arrows/Arrows';

const Hero = (props) => {
        return (
            <div>
                <main className="hero">
                    <Header />

                    <article className="hero__text"> 
                        <h1 className="hero__name-hello">Hello, my name is</h1>
                        <h2 className="hero__name">Alonso <u className="span__underline-text">Castilleja</u><span className="span__style-red">.</span></h2>
                        <p className="hero__subtitle"><span className="char__font">&#60;</span>  Software Developer <span className="char__font"> &#62; </span></p>
                        <button className="hero__btn"><a href="/resume.pdf" target="_blank">Resume</a></button>
                    </article>
                    <Sidebar />
                    <Arrow down={props.down} arrow={props.arrow} />
                </main>
            </div>
        );
    }
export default Hero;