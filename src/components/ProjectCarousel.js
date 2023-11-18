import {Col, Carousel, CarouselItem } from "react-bootstrap";

export const ProjectCarousel = ({images, youtube}) => {
  return (
    <>
    <Col xs={12} md={9} className="carousel-container">
      <Carousel className="carousel" variant="dark">
          {images.map((image, index) => (
              <Carousel.Item key={index}><img src={image}/></Carousel.Item>
            ))
          }

          {youtube && (
             <Carousel.Item>
             <div className="ratio ratio-4x3">
               <iframe
                 src={youtube}
                 frameborder="0"
                 allowFullScreen
               ></iframe>
             </div>
           </Carousel.Item>
          )}
      </Carousel>
    </Col>
    </>
  );
};
