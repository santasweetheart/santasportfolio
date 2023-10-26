import { useState, useEffect } from "react";
import {Navbar, Container} from "react-bootstrap";
import logo from '../assets/img/logo.svg'
import logo from '../assets/img/logo.svg'
import logo from '../assets/img/logo.svg'
import logo from '../assets/img/logo.svg'
export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home'); //keep track of what links are clicked
    const [scolled, setScrolled] = useState(false); //keep track if the screen has scrolled 

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50){
                setScrolled = true;
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
        <Navbar expand="lg" className = {scrolled ? "scrolled": ""}> 
          <Container>
            <Navbar.Brand href="#home">
                <img src="" alt= "LOGO" />
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
                        <a href="#"><img src={} alt= ""/></a>
                        <a href="#"><img src={} alt= ""/></a>
                        <a href="#"><img src={} alt= ""/></a>
                    </div>
                    <button className="vvd" onClick={() => console.log('connect')}></button><span> Let's Connect</span>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}