import React from "react";
import "./Skills.css";

const skillsData = [
  {
    category: "Front End",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap"],
  },
  {
    category: "Back End",
    skills: [
      "Java",
      "DSA",
      "SQL",
      "My-SQL",
      "REST API",
      "MongoDB",
      "Hibernate",
      "Spring Boot",
      "Spring MVC",
    ],
  },
  {
    category: "Course Work",
    skills: [
      "Linux",
      "Networking",
      "Design Patterns",
      "Relational Database",
      "Full stack Development",
      "Object-Oriented Design",
      "Data structures and Algorithms",
      "Database Management System",
    ],
  },
  {
    category: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Figma",
      "Postman",
      "IntelliJ-IDE",
      "My-SQL Workbench",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h1 className="section-title">My Skills</h1>
      <p className="section-subtitle">
        Proficient in various technical domains with a strong expertise in Java Full-stack Development.
      </p>
      <div className="skills-container">
        {skillsData.map((category, index) => (
          <div key={index} className="skills-category">
            <h2 className="skills-category-title">{category.category}</h2>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <img
                      src="../assets/checkmark.png"
                      alt="Skills icon"
                      className="skills-icon"
                    />
                  <h3 className="skill-name">{skill}</h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
