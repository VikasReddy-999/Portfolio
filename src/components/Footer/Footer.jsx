// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="mt-auto py-5 text-center"
      style={{ backgroundColor: "rgb(245, 245, 245)" }}
    >
<<<<<<< HEAD
      <div className="container">
=======
      <div className="container footer">
>>>>>>> version-2.0-react
        <h2 className="display-4 pb-3 text-center">Get In Touch</h2>
        <p className="lead text-center pb-3">
          I'm currently looking for full-time Software Engineering
          opportunities! If you know of any positions available, if you have any
          questions, or if you just want to say hi, please feel free to email me
          at,{" "}
          <a
            className="text-decoration-none"
            href="mailto:mansoormunaf96522@gmail.com"
          >
            mansoorpathikonda@gmail.com
          </a>
          .
        </p>
        <i className="fas fa-code"></i> with <i className="fas fa-heart"></i> by{" "}
        <a
          rel="noopener"
          href="https://github.com/hashirshoaeb"
          aria-label="My GitHub"
        >
          {" "}
          <span className="badge bg-dark">Mansoor P</span>
        </a>{" "}
        using React Js
        <p>
          <small className="text-muted">
            Project code is open source. Feel free to fork and make your own
            version.
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
