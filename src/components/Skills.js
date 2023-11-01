import { Col, Container, Row, Table } from "react-bootstrap";
import { SkillPill } from "./SkillPill"

import colorSharp from "../assets/img/color-sharp.png"
import testIcon from "../assets/img/skill-icons/axure.svg";


//changing the way this looks will have pictures pertaining to languages and tools in tech stack 

export const Skills = () => {
    const skillpilldata = 
    [
        {skill: "Axure",
        source: testIcon,
        category: "tool"},
    ];

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                            <Table borderless striped="columns" variant="dark"responsive="sm">
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td>Languages & Frameworks</td>
                                        <td>
                                            {
                                            skillpilldata.map((skillpill, index) => {
                                               
                                                if (skillpill.category === 'langauge' || skillpill.category === 'framework' ) {
                                                    return <SkillPill key={index} {...skillpill}/>;
                                                }
                                            })
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Tools</td>
                                        <td>
                                            {
                                            skillpilldata.map((skillpill, index) => {
                                               
                                                if (skillpill.category === 'tool' ) {
                                                    return <SkillPill key={index} {...skillpill}/>;
                                                }
                                            })
                                            }
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="colorSharp"/>
        </section>
      )


}