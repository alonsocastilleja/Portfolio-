import React from 'react';
import './skills.css';
import skills from '../data/skills.json'
import Arrow from '../Utilities/Arrows/Arrows';

const Skills = (props) => {
        return (
            <div>
                <section className="skills">
                    <div className="skills__content">
                        <div className="skills__heading">
                            <h2 className="skills__heading-font"><span className="char__font">[</span> Skills <span className="char__font">]</span></h2>
                        </div>
                        <div className="skills__icons">
                            {
                                skills.map((skill, i) => {
                                    return (
                                        <div 
                                            key={i}
                                            className="skills__icon-square"
                                            data-aos="fade-up"
                                            data-aos-delay="250"
                                            data-aos-duration="1000">
                                            <img 
                                                src={skill.icon}
                                                alt="hwovjnwai"></img>
                                                <p className="skills__title">{skill.title}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <Arrow down={props.down} arrow={props.arrow} />
                </section>
            </div>
        );
    }

export default Skills;