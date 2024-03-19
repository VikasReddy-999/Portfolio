import React from "react";
<<<<<<< HEAD
=======
import { Link } from "react-router-dom";
>>>>>>> version-2.0-react
import "./Navbar.css";

const Navbar = () => {
  const navLinks = [
<<<<<<< HEAD

    { id: 1, href: "#about", text: "About" },
    { id: 2, href: "#skills", text: "Skills" },
    { id: 3, href: "#projects", text: "Projects" },
    { id: 4, href: "#contact", text: "Contact" },
=======
    { id: 1, to: "/", text: "Home" },
    { id: 2, to: "/about", text: "About" },
    { id: 3, href: "#skills", text: "Skills" },
    { id: 4, href: "#projects", text: "Projects" },
    { id: 5, href: "#contact", text: "Contact" },
>>>>>>> version-2.0-react
  ];

  return (
    <>
<<<<<<< HEAD
      <nav className="navbar navbar-expand  ">
        <div className="container text-center navbar-container">
          <div>
            <div className="navbar-nav fs-2 ">
              {navLinks.map((link) => (
                <a key={link.id} className="nav-link" href={link.href}>
                  {link.text}
                </a>
              ))}
=======
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
>>>>>>> version-2.0-react
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

<<<<<<< HEAD
export default Navbar;
=======
export default Navbar;
>>>>>>> version-2.0-react
