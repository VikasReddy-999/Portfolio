import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navLinks = [
    { id: 1, to: "/", text: "Home" },
    { id: 2, to: "/about", text: "About" },
    { id: 3, href: "#skills", text: "Skills" },
    { id: 4, href: "#projects", text: "Projects" },
    { id: 5, href: "#contact", text: "Contact" },
  ];

  return (
    <>
      <nav className="navbar navbar-expand">
        <div className="container text-center navbar-container">
          <div>
            <div className="navbar-nav fs-2">
              {navLinks.map((link) =>
                link.to ? (
                  <Link key={link.id} to={link.to} className="nav-link">
                    {link.text}
                  </Link>
                ) : (
                  <a key={link.id} href={link.href} className="nav-link">
                    {link.text}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
