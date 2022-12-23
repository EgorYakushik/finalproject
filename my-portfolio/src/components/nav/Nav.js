import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import Hamburger from '../humburger/Hamburger';
import "./style.css";


export default function Nav() {

    const activeLink = "nav-list__link nav-list__link--active";
    const normalLink = "nav-list__link";
    
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const ulRef = useRef(null);
    
    const toogleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    }    
    
    useEffect(() => {
        if (hamburgerOpen) {
            ulRef.current.classList.add('isOpen')
        } else {
            ulRef.current.classList.remove('isOpen')
        }
    }, [hamburgerOpen]);


  return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="logo">
                        <strong>My</strong> portfolio
                    </NavLink>
                    <button className='hamburger' onClick={toogleHamburger} >
                    <Hamburger />
                    </button>
                    
                    <BtnDarkMode />
                    
                    <ul ref={ulRef} className="nav-list" id='ul'>
                        <li className="nav-list__item">
                            <NavLink onClick={toogleHamburger} to="/" className={({isActive}) => isActive ? activeLink : normalLink}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink onClick={toogleHamburger} to="/projects" className={({isActive}) => isActive ? activeLink : normalLink}>
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink onClick={toogleHamburger} to="/education" className={({isActive}) => isActive ? activeLink : normalLink}>
                                Education
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink onClick={toogleHamburger} to="/skills" className={({isActive}) => isActive ? activeLink : normalLink}>
                                Skills
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink onClick={toogleHamburger} to="/contacts" className={({isActive}) => isActive ? activeLink : normalLink}>
                                Contacts
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  )
}
