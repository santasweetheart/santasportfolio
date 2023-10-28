
import { Modal, Row, Col, Carousel} from "react-bootstrap";
import { ProjectCarousel } from "./ProjectCarousel";

//will need to pull from prjects database
export const ProjectModal = ({ show, handleClose }) => {

    return(
        <>
        <Modal size="xl" centered show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title className="modaltitle"><h2>Modal heading</h2></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row className="modalbody">
              <ProjectCarousel/>
                <Col xs={6} md={3} className="projectinfo">
                    <p>Tech Stack</p>
                </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </>
    )
}