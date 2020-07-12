import React, { Component } from 'react';
import Header from '../Header/Header'
import '../Hero/hero.css'
import Sidebar from '../Utilities/Sidebar';

class Hero extends Component {


    render() {
        return (
            <div>
                <main className="hero">
                    <Header />

                    <div className="hero__text"> 
                        <h1 className="hero__name-hello">Hello, my name is</h1>
                        <h2 className="hero__name">Alonso <span className="span__underline-red">Castilleja</span><span className="span__style-red">.</span></h2>
                        <p className="hero__subtitle"><span className="char__font">&#60;</span>  Software Developer <span className="char__font"> /&#62; </span></p>
                        
                        <div className="hero__photo">
                            <img src="alonso_me.jpg" 
                                alt="Alonso Castilleja"
                                width='200px'
                                height='200px'
                            ></img>
                            <div className="hero__contact">
                                <h2>Contact me?</h2>
                            </div>
                        </div> 
                    </div>
                    
                    <Sidebar />
    
                    <div class="arrow">
                        <span></span>
                    </div>
                </main>
            </div>
        );
    }
}

export default Hero;