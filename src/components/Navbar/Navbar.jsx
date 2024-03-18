import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const navLinks = [

    { id: 1, href: "#about", text: "About" },
    { id: 2, href: "#skills", text: "Skills" },
    { id: 3, href: "#projects", text: "Projects" },
    { id: 4, href: "#contact", text: "Contact" },
  ];

  return (
    <>
      <nav className="navbar navbar-expand  ">
        <div className="container text-center navbar-container">
          <div>
            <div className="navbar-nav fs-2 ">
              {navLinks.map((link) => (
                <a key={link.id} className="nav-link" href={link.href}>
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;