import { Container, TabContent, Tab, Nav, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import paw1 from "../assets/img/projects/pawssibilites/add_new_listings.png";
import paw2 from "../assets/img/projects/pawssibilites/advanced_search_component.png";
import paw3 from "../assets/img/projects/pawssibilites/advanced_search_screen.png";
import paw4 from "../assets/img/projects/pawssibilites/advanced_search_results.png";
import paw5 from "../assets/img/projects/pawssibilites/favorites_page.png";
import paw6 from "../assets/img/projects/pawssibilites/home_screen_anonymous.png";
import paw7 from "../assets/img/projects/pawssibilites/listings_page.png";
import paw8 from "../assets/img/projects/pawssibilites/login_screen.png";
import paw9 from "../assets/img/projects/pawssibilites/profile_page.png";
import paw10 from "../assets/img/projects/pawssibilites/profile_settings_page.png";
import paw11 from "../assets/img/projects/pawssibilites/register_page.jpeg";
import paw12 from "../assets/img/projects/pawssibilites/registered_user_home.png";
import pawthumbnial from "../assets/img/projects/pawssibilites/pawthumbnail.png";

// will pull from a data set I make later
export const Projects = () => {
  const projects = [
    {
      title: "Pawsibilites",
      description: "A full-stack responsive pet adoption social media platform with the purpose of helping facilitate pet adoption.",
      techstack: ["HTML", "CSS", "Bootstrap", "React","Redux", "Javascript", "MongoDB", "PetFinder Api", "Node.js", "Render.js", "Figma", "VS Code"],
      imgUrl: pawthumbnial,
      carouselImgs: [paw8, paw11, paw12, paw6, paw7, paw1, paw5, paw2, paw3, paw4, paw9, paw10],
      youtubeLink: "https://youtu.be/U_kYwgI50bA",
      filter: "fullstack",
    },

    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Frontend</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Full Stack</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">UX/UI</Nav.Link>
                </Nav.Item>
              </Nav>
              <TabContent>
                <Tab.Pane eventKey="first">
                  <Row>
                      {
                        projects.filter(project => project.filter === "frontend").map((project, index) =>{
                          return (
                            <ProjectCard key={index} {...project} />
                          )
                        })
                      }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {
                      // Filter the projects array to only include projects with filter "fullstack"
                      projects.filter(project => project.filter === "fullstack").map((project, index) =>{
                        return (
                          <ProjectCard key={index} {...project} />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                <Row>
                    {
                      // Filter the projects array to only include projects with filter "fullstack"
                      projects.filter(project => project.filter === "ui/ux").map((project, index) =>{
                        return (
                          <ProjectCard key={index} {...project} />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
              </TabContent>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}/>
    </section>
  );
};
