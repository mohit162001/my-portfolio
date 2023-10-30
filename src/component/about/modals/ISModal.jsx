import React from "react";
import "./modal.css";

const MyModal = ({ closeModal }) => {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <h1>Internship</h1>
        <p>
          During my enriching internship at Tech Driven Basic Private Limited,
          located in Indore, Madhya Pradesh, I had the privilege of contributing
          to the company's success over a span of four transformative months. As
          a web developer intern, my primary focus was on harnessing the power
          of ReactJS technology. Throughout this journey, I had the opportunity
          to work on various projects, honing my skills and expanding my
          knowledge in web development. The experience I gained during this
          internship not only allowed me to develop and apply my technical
          abilities but also provided me with invaluable insights into the
          ever-evolving world of web development, shaping my career path for the
          better.
        </p>
        <button className="btn btn-primary" onClick={() => closeModal()}>
          Close
        </button>
      </div>
    </div>
  );
};

export default MyModal;
