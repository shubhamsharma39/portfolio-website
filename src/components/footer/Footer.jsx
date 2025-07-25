import React from "react";
import "./footer.css";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer_container">
    <footer>
      <a href="#main" className="footer__logo">Shubham Sharma</a>

      <ul className="permalinks">
        <li><a href="#main">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#exploring">Exploring</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://instagram.com/shubham1816sharma"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com/Shubham56114968"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://linkedin.com/in/shubham-sharma-352576259"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/shubhamsharma39"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Shubham Sharma. All rights reserved.</small>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
