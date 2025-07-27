import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <a href="https://github.com/shubhamsharma39" target="_blank" rel="noopener noreferrer">
            <img src={ME} alt="About Img" />
            </a>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Learning</h5>
              <small>6+ Months Learning Devops </small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Groups</h5>
              <small>5+ Groups Combine works real-world project</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>

          <p>
            <p>
                I’m a Computer Science graduate with a passion for DevOps and cloud-native technologies. 
                 I’ve worked on projects involving Docker, Jenkins, and AWS, 
                 and have hands-on experience building CI/CD pipelines and monitoring infrastructure. 
                 I’ve also contributed to AI/ML-based apps and enjoy exploring automation tools. 
</p>

          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
