import React from "react";
import "./projects.css";
import Data from "./projects_data";

console.log(Data);
const Portfolio = () => {
  return (
    <section id="projects">
      <h5>My Recent work</h5>
      <h2>Projects</h2>

      <div className="container project__container">
        {Data.map(({ id, title, image, github, demo }) => {
          return (
            <article key={id} className="project__item">
              <div className="project__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="project__item-cta">
                <a href={github} className="btn" target="_blank">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
