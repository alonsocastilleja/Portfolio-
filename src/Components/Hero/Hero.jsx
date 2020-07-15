import React from 'react';
import Header from '../Header/Header'
import '../Hero/hero.css'
import Sidebar from '../Utilities/Sidebar';
import Arrow from '../Utilities/Arrows/Arrows';

const Hero = (props) => {
    console.log(props)
        return (
            <div>
                <main className="hero">
                    <Header />

                    <div className="hero__text"> 
                        <h1 className="hero__name-hello">Hello, my name is</h1>
                        <h2 className="hero__name">Alonso <span className="span__underline-text">Castilleja</span><span className="span__style-red">.</span></h2>
                        <p className="hero__subtitle"><span className="char__font">&#60;</span>  Software Developer <span className="char__font"> /&#62; </span></p>
                        <button className="hero__btn"><a href="/resume.pdf" target="_blank">Resume</a></button>
                    </div>
                    <Sidebar />
                    <Arrow down={props.down} arrow={props.arrow} />
                </main>
            </div>
        );
    }
export default Hero;