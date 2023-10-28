import {Col, Carousel } from "react-bootstrap";
import img1 from "../assets/img/project-img1.png";
import img2 from "../assets/img/blackwoman.png";



export const ProjectCarousel = () => {
  return (
    <>
    <Col xs={12} md={9} className="carousel-container">
      <Carousel className="carousel" variant="dark">
        <Carousel.Item>
          <img src={img2} /></Carousel.Item>
        <Carousel.Item><img src={img1} /></Carousel.Item>
        <Carousel.Item> <img src={img1} /> </Carousel.Item>
        <Carousel.Item>
          <div className="ratio ratio-4x3">
            <iframe
              src="https://www.youtube.com/embed/eo3ttp-Ihns?si=epNq6xsSvco4zcLz"
              frameborder="0"
              allowFullScreen
            ></iframe>
          </div>
        </Carousel.Item>
      </Carousel>
    </Col>
    </>
  );
};
