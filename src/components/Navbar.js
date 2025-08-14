import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faEnvelope, faBook, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='navbar active'>
        
            <h3 className='logo'>Sa<strong className='mylogo'>kshi</strong></h3>

            <div className='hamburger' onClick={toggleMenu}>
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </div>

            <ul className={`items ${isOpen ? 'open' : ''}`}>
                <li><Link to="/" onClick={toggleMenu}><FontAwesomeIcon icon={faHouse} className='font-aw' /> Home</Link></li>
                <li><Link to="/about" onClick={toggleMenu}><FontAwesomeIcon icon={faUser} className='font-aw' /> About</Link></li>
                <li><Link to="/skill" onClick={toggleMenu}><FontAwesomeIcon icon={faBook} className='font-aw' /> Skills </Link></li>
                <li><Link to="/project" onClick={toggleMenu}><FontAwesomeIcon icon={faBook} className='font-aw' /> Projects</Link></li>
                <li><Link to="/contact" onClick={toggleMenu}><FontAwesomeIcon icon={faEnvelope} className='font-aw' /> Contact</Link></li>
              
            </ul>
            
            
        </nav>
        
    );
};

export default Navbar;
