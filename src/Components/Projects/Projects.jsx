import React, { Component } from 'react';
import './Projects.css'
import Sidebar from '../Utilities/Sidebar';



class Projects extends Component {
    render() {
        return (
            <div>
                <section className="projects">
                    <div className="projects__list">
                        <h2>Projects coming soon.....</h2>
                    </div>
                    <Sidebar />
                </section>
            </div>
        );
    }
}

export default Projects;