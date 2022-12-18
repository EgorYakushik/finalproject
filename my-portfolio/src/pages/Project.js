import React from 'react'
import {useParams} from 'react-router-dom'
import BtnBack from '../components/btnBack/BtnBack';
import BtnGitHub from '../components/btnGitHub/BtnGitHub'
import { projects } from '../helpers/projectsList'



export default function Project() {
  const {id} = useParams();
  const project = projects[id];
  
  return (
    <main className="section">
        <div className="container">
            <div className="project-details">
               <h1 className="title-1">{project.title}</h1>
               <BtnBack />
               <img src={project.imgBig} alt={project.title} className="project-details__cover" />
               <div className="project-details__desc">
                <p>{project.skills}</p>
               </div>
                <BtnGitHub link={project.gitHubLink}/>
            </div>
        </div>         
    </main>
  )
}
