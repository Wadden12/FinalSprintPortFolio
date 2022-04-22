import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./footer.module.css";
import Logo from "../Images/Wadden12.png";
import Collapsible from "./collapsible";

const Footer = () => {
  const [active, setIsActive] = useState(false);

  const handleCollapsible = () => {
    setIsActive(!active);
  };
  return (
    <footer className={classes.block}>
      <div className={`${classes.container} ${classes.footerSection}`}>
        <div className={classes.footerBrand}>
          <Link className={classes["nav-brand"]} to="/">
            <img src={Logo} alt="" className={classes.nav__brand} />
            <p className={classes.footerCopyright}>
              Copyright 2021 Wadden 12 Development
            </p>
          </Link>
        </div>
        <div className={classes.footerLinks}>
          <Collapsible
            onCollapsible={handleCollapsible}
            isActive={active}
            title="Links"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
