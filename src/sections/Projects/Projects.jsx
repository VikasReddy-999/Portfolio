import styles from "./ProjectsStyles.module.css";
import job from "../../assets/job.svg";
import food from "../../assets/food.svg";
import portfolio from "../../assets/portfolio.svg";
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
      </div>
    </section>
  );
}

export default Projects;
