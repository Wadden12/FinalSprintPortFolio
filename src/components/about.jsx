import React from "react";
import profile from "../Images/Profile.png";
import classes from "./about.module.css";

const About = () => {
  return (
    <div className={`${classes.grid} ${classes["grid--1x2"]}`}>
      <div>
        <img className={classes.imgProfile} src={profile} alt=" Mike Wadden" />
      </div>
      <div>
        <div className={`${classes.card} ${classes.cardSecondary}`}>
          <header className={classes.cardHeader}>Card Title</header>
          <div className={classes.cardBody}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum,
            assumenda?
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
