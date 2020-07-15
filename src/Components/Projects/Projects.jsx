import React from 'react';
import './Projects.css';
import Arrow from '../Utilities/Arrows/Arrows';



const Projects = (props) => {
        return (
            <div>
                <section className="projects" id="projects">
                    <div className="projects__list">
                        {  
                            <h2>Coming soon...</h2>
                        }
                    </div>
                    <Arrow down={props.down} arrow={props.arrow} />
                </section>
            </div>
        );
    }
export default Projects;