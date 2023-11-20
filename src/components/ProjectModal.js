
import { Modal, Row, Col, Button} from "react-bootstrap";
import { ProjectCarousel } from "./ProjectCarousel";

//will need to pull from prjects database
export const ProjectModal = ({ show, handleClose, projprops}) => {
    // Destructure the props to use in the component
   const { title, description, techstack, imgUrl, carouselImgs, youtubeLink, github, livewebsite } = projprops;
    return(
        <>
        <Modal size="xl" className="modal-overlay" centered={true} show={show} onHide={handleClose} animation={false}>
          <Modal.Body>
            <Row className="modalbody">
              <ProjectCarousel images={carouselImgs} youtube={youtubeLink}/>
                <Col xs={6} md={3} className="projectinfo">
                  <h1 className="text-center">{title}</h1>
                  <h5 className="tech-stack">Tech Stack</h5> 
                   <ul>
                      {techstack.map((tech, index) => (
                        <li key={index}>{tech}</li>
                      ))}
                  </ul>
                  {/* Conditionally render the GitHub button */}
                  {github && (
                    <a href={github} target="_blank" rel="noopener noreferrer">
                      <button type="button">GitHub</button>
                    </a>
                  )}
                  {livewebsite && (
                  <a href={livewebsite} target="_blank" rel="noopener noreferrer">
                    <button type="button">Live Demo</button>
                  </a>
                  )}
                </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
        </Modal>
      </>
    )
}