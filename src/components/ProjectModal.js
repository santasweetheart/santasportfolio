
import { Modal, Row, Col} from "react-bootstrap";
import { ProjectCarousel } from "./ProjectCarousel";

//will need to pull from prjects database
export const ProjectModal = ({ show, handleClose, projprops}) => {
    // Destructure the props to use in the component
   const { title, description, techstack, imgUrl, carouselImgs, youtubeLink, github } = projprops;
    return(
        <>
        <Modal size="xl" centered show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title className="modaltitle"><h2>Project Name</h2></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row className="modalbody">
              <ProjectCarousel images={carouselImgs} youtube={youtubeLink}/>
                <Col xs={6} md={3} className="projectinfo">
                    <p>Tech Stack</p> 
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
                </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </>
    )
}