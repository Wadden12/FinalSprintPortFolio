import React from "react";
import { NavLink, Link } from "react-router-dom";
import classes from "./navbar.module.css";
import Logo from "../Images/Wadden12.png";

const NavBar = () => {
  return (
    <nav>
      <div className={classes.container}>
        <Link className={classes["nav-brand"]} to="/">
          <img src={Logo} alt="" className={classes.nav__brand} />
          <h1>Mike Wadden</h1>
        </Link>

        <span className={classes.nav__toggler}>Collasp Icon</span>

        <div className={classes.navbar}>
          <ul
            className={`${classes.nav__list} ${classes.collaspsible__content}`}
          >
            <li className={classes.nav__item}>
              <NavLink aria-current="page" to="/intro">
                Intro
              </NavLink>
            </li>
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
      </div>
    </nav>
  );
};

export default NavBar;
