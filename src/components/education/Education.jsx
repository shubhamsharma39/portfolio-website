import React from 'react';
import './education.css';

const Education = () => {
  return (
    <section id="education">
      <h5>My Academic Journey</h5>
      <h2>Education</h2>

      <div className="container education__container">
        <div className="education__item">
          <h3>B.Tech in Computer Science</h3>
          <small>APJ Abdul Kalam Technical University | 2021 - 2025</small>
          <p>CGPA: 7.5</p>
        </div>
        <div className="education__item">
          <h3>12th (CBSE)</h3>
          <small>ST. Thomas International School  | 2019 - 2021</small>
          <p>Percentage: 75%</p>
        </div>
        <div className="education__item">
          <h3>10th (CBSE)</h3>
          <small>Sant Keena Ram Seniour Secondary public School | 2017 - 2019</small>
          <p>Percentage: 78%</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
