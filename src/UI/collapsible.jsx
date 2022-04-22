import React from "react";
import classes from "./collapsible.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { NavLink, Link } from "react-router-dom";

const Collapsible = (props) => {
  const chevron = <FontAwesomeIcon icon={faChevronRight} />;

  return (
    <div
      className={`${
        !props.isActive
          ? `${classes.collapsible}`
          : `${classes.collapsibleExpanded}`
      }`}
    >
      <div className={classes.collapsibleHeader}>
        <h2 className={classes.collapsibleHeading}>
          {props.title}
          <span
            onClick={props.onCollapsible}
            className={`${classes.icon} ${classes.collapsibleChevron}`}
          >
            {chevron}
          </span>
        </h2>
      </div>
      <div className={classes.collapsibleContent}>
        <div className={classes.links}>
          <ul
            className={`${classes.nav__list} ${classes.collaspsible__content}`}
          >
            <li className={classes.nav__item}>
              <NavLink to="/about">About</NavLink>
            </li>
            <li className={classes.nav__item}>
              <NavLink className="nav-link clickable " to="/projects">
                Projects
              </NavLink>
            </li>
            <li className={classes.nav__item}>
              <NavLink className="nav-link clickable " to="/contact">
                Contact Me
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>Contact Info</li>
            <li>Email: mikewadden12@gmail.com</li>
            <li>Phone: (709)-687-5085</li>
          </ul>
          <ul>
            <li>Media</li>
            <li>GitHub:</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Collapsible;
