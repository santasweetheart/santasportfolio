import { Col, Container, Row} from "react-bootstrap";


import colorSharp from "../assets/img/color-sharp.png"
import axure from "../assets/img/skill-icons/axure.svg";
import react from "../assets/img/skill-icons/react.svg";
import bootstrap from "../assets/img/skill-icons/bootstrap.svg";
import css3 from "../assets/img/skill-icons/css3.svg";
import d3 from "../assets/img/skill-icons/d3.svg";
import html5 from "../assets/img/skill-icons/html5.svg";
import sass from "../assets/img/skill-icons/sass.svg";
import javascript from "../assets/img/skill-icons/javascript.svg";
import swift from "../assets/img/skill-icons/swift.svg";



//changing the way this looks will have pictures pertaining to languages and tools in tech stack 

export const Skills = () => {
      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>My skill set is a vibrant palette, rich with tech savvy and design smarts. <br></br>I'm equipped to tackle challenges and innovate, utilizing every tool at my disposal.</p>
                            <Row className="skill-containers">
                                <Col>
                                     <h3>Frontend</h3>
                                     <p>I find the greatest joy in bringing my designs to life in the browser.</p>
                                     <h5>Languages</h5>
                                    <span> 
                                         <img src={react} alt="react"/>
                                         <img src={javascript} alt="javascript"/>
                                         <img src={bootstrap} alt="bootstrap"/>
                                     </span>
                                     <span>
                                        <img src={html5} alt="html5"/>
                                        <img src={d3} alt="d3"/>
                                        <img src={css3} alt="css3"/>
                                     </span>
                                     <img src={sass} alt="sass"/> 
                                </Col>
                                <Col>
                                    <h3>Backend</h3>
                                    <p>User expereience is my passion and that can't be done without some stellar backend. </p>
                                </Col>
                                <Col>
                                    <h3>Mobile App Devlopment</h3>
                                    <p>I'm all about creating mobiles apps where each interaction feels like a burst of happiness.</p>
                                    <h5>Languages</h5>
                                    <img src={axure} alt="axure"/>
                                </Col>
                                <Row className="developer-tools">
                                    <Col>
                                        <br></br>
                                        <h3>Developer Tools</h3>
                                        <img src={swift} alt="axure"/>
                                    </Col>
                                </Row>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="colorSharp"/>
        </section>
      )


}