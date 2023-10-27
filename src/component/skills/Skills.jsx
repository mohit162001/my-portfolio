import React from "react";
import "./skills.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
const Skills = () => {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>My Skill Stack</h2>

      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Frontend Development</h3>
          <div className="skills__content">
            <article className="skill__details">
              <BsFillCheckCircleFill className="skill__details-icon" />
              <div>
                <h4>HTML</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <BsFillCheckCircleFill className="skill__details-icon" />
              <div>
                <h4>CSS</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="skill__details">
              <BsFillCheckCircleFill className="skill__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <BsFillCheckCircleFill className="skill__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="skill__details">
              <BsFillCheckCircleFill className="skill__details-icon" />
              <div>
                <h4>React JS</h4>
                <small>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="skills__backend">
          <h3>Backend Development</h3>
          <div className="skills__content">
            <article className="skill__details">
              <BsFillCheckCircleFill className="skill__details-icon" />
              <div>
                <h4>Node JS</h4>
                <small>Basic</small>
              </div>
            </article>
            <article className="skill__details">
              <BsFillCheckCircleFill className="skill__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="skill__details">
              <BsFillCheckCircleFill className="skill__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="skill__details">
              <BsFillCheckCircleFill className="skill__details-icon" />
              <div>
                <h4>Java</h4>
                <small>Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
