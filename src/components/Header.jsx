import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  fixed-top">
        <div className="container-fluid mx-4 text-center">
          <a className="navbar-brand fs-1" href="#home">
            <span>
              {"< Mansoor />"}
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav fs-2 ">
              <a className="nav-link " aria-current="page" href="#home" >
                Home
              </a>
              <a className="nav-link" href="#about">
                About
              </a>
              <a className="nav-link" href="#skills">
                Skills
              </a>
              
              <a className="nav-link" href="#projects">
                Projects
              </a>
              {/* <a className="nav-link" href="#resume">
                Resume
              </a> */}
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
