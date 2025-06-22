import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Can Do</h5>
      <h2>Services</h2>

      <div className="container services__container">

        {/* CI/CD Pipeline Setup */}
        <article className="service">
          <div className="service__head">
            <h3>CI/CD Pipeline Setup</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Automate code build, test, and deployment using Jenkins and GitHub Actions.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Integrate Docker for containerized deployments.</p>
            </li>
          </ul>
        </article>

        {/* Cloud Infrastructure */}
        <article className="service">
          <div className="service__head">
            <h3>Cloud Infrastructure Deployment</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Deploy applications on AWS EC2, S3, and configure security groups.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Use Terraform to provision infrastructure as code.</p>
            </li>
          </ul>
        </article>

        {/* Containerization & Orchestration */}
        <article className="service">
          <div className="service__head">
            <h3>Containerization & Orchestration</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Dockerize applications for consistency across environments.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Use Kubernetes to manage, scale, and orchestrate containers.</p>
            </li>
          </ul>
        </article>

        {/* Monitoring & Logging */}
        <article className="service">
          <div className="service__head">
            <h3>Monitoring & Logging</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Set up Prometheus and Grafana for real-time application monitoring.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Track logs and alerts for application health and performance.</p>
            </li>
          </ul>
        </article>

        {/* Scripting & Automation */}
        <article className="service">
          <div className="service__head">
            <h3>Scripting & Automation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Write shell scripts for automation of repetitive DevOps tasks.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Use Ansible to automate server configuration and deployments.</p>
            </li>
          </ul>
        </article>

        {/* Version Control & Collaboration */}
<article className="service">
  <div className="service__head">
    <h3>Version Control & Collaboration</h3>
  </div>
  <ul className="service__list">
    <li>
      <BiCheck className="service__list-icon" />
      <p>Use Git for source code versioning and branch-based development.</p>
    </li>
    <li>
      <BiCheck className="service__list-icon" />
      <p>Collaborate on projects using GitHub workflows and pull requests.</p>
    </li>
  </ul>
</article>


      </div>
    </section>
  );
};

export default Services;
