import { Fragment } from "react";
import classes from "./projectHeader.module.css";
import softwareImage from "../../Images/ProjectHeader.png";

const ProjectHeader = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Projects</h1>
        <div className={classes.navButton}>
          <button className={classes.button}>Expense Tracker</button>
          <button className={classes.button}>Gary Blue's</button>
          <button className={classes.button}>Python Quiz Program</button>
          <button className={classes.button}>Python Database useing CSV</button>
        </div>
      </header>
      <div className={classes["main-image"]}>
        <img src={softwareImage} alt=" decorateive banner" />
      </div>
    </Fragment>
  );
};

export default ProjectHeader;
