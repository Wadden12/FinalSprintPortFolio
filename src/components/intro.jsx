import React from "react";
import classses from "./intro.module.css";
import filler from "../Images/home.png";
import Card from "../UI/card";

const Intro = () => {
  return (
    <Card>
      <section>
        <div className={classses.container}>
          <img className={classses.intro} src={filler} alt="filler intro" />
        </div>
      </section>
    </Card>
  );
};

export default Intro;
