import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

export default function BtnBack() {
  return (
    <NavLink to='/projects' className="btn-back">
        <img src="https://img.icons8.com/android/24/null/circled-left.png" alt="Back" className='arrow'/>
        Back
    </NavLink>
  )
}
