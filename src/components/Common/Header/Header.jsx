import React,{useEffect, useState} from 'react';
import {Navbar,Offcanvas,Nav,NavDropdown,Form,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NavLink } from 'react-router-dom';
import "../Header/header.css"

const Header = () => {
    const [open,setOpen]=useState(false);
    const toggleMenu=()=>{
        setOpen(!open);

    };

    useEffect(()=>{
        window.addEventListener("scroll",isSticky);
        return ()=>{
            window.removeEventListener("scroll",isSticky)
        }
    })
//sticky Header
    const isSticky=(e)=>{
        const header = document.querySelector('.header-section');
        const scrollTop= window.scrollY;
        scrollTop>=120?header.classList.add('is-sticky'):header.classList.remove('is-sticky')
    }

    return (
        <header className='header-section'>
            <container>
                
                    <Navbar  expand='lg' className='p-0'>
                        {/*Logo Section*/}

                        <Navbar.Brand>
                            <NavLink to='/' className="nav-text">Wardrobe Simplified</NavLink>
                        </Navbar.Brand>

                        {/*End Logo Section*/}

                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-lg`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                            placement="start"
                            show={open}
                        >
                            {/*Mobile Logo Section*/}
                            <Offcanvas.Header>
                                <h1 className='logo'>Your Store, Simplified</h1>
                                <span className='navbar-toggler ms-auto' onClick={toggleMenu}>
                                <i class="bi bi-x-lg"></i>
                                </span>
                            </Offcanvas.Header>
                            {/*End Mobile Logo Section*/}
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <NavLink className='nav-link' to='/'>Home</NavLink>
                                    <NavLink className='nav-link' to='/'>About Us</NavLink>
                                    <NavLink className='nav-link' to='/products'>Products</NavLink>
                                    <NavDropdown
                                        title="Categories"
                                        id={`offcanvasNavbarDropdown-expand-lg`}
                                    >
                                        <NavDropdown.Item href="#action3">Formal Wear</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Casuals</NavDropdown.Item>
                                        <NavDropdown.Item href="#action5">Party Wear</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavLink className='nav-link' to='/'>Contact Us</NavLink>
                                </Nav>
                               
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                        <div className="ms-md-4 ms-2">
                            <NavLink to="/login" className="primaryBtn d-none d-sm-inline-block">
                                Login Now
                            </NavLink>
                            <li className="d-inline-block d-lg-none-3 toggle_btn">
                            <i className={open? "bi bi-x-lg":"bi bi-list"} onClick={toggleMenu}></i> 
                            </li>
                        </div>

                    </Navbar>
                
            </container>
        </header>
    )
}

export default Header