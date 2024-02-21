import React from "react";
import "./Skills.css";

const skillsData = [
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML"},
      { name: "CSS"},
      { name: "JavaScript"},
      { name: "React"},
      { name: "Bootstrap"},
    ],
  },
  {
    category: "Backend Development",
    skills: [
      
      { name: "JAVA"},
      { name: "MY-SQL"},
      { name: "Git"},
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className=" skills-section">
      <h1 className="section-title">Skills</h1>
      <div className="skills-container">
        {skillsData.map((category, index) => (
          <div key={index} className="skills-category">
            <h2 className="skills-category-title">{category.category}</h2>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <img
                    src="./assets/checkmark.png"
                    alt="Skills icon"
                    className="skills-icon"
                  />
                  <div>
                    <h3 className="skill-name">{skill.name}</h3>
                  </div>
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
