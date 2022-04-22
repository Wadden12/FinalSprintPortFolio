import React from "react";
import classes from "./smallCard.module.css";

const SmallCard = (props) => {
  return (
    <div className={`${classes.card} ${classes.cardSecondary}`}>
      <header className={classes.cardHeader}>{props.title}</header>
      <div className={classes.cardBody}>{props.body}</div>
    </div>
  );
};

export default SmallCard;
