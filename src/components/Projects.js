import { Container, Row, Col } from "react-bootstrap";
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
      github: "",
    },
    {
    title: "TravelTrove",
    description: "An iOS app that simplifies trip packing and insurance claiom processes as well as ensuring luggage security.",
    techstack: ["Swift","Firebase Authenticaation", "Firebase Authentication", "Firebase Database", "Friebase Storage", "Figma", "CocoaPods", "Xcode", "Github"],
    imgUrl: pawthumbnial,
    carouselImgs: [paw8, paw11, paw12, paw6, paw7, paw1, paw5, paw2, paw3, paw4, paw9, paw10],
    youtubeLink: "https://youtu.be/ppQbZGwcgfw",
    github: "",
  },
  {
    title: "Covey Town Disco Room",
    description: "Implemented test-driven design and object-oriented programming to add disco room functionality to open-source virtual meeting platform ",
    techstack: ["TypeScript", "React", "Phaser"],
    imgUrl: pawthumbnial,
    carouselImgs: [paw8, paw11, paw12, paw6, paw7, paw1, paw5, paw2, paw3, paw4, paw9, paw10],
    youtubeLink: "https://youtu.be/TsE72gMP5ew",
    github: "",
  },

  {
    title: "Apprentice Learning",
    description: "A data visualization initiative where authentic data from Apprentice Learning was analyzed and transformed into a dynamic, interactive visual representation.",
    techstack: ["D3", "JavaScript", "HTML", "CSS", "VS Code", "Github"],
    imgUrl: pawthumbnial,
    carouselImgs: [paw8, paw11, paw12, paw6, paw7, paw1, paw5, paw2, paw3, paw4, paw9, paw10],
    youtubeLink: "https://youtu.be/vNzM3JfxHNk",
    github: "",
  },
  {
    title: "Image Processor",
    description: "Description Pending",
    techstack: ["Java", "Java Swing"],
    imgUrl: pawthumbnial,
    carouselImgs: [paw8, paw11, paw12, paw6, paw7, paw1, paw5, paw2, paw3, paw4, paw9, paw10],
    youtubeLink: "",
    github: "",
  },
  {
    title: "co-opportuniti",
    description: "Description Pending",
    techstack: ["Java", "Java Swing"],
    imgUrl: pawthumbnial,
    carouselImgs: [paw8, paw11, paw12, paw6, paw7, paw1, paw5, paw2, paw3, paw4, paw9, paw10],
    youtubeLink: "",
    github: "",
  },
    

    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
            Discover a diverse range of projects that embody my journey in software development, from sleek user interfaces to complex full-stack solutions. 
            Each piece in this collection highlights my dedication to building impactful and innovative technology.
             Browse through to witness how my expertise translates into real-world applications that prioritize both form and function.
            </p>
            </Col>
        </Row>
        <Row>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Decorative background" />
    </section>
  );
};
