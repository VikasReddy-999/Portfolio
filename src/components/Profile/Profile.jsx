import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Profile.css";

function Profile() {
  return (
    <div
      id="home"
      className="mb-4 py-3 title text-dark min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
    >
      <div className="container py-5">
        <div id="profile"></div>
        <div className="container">
          <h1 className="display-1 text-custom-font name">Mansoor</h1>
          <div className="fs-4 name-about">
            Passionate about changing the world with technology.
          </div>
          <div className="p-3 fs-1">
            <a className="px-2" href="https://github.com/Mansoor-P">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/MANSOOR0731">
              <FaLinkedin />
            </a>
          </div>
          <a
            className="btn btn-outline-dark btn-lg mt-3"
            href="#about"
            role="button"
            aria-label="Learn more about me"
          >
            More about me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
