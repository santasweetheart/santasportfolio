import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import pawthumbnial from "../assets/img/projects/pawssibilites/pawthumbnail.png";
import  aplearnthumbnail from "../assets/img/projects/apprenticelearning/apprenticethumbnail.png";
import  traveltrovethumbnail from "../assets/img/projects/traveltrove/traveltrovethumbnail.png";
import  discoroomthumbnail from "../assets/img/projects/discoroomarea/discoroomthumbnail.png";
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
import t1 from "../assets/img/projects/traveltrove/intropage.png";
import t2 from "../assets/img/projects/traveltrove/login.png";
import t3 from "../assets/img/projects/traveltrove/signup.png";
import t4 from "../assets/img/projects/traveltrove/landing.png";
import t5 from "../assets/img/projects/traveltrove/yourlist.png";
import t6 from "../assets/img/projects/traveltrove/indivlidualist.png";
import t7 from "../assets/img/projects/traveltrove/addcollaborators.png";
import t8 from "../assets/img/projects/traveltrove/importantdocs.png";
import t9 from "../assets/img/projects/traveltrove/imageindoc.png";

export const Projects = () => {
  const projects = [
    {
      title: "Pawsibilites",
      description: "A full-stack responsive, pet adoption social media platform with the purpose of helping facilitate pet adoption.",
      techstack: ["HTML", "CSS/Sass", "Bootstrap", "React","Redux", "Javascript", "MongoDB", "PetFinder Api", "Node.js", "Render.js", "Figma", "VS Code"],
      imgUrl: pawthumbnial,
      carouselImgs: [paw8, paw11, paw12, paw6, paw7, paw1, paw5, paw2, paw3, paw4, paw9, paw10],
      youtubeLink: "https://www.youtube.com/embed/U_kYwgI50bA?si=SsIGCxJO1Vyx0psW",
      github: "",
      livewebsite: "",
    },
    {
    title: "TravelTrove",
    description: "An iOS app that simplifies trip packing and insurance claim processes as well as ensuring luggage security.",
    techstack: ["Swift","Firebase Authenticaation", "Firebase Authentication", "Firebase Database", "Friebase Storage", "Figma", "CocoaPods", "Xcode", "Github"],
    imgUrl: traveltrovethumbnail,
    carouselImgs: [t1, t2, t3, t4, t5, t6, t7, t8, t9],
    youtubeLink: "https://www.youtube.com/embed/ppQbZGwcgfw?si=zaFaRCMUzA9yhTgF",
    github: "https://github.com/santasweetheart/traveltrove.git",
    livewebsite: "",
  },
  {
    title: "Covey Town Disco Room",
    description: "Implemented test-driven design and object-oriented programming to add disco room functionality to Covey Town, a open-source virtual meeting platform. ",
    techstack: ["TypeScript", "JavaScript", "React", "Phaser", "REST API", "Material UI", "Chakra UI"],
    imgUrl: discoroomthumbnail,
    carouselImgs: [],
    youtubeLink: "https://www.youtube.com/embed/TsE72gMP5ew?si=zrMg8drN43c0tpkm",
    github: "",
    livewebsite: "",
  },

  {
    title: "Apprentice Learning",
    description: "A data visualization initiative where authentic data from Apprentice Learning was analyzed and transformed into a dynamic, interactive visual representation.",
    techstack: ["D3", "JavaScript", "HTML", "CSS", "VS Code", "Github"],
    imgUrl: aplearnthumbnail,
    carouselImgs: [],
    youtubeLink: "https://www.youtube.com/embed/vNzM3JfxHNk?si=OjOIBUtTUlr26NHC",
    github: "",
    livewebsite: "https://santasweetheart.github.io/apprenticelearning/",
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
