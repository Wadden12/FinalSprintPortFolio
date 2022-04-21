import { Fragment } from "react";
import classes from "./projectHeader.module.css";
import softwareImage from "../../Images/ProjectHeader.png";
import { Link } from "react-router-dom";

const ProjectHeader = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Projects</h1>
        <div className={classes.navButton}>
          <Link to="projectA">
            <button onClick={props.onClickProjectA} className={classes.button}>
              Expense Tracker
            </button>
          </Link>
          <Link to="projectB">
            <button onClick={props.onClickProjectB} className={classes.button}>
              Gary Blue's
            </button>
          </Link>
          <Link to="projectC">
            <button onClick={props.onClickProjectC} className={classes.button}>
              Python Collection
            </button>
          </Link>
          <Link to="projectD">
            <button onClick={props.onClickProjectD} className={classes.button}>
              Buisnes Management
            </button>
          </Link>
        </div>
      </header>
      <div className={classes["main-image"]}>
        <img src={softwareImage} alt=" decorateive banner" />
      </div>
    </Fragment>
  );
};

export default ProjectHeader;
