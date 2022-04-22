import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import classes from "./python.module.css";

const Python = () => {
  const githubIcon = <FontAwesomeIcon icon={faGithubSquare} />;
  const url = "https://github.com/Wadden12/Semester1.git";

  return (
    <div>
      <a
        className={`${classes.github} ${classes.badge}`}
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        <span className={classes.icon}>{githubIcon}</span> Click To See The Full
        Project
      </a>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        doloribus autem commodi repudiandae facilis magni est corrupti iure nemo
        aperiam dolore ab quam ea hic laudantium labore quasi, esse nam?
      </p>
    </div>
  );
};

export default Python;
