import { useState } from "react";
import { Col } from "react-bootstrap";
import { ProjectModal } from "./ProjectModal";

// The project properties are now accepted as an object named 'props'
export const ProjectCard = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Destructure the props to use in the component
  const { title, description, techstack, imgUrl, carouselImgs, youtubeLink, github } = props;

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={handleShow}>
        <img src={imgUrl} alt={`Project ${title}`} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <button type="button">
            <span>Gallery</span>
          </button>
        </div>
      </div>
      {/* Pass the entire 'props' object to the ProjectModal component */}
      <ProjectModal show={show} handleClose={handleClose} projprops={props} />
    </Col>
  );
}
