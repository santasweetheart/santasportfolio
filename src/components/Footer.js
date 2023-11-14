import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/websitelogo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={4}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={4}><p>"With her Afro and Brown skin,not even the sky was the limit"</p></Col>
          <Col size={12} sm={4} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/santajolicoeur/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn Icon" /></a>
                <a href="https://github.com/santasweetheart"  target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Github Icon" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}