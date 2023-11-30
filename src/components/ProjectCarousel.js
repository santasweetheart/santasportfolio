import {Col, Carousel} from "react-bootstrap";

export const ProjectCarousel = ({images, youtube}) => {
  return (
    <>
    <Col xs={12} md={9} className="carousel-container">
      <Carousel className="carousel" variant="dark">
          {images.map((image, index) => (
              <Carousel.Item key={index}><img src={image} alt={image}/></Carousel.Item>
            ))
          }

          {youtube && (
             <Carousel.Item>
             <div className="ratio ratio-4x3">
               <iframe title={"video link" + youtube}
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
