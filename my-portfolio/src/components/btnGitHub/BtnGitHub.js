import React from 'react'
import gitHubBlack from './gitHub-black.svg'
import './style.css' 


export default function BtnGitHub({ link }) {
  return (
    <a href={link} target="_blank" className="btn-outline">
        <img src={gitHubBlack} alt="" />
        GitHub repo
    </a>
  )
}
