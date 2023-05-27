import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiMenuDown } from '@mdi/js';
import ThemeToggle from "./ThemeToggle"


const ToggleMenuButton: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className="navbar">
            <div className="container">

                <ThemeToggle />

                <a href='/home' className="logo">
                    <Link to="/">Sonja Svidén</Link>
                </a>
                <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                    <Icon path={mdiMenuDown} size={2} color="" />

                </button>
                <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects">Project</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/resume">Resume</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default ToggleMenuButton;
