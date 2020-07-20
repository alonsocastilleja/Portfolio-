import React from 'react';
import Arrow from '../Utilities/Arrows/Arrows';
import projects from '../data/projects.json';
import Carousel from 'react-elastic-carousel'
import '../Projects/Projects.css';


const Projects = (props) => {
    return (
        <div>
            <section className="projects">
                        <div className="projects__heading">
                            <h2 className="projects__heading-font"><span className="char__font">[</span> Projects <span className="char__font">]</span></h2>
                        </div>
                        <Carousel className={'projects__content'} pagination={false} itemsToShow={3}>
                            {
                                projects.map((card) => {
                                    return(
                                        <div className="projects__card">
                                            <img alt={card.title} src={card.icon} height={'100%'} width={'100%'}></img>
                                            <h2 className="projects__subheading">{card.title}</h2>
                                            <button class="projects__btn"><a href={card.link} target="_blank" rel={'noopener noreferrer'}>Live Demo</a></button>
                                            <button class="projects__btn"><a href={card.github} target="_blank" rel={'noopener noreferrer'}>Github</a></button>
                                        </div>
                                        
                                    )
                                })
                            }
                        </Carousel>
                   
                    <Arrow down={props.down} arrow={props.arrow} />
            </section>
        </div>
    )
}
export default Projects;