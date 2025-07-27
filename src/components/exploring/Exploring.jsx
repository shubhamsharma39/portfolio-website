import React from "react";
import "./exploring.css";
import AVTR1 from "../../assets/devops/docker.png";
import AVTR2 from "../../assets/devops/kubernetes.png";
import AVTR3 from "../../assets/devops/jenkins.png";
import AVTR4 from "../../assets/devops/github-actions.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// Correct way to import pagination module
import { Pagination } from "swiper";

const data = [
  {
    avatar: AVTR1,
    name: "Docker",
    review:
      "Containerization tool helping in building, shipping, and running applications in isolated environments.",
  },
  {
    avatar: AVTR2,
    name: "Kubernetes",
    review:
      "Exploring container orchestration using K8s for scaling and automating app deployment.",
  },
  {
    avatar: AVTR3,
    name: "Jenkins",
    review:
      "Using Jenkins pipelines to automate building, testing, and deploying applications.",
  },
  {
    avatar: AVTR4,
    name: "GitHub Actions",
    review:
      "Learning GitHub Actions for CI/CD workflows and automation directly within GitHub.",
  },
];

const Exploring = () => {
  return (
    <section id="exploring">
      <h5>My Journey</h5>
      <h2>What I'm Exploring</h2>

      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container explorer_container testimonials__container"
      >
        {data.map(({ avatar, name, review }, index) => (
          <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt={name} />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Exploring;