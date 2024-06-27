import styles from "./ProjectsStyles.module.css";
import job from "../../assets/job.svg";
import food from "../../assets/food.svg";
import portfolio from "../../assets/portfolio.svg";
import Ecart from "../../assets/E-cart.svg";
import Hotel from "../../assets/hotel.svg";

import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={job}
          link="https://mj-career.netlify.app/"
          h3="Job Searching Portal"
          p=" A dynamic web application "
        />
        <ProjectCard
          src={food}
          link="https://github.com/Mansoor-P/food-delivery-app"
          h3="Food  Delivering App"
          p="Hamburger Restaurant"
        />
        <ProjectCard
          src={portfolio}
          link="https://github.com/Mansoor-P/Portfolio"
          h3="Portfolio"
          p="portfolio"
        />
        <ProjectCard
          src={Ecart}
          link="https://github.com/Mansoor-P/E-Commerce-Website"
          h3="E-Cart"
          p="E-cart"
        />
        <ProjectCard
          src={Hotel}
          link="https://github.com/Mansoor-P/hotel_booking"
          h3="Hotel Booking Aeb App"
          p="Hotel Booking Aeb App"
        />
     
      </div>
    </section>
  );
}

export default Projects;
