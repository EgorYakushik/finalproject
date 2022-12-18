import React from 'react'
import './style.css'

export default function BtnBack() {
  return (
    <a href='/projects' className="btn-back">
        <img src="https://img.icons8.com/android/24/null/circled-left.png" alt="Back" className='arrow'/>
        Back
    </a>
  )
}
