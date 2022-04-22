import React from "react";
import orderMenu from "../../../Images/ordermenu.png";
import cartMenu from "../../../Images/cartMenu.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

import classes from "./garyBlue.module.css";

const GaryBlue = () => {
  const githubIcon = <FontAwesomeIcon icon={faGithubSquare} />;
  const url = "https://github.com/Semester-2-team-7/Semester2-Final-Sprint.git";

  return (
    <div>
      <a
        className={`${classes.github} ${classes.badge}`}
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        <span className={classes.icon}>{githubIcon}</span> Click the see the
        Full Project
      </a>

      <div
        className={`${classes.mainBlock} ${classes.grid} ${classes["grid--1x2"]}`}
      >
        <div className={classes.block}>
          <h3>Order Menu Design</h3>
          <img
            className={classes.image}
            src={orderMenu}
            alt="Gary Blue's Created order Menu"
          />
          <p className={classes.blockBody}>
            The order menu is designed to sort the menu into seclected
            categories. A pick up window provides the user with the estimated
            time their order will be ready. Items are added and remove to cart
            by useing the add to cart checkbox.
          </p>
          <div className={classes.block}>
            <h3>Cart Design</h3>
            <img
              className={classes.image}
              src={cartMenu}
              alt="Gary Blue's Created order Menu"
            />
            <p className={classes.blockBody}>
              The cart is in modal that appears ontop of the page that the cart
              icon is clicked it has + and - buttons for the user to increase or
              decrease their order at the cart level so they do not have to go
              backt to the order menu to changed their order. After the user
              submits their order the user will fill out the checkout forum and
              submit their order to the databse.
            </p>
          </div>
        </div>
        <div className={classes.block}>
          <h3>Authentication</h3>
          <img
            className={classes.image}
            src={cartMenu}
            alt="Gary Blue's Created order Menu"
          />
          <p className={classes.blockBody}>
            Set up a working authnication system. Users had to create a account
            then login in with their username and password. All user information
            then stored on firebase system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GaryBlue;
