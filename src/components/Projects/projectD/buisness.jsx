import React from "react";
import classes from "./buisness.module.css";

const Buisness = () => {
  return (
    <div>
      <h3 className={`${classes.buisness} ${classes.badge}`}>
        Management Highlights
      </h3>

      <div className={classes.containerList}>
        <ul className={classes.list}>
          <li className={classes.listItem}>Managed a team of 30 employee's</li>
          <li className={classes.listItem}>
            Purchasing: was responsible for managing the Coca Cola line worth
            over 50% of the companies sales
          </li>
          <li className={classes.listItem}>
            Maintained a 95% Service Leveling as the Coca Cola divison buyer
          </li>
          <li className={classes.listItem}>
            after taking over as operations manager in one year reduced
            warehouse overtime cost by 50%.
          </li>
          <li className={classes.listItem}>
            Saved the company over $70,000 by reducing the fleet by one truck
            acheive through design of new efficent trucks runs.
          </li>
          <li className={classes.listItem}>
            Sucessfully planned a executed a logistics plan for a terroirty a
            expansion to the West Coast of Newfoundland Labrador.
          </li>
          <li className={classes.listItem}>
            implemented picking procedures to greatly reduce the amount of erros
            made and increase picking speed
          </li>
          <li className={classes.listItem}>
            Switch the company from a paper based sales for to completely
            digital by created digital sales sheets.
          </li>
          <li className={classes.listItem}>
            consistantly year over year reduced the overcost of the companies
            transportation logistics and warehouse operating cost by managinig
            the workflow.
          </li>
          <li className={classes.listItem}>
            reorganized the warehouse increasing the available primary locations
            by 30%. Allowing for the company to take on new products lines.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Buisness;
