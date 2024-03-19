import React from "react";
import "./Aboutme.css";
import { Link } from "react-router-dom";
const Aboutme = () => {
  const skills = [
    "Java",
    "SQL",
    "MySQL",
    "DSA",
    "ReactJS",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Bootstrap",
    "J2EE",
    "JSP",
    "JDBC",
    "Database Management System",
    "Operating System",
    "Networking Concepts",
    "System Design",
    "Eclipse IDE",
    "Git",
    "GitHub",
  ];

  return (
    <>
      <Link className="home-link" to="/">HOME</Link>
      <div className="aboutme-container">
        <div className="left-section">
          <section className="profile-section">
            <div className="container">
              <div className="picture-resume-wrapper">
                <div className="picture-resume">
                  <img src="../assets/aboutr.jpg" alt="" />
                </div>
                <div className="name-wrapper">
                  <h1> Mansoor Pathikonda </h1>
                </div>
              </div>

              <div className="contact-info  ">
                <ul className="list-titles">
                  <li>Call</li>
                </ul>
                <ul className="list-titles">
                  {" "}
                  <li>Mail</li>
                </ul>
                <ul className="list-titles">
                  <li>LinkedIn</li>
                </ul>
                <ul className="list-titles">
                  <li>GitHub</li>
                </ul>
              </div>
              <div className="contact-presentation">
                <p>
                  As a passionate and driven fresher, I am deeply committed to
                  leveraging technology for positive change in the world. I
                  believe that with innovation, dedication, and a strong sense
                  of purpose, we can address critical issues, improve lives, and
                  create a brighter future for everyone. I am eager to learn,
                  grow, and contribute my skills and ideas to meaningful
                  projects that make a difference and inspire others to join in
                  the journey of transforming our world through technology.
                  Passionate about changing the world with technology.
                </p>
              </div>
              <div class="section-wrapper">
                <h4>Hobbies</h4>
                <ul>
                  <li>Coding daily</li>
                  <li>Problem solving</li>
                  <li>Web crawling</li>
                  <li>Playing cricket</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="right-section">
          <section className="education-section">
            <h3 className="education-title">Education</h3>
            <div className="education-wrapper">
              <div className="educational-details">
                <div className="education-title">
                  <h2>
                    MCA <span>2021-2023</span>
                  </h2>
                  <p>
                    <i>Sri Venkateswara University , Tirupati</i>
                  </p>
                  <p className="education-description">
                    This is my latest graduation where I pursued my Master of
                    Computer Applications (MCA) from Sri Venkateswara
                    University, Tirupati. It was a transformative experience
                    that enhanced my skills and knowledge in the field of
                    computer science and technology.
                  </p>
                </div>
                <div className="education-title">
                  <h2>
                    BS.c <span>2018-2021</span>
                  </h2>
                  <p>
                    <i>The Adoni Arts and Science College , Adoni</i>
                  </p>
                </div>
                <div className="education-title">
                  <h2>
                    XII <span>2016-2018</span>
                  </h2>
                  <p>
                    <i>Sri Satya Sai Junior College , Ananthapur</i>
                  </p>
                </div>
              </div>
            </div>
            <div class="skills">
              <p>
                {skills.map((skill, index) => (
                  <React.Fragment key={skill}>
                    <span className="skill">{skill}</span>
                    {index !== skills.length - 1 && (
                      <span className="separator">|</span>
                    )}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
