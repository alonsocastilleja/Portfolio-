import React from 'react';
import './Projects.css';
import Arrow from '../Utilities/Arrows/Arrows';
import projects from '../data/projects.json';


const Projects = (props) => {
        return (
            <div>
                <section className="projects">
                    
                    <Arrow down={props.down} arrow={props.arrow} />
                </section>
            </div>
        );
    }
export default Projects;