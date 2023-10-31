import { useState, useEffect } from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router} from "react-router-dom";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home'); //keep track of what links are clicked
    const [scrolled, setScrolled] = useState(false); //keep track if the screen has scrolled 

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50){
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll); //event listener fired only on scroll

        return () => window.removeEventListener("scroll", onScroll) // removes the event listener when the component is unmounted
    }, [])

     const onUpdateActiveLink = (value) => {
        setActiveLink(value);
     }
    

    return (
      <Router>
          <Navbar expand="lg" className = {scrolled ? "scrolled": ""}> 
            <Container>
              <Navbar.Brand href="/">
                  <img src={logo} alt= "Logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                  <span className="navbar-toggler-icon"></span>
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                  <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                  <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                </Nav>
                <span className="navbar-text">
                      <div className="social-icon">
                      <a href="www.linkedin.com/in/santajolicoeur" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn Icon" /></a>
                      <a href="https://github.com/santasweetheart"  target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Github Icon" /></a>
                      </div>
                      <HashLink to='#connect'>
                        <button className="vvd"><span>Let’s Connect</span></button>
                    </HashLink>
                </span>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Router>
      );
}