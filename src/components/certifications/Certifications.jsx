import React from "react";
import "./certifications.css";
import guvi from "../../assets/certifications/guvi.png";
import pwskills from "../../assets/certifications/pwskills.png";
import blw from "../../assets/certifications/blw.png";

const Certifications = () => {
  return (
    <section id="certifications">
      <h5>DevOps-Focused Upskilling Journey</h5>
      <h2>Courses, Certifications & Internship</h2>

      <div className="container portfolio__container">

        {/* GUVI Certification */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={guvi} alt="GUVI Certification" />
          </div>
          <h3>DevOps Tools Certification Track</h3>
          <small className="text-light">
            GUVI • October 2024 <br />
            Fundamentals of DevOps, Docker, Git, Jenkins, Azure DevOps, Ansible, My Sql
                      </small>
          <div className="portfolio__item-cta">
            <a
              href="https://1drv.ms/i/c/bee0bf2c46086be0/EabrbRFRNxNHq1Nkvgc3sWgBT3sDi25kyBhIUR8qIPzRKg?e=GLwrfb"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              View Certificate
            </a>
          </div>
        </article>

        {/* PW Skills Certification */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pwskills} alt="PW Skills Certification" />
          </div>
          <h3>DevOps with AWS & Docker</h3>
          <small className="text-light">PW Skills • 2024-2025</small>
          <div className="portfolio__item-cta">
            <a
              href="https://1drv.ms/i/c/bee0bf2c46086be0/EeKzlEZXWiVFrnWO4SGej3cB-nYqgaFGgyiRnqn8H4gI6Q?e=mxjThi"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              View Certificate
            </a>
          </div>
        </article>

        {/* BLW Internship */}
<article className="portfolio__item">
  <div className="portfolio__item-image">
    <img src={blw} alt="BLW Internship" />
  </div>
  <h3>IT & Networking Internship</h3>
  <small className="text-light">
    BLW Varanasi • July–August 2024 <br />
    Network Setup, System Maintenance & Troubleshooting
  </small>
  <div className="portfolio__item-cta">
    <a
      href="https://1drv.ms/i/c/bee0bf2c46086be0/EdOd6Gzg16hGhx1UNV4eKBUBkzfl9UFlnLgi8G8a8Ddexw?e=PkJjyy"
      className="btn"
      target="_blank"
      rel="noreferrer"
    >
      View Certificate
    </a>
  </div>
</article>


      </div>
    </section>
  );
};

export default Certifications;
