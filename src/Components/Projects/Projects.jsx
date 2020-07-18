import React from 'react';
import Arrow from '../Utilities/Arrows/Arrows';
import projects from '../data/projects.json';
import '../Projects/Projects.css';


const Projects = (props) => {
    return (
        <div>
            <section className="projects">
                        <div className="projects__heading">
                            <h2 className="projects__heading-font"><span className="char__font">[</span> Projects <span className="char__font">]</span></h2>
                        </div>
                    <div className="projects__content">
                        <div className="projects__card">
                            <img src={projects[0].icon} 
                                alt={projects[0].title}
                                height={'100%'}
                                width={'100%'}></img>
                            <h2 className="projects__subheading">{projects[0].title}</h2>
                            <button className="projects__btn"><a href={projects[0].link} rel='noopener noreferrer' target="_blank">Live Demo</a></button>
                            <button className="projects__btn"><a href={projects[0].github} rel='noopener noreferrer' target="_blank">Github</a></button>
                        </div>
                        <div className="projects__card">
                            <img src={projects[1].icon} 
                                alt={projects[1].title}
                                height={'100%'}
                                width={'100%'}></img>
                            <h2 className="projects__subheading">{projects[1].title}</h2>
                            <button className="projects__btn"><a href={projects[1].link} rel='noopener noreferrer' target="_blank">Live Demo</a></button>
                            <button className="projects__btn"><a href={projects[1].github} rel='noopener noreferrer' target="_blank">Github</a></button>
                        </div>
                        <div className="projects__card">
                            <img src={projects[2].icon} 
                                alt={projects[2].title}
                                height={'100%'}
                                width={'100%'}></img>
                              <h2 className="projects__subheading">{projects[2].title}</h2>
                            <button className="projects__btn"><a href={projects[2].link} rel='noopener noreferrer' target="_blank">Live Demo</a></button>
                            <button className="projects__btn"><a href={projects[2].github} rel='noopener noreferrer' target="_blank">Github</a></button>
                        </div>
                    </div>
                   
                    <Arrow down={props.down} arrow={props.arrow} />
            </section>
        </div>
    )
}
export default Projects;