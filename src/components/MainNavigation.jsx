import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

import logo from '../assets/shared/logo.svg';
import openMenu from '../assets/shared/icon-hamburger.svg';
import closeMenu from '../assets/shared/icon-close.svg';

export default function MainNavigation (){

    const [activePage, setActivePage] = useState('');
    // for defining the active page
    useEffect(() => {
        const url = window.location.href;
        const [protocol, rest] = url.split("://");
        const [domainAndPort, pathAndQuery] = rest.split("/");
        setActivePage(pathAndQuery);
    }, [])


    const [isOpen, setIsOpen] = useState(false)

    function toggleMenu () {
        setIsOpen((isOpen) => !isOpen);
    }
    useEffect(() => {
        window.addEventListener("resize", handleCloseNav);
        return () => {
            window.removeEventListener("resize", handleCloseNav)
        }
        
    }, [isOpen])

    function handleCloseNav(){
        setIsOpen(false)
    }

    return (
        <header>
            <div className='logo'>
                <NavLink to="/">
                    <img src={logo} alt="logo of Space travel" width="48" height="48"/>
                </NavLink>
            </div>
            <button className='nav-icon' onClick={toggleMenu}>
                {isOpen ? 
                    <img src={closeMenu} width='24' height='24' alt='open navigation' />
                    :
                    <img src={openMenu} width='24' height='24' alt='close navigation' />       
                }
                
            </button>
            {/* {isOpen && <nav className={`main-navigation is-open`}>  */}
            <nav className={`main-navigation ${isOpen ? 'is-open' : ''}`}>
                <div className='nav-line'></div>
                
                <ul className='nav'>
                    <li>
                        <NavLink onClick={()=> {toggleMenu(); setActivePage('')}}
                            to="/"
                            className={({ isActive }) =>
                                isActive ? 'active' : undefined
                              }                        
                            end
                            >
                            <span>00</span>Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={()=> {toggleMenu(); setActivePage('destinations')}}
                            to="destinations/moon"
                            className={() =>
                                activePage==='destinations' ? 'active' : undefined
                            }
                            
                            >
                            <span>01</span>Destinations
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={()=> {toggleMenu(); setActivePage('crew')}}
                            to="/crew/douglas-hurley"
                            className={() =>
                                activePage==='crew' ? 'active' : undefined
                            }
                            end
                            >
                            <span>02</span>Crew
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={()=> {toggleMenu(); setActivePage('technology')}}
                            to="/technology/launch-vehicle"
                            className={() =>
                                activePage==='technology' ? 'active' : undefined
                            }
                            end
                            >
                            <span>03</span>Technology
                        </NavLink>
                    </li>
                </ul>
                
                {/* <div className='nav-bg'>
                    
                    <div className='nav-blur'><div></div></div>
                </div> */}
                
            </nav>
        </header>
    )
}