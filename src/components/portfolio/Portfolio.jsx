import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg"; 
import IMG2 from "../../assets/portfolio2.jpg"; 
import IMG3 from "../../assets/portfolio3.jpg"; 

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="3-Tier Full Stack App" />
          </div>
          <h3>3-Tier Full Stack Application</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/shubhamsharma39/3-Tier-Full-Stack.git"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            {/* Optional live demo */}
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="GenAI Assistant" />
          </div>
          <h3>GenAI Assistant</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/shubhamsharma39/GenAI-Assistant.git"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="IP Address Check Services" />
          </div>
          <h3>IP Address Check Services</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/shubhamsharma39/Ip-Address-Check-Services.git"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
