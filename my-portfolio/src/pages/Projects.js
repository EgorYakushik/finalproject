import React from 'react';
import Project from '../components/project/Project';
import {projects} from './../helpers/projectsList'

export default function Projects() {
  return (
    <main className="section">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects" id="projects">
                {projects.map((project, id) => {
                    return <Project key={id} title={project.title} img={project.img} id={id}/>
                })}
            </ul>
        </div>
    </main>
  )
}
