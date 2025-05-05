import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import "./NavMenu.css"

function NavMenu() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect (() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
    
  return (
    <>
      <motion.div className="navmenu"
        initial={{y: -250}}
        animate={{y: -10}}
      >
        <div className="container">
            <Link to="/" className="navmenu-logo" onClick={closeMobileMenu}>
                RCEG
            </Link>

            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                        About
                    </Link>
                </li>
        
                <li className="nav-item">
                    <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
      </motion.div>
    </>
  )
}

export default NavMenu
