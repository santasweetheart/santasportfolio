import { useState } from "react";
import { Col } from "react-bootstrap";
import { ProjectModal } from "./ProjectModal";


export const ProjectCard = ({title, description, imgUrl}) => {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
      <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <span></span>
            <button type="button" onClick={handleShow}>
              <span>Gallery</span>
            </button>
          </div>
          <ProjectModal show={show} handleClose={handleClose} />
        </div>
      </Col>
    );
}