import React from "react";
import "./TrainingComponent.css";
import Moon from "../trainingComponent/moon1.jpg";
import space3 from "../trainingComponent/space3.jpg";
import { Link } from "react-router-dom";

const TrainingComponent = () => {
  return (
    <div className="training">
      <div className="left">
        <h1>Training</h1>
        <p>
          {" "}
          Do you have a passion for space exploration and a desire to drive the
          most advanced vehicles ever created? If so, then our space shuttle
          driving training program is perfect for you! Our program is designed
          to prepare you for the challenges and rewards of driving a space
          shuttle. You will learn everything from the basics of shuttle
          operations to advanced techniques for navigating through the vast
          reaches of space. Our expert instructors will guide you through every
          step of the training process, ensuring that you have the skills and
          knowledge necessary to succeed. With our space shuttle driving
          training, you will have the opportunity to work for some of the most
          prestigious space agencies in the world. You could become a NASA
          astronaut and participate in groundbreaking missions to explore our
          solar system and beyond
        </p>
        <Link to="/contact">
          <button className="btn">Contact </button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="image-stack top">
            <img src={Moon} className="img" alt='moon picture' />
          </div>
          <div className="image-stack bottom">
            <img src={space3} className="img" alt='moon picture' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingComponent;
