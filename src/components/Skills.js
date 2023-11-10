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
import java from "../assets/img/skill-icons/java.svg";
import node from "../assets/img/skill-icons/nodejs.svg";
import jquery from "../assets/img/skill-icons/jquery.svg";
import c from "../assets/img/skill-icons/c.svg";
import cplusplus from "../assets/img/skill-icons/cplusplus.svg";
import figma from "../assets/img/skill-icons/figma.svg";
import firebase from "../assets/img/skill-icons/firebase.svg";
import git from "../assets/img/skill-icons/git.svg";
import mongodb from "../assets/img/skill-icons/mongodb.svg";
import python from "../assets/img/skill-icons/python.svg";
import redux from "../assets/img/skill-icons/redux.svg";
import ts from "../assets/img/skill-icons/typescript.svg";
import postman from "../assets/img/skill-icons/postman.svg";
import netlify from "../assets/img/skill-icons/netlify.svg";
import heroku from "../assets/img/skill-icons/heroku.svg";
import render from "../assets/img/skill-icons/render.svg";
import vscode from "../assets/img/skill-icons/vscode.svg";
import intellij from "../assets/img/skill-icons/intellij.svg";
import xCode from "../assets/img/skill-icons/xcode.svg";
import jest from "../assets/img/skill-icons/jest.svg";
import junit from "../assets/img/skill-icons/junit.svg";
import github from "../assets/img/skill-icons/github.svg";


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
                            <p>My skill set is a vibrant palette, rich with tech and design tools. <br></br>I'm equipped to tackle challenges by utilizing every tool at my disposal.</p>
                            <Row className="skill-containers">
                                <Col>
                                     <h3>Frontend</h3>
                                     <br/>
                                    <span> 
                                         <img src={react} alt="react"/>
                                         <img src={javascript} alt="javascript"/>
                                         <img src={bootstrap} alt="bootstrap"/>
                                    
                                        <img src={html5} alt="html5"/>
                                        <img src={d3} alt="d3"/>
                                        <img src={css3} alt="css3"/>
                                     
                                        <img src={sass} alt="sass"/> 
                                        <img src={jquery} alt="jquery"/>
                                        <img src={ts} alt="typescript"/>
                                     </span>
                                </Col>
                                <Col>
                                    <h3>Backend</h3>
                                    <br/>
                                    <span>
                                        <img src={java} alt="java"/>
                                        <img src={c} alt="c"/>
                                        <img src={cplusplus} alt="c++"/>
                                        <img src={python} alt="python"/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                    </span>
                                   
                                </Col>
                                <Col>
                                    <h3>Databases & Frameworks</h3>
                                    <br/>
                                    <span>
                                    <img src={redux} alt="redux"/>
                                    <img src={node} alt="node.js"/>
                                    <img src={firebase} alt="firebase"/>
                                    <img src={mongodb} alt="mongodb"/>
                                    <img src={jest} alt="jest"/>
                                    <img src={junit} alt="junit"/>
                                    </span>
                                    
                                </Col>
                                <Row className="developer-tools">
                                <Col>
                                    <br/>
                                    <h3>Developer & Design <br/>Tools</h3>
                                    <br></br>
                                    <span>
                                    <img src={netlify} alt="netlify"/>
                                    <img src={axure} alt="axure"/>
                                    <img src={figma} alt="figma"/>
                                    <img src={render} alt="render"/>
                                    <img src={heroku} alt="herohu"/>
                                    <img src={postman} alt="postman"/>
                                    <br/>
                                    <img src={swift} alt="swift"/>
                                    <img src={vscode} alt="vscode"/>
                                    <img src={xCode} alt="xcode"/>
                                    <img src={intellij} alt="intellij"/>
                                    <img src={git} alt="git"/>
                                    <img src={github} alt="github"/>
                                    </span>
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