import React, { Component } from 'react';
import './skills.css';
import 'font-awesome/css/font-awesome.min.css';
import Sidebar from '../Utilities/Sidebar';
import skills from '../data/skills.json'

class Skills extends Component {
    render() {
        return (
            <div>
                <section className="skills">
                    <div className="skills__content">
                        <div className="skills__heading">
                            <h2 className="skills__heading-font"><span className="char__font">[</span> Skills <span className="char__font">]</span></h2>
                        </div>
                        <div className="skills__icons">
                            {
                                skills.map((skill) => {
                                    return (
                                        <div 
                                            className="skills__icon-square">
                                            <img 
                                                src={skill.icon} 
                                                height="60%"
                                                width="60%"
                                                alt="hwovjnwai"></img>
                                                <p className="skills__title">{skill.title}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <Sidebar />
                </section>
            </div>
        );
    }
}

export default Skills;