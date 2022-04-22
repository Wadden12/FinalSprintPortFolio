import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import classes from "./navbar.module.css";
import Logo from "../Images/Wadden12.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const bar = <FontAwesomeIcon icon={faBars} />;
  const [isActive, setIsActive] = useState(true);
  const onNavHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <nav>
      <div className={classes.container}>
        <Link className={classes["nav-brand"]} to="/">
          <img src={Logo} alt="" className={classes.nav__brand} />
          <h1>Mike Wadden</h1>
        </Link>

        <span onClick={onNavHandler} className={classes.nav__toggler}>
          {bar}
        </span>

        {isActive && (
          <div className={classes.navbar}>
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
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
