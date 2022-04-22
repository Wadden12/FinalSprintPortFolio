import React from "react";
import profile from "../Images/Profile.png";
import classes from "./about.module.css";
import SmallCard from "../UI/smallCard";

const introTitle = "Intro";
const introBody =
  "My name is Mike Wadden, i currently live in St.John's,NL. I am currently a student of the Software Development Program at Keyin Colleage. However this not my first time doing a post secondary degree. I graduated with a buisness degreee from Memorial University in 2010.";
const interestTitle = "Interests";
const interestBody =
  "I have always had a passion for technology because one of major hobbies and passions is online gaming. Ever since i started doing the software program i also find myself working on passion projects. If you can not find me on the computer you can probabaly find me at the rink coaching my kids in hockey";
const workTitle = "Work Experince";

const workBody =
  "After Graduating from Memorial Unversity. I went to work in the family buisness in purchasing after a few years. I was promoted to the operations manager. At that time i manged over 30 employee and was responsible for the daily running of the warehouse and trucking operations as well being the Coca Cola purchaser.\n The Coca Cola line made up over 50% of the companies total sales and working with 10 days to get new stock. Still managed to main over 95% service level. By effectively managing the work flow of the warehouse and trucking i was able to create efficeinticies that led to reducing warehouse overtime by over 50% and implemented new trucks routes that resulted in the company being able to reduce the fleet by one truck a total savings of over $70,000.";

const factsTitle = "Interesting Facts";
const factsBody =
  "While in university i was a member of a organazaton could SIFE. I was the VP of technology looking after the video and technacal equipment and designing the presentations for competetation teams. During the fours years i on the team we wont 3 National Championships and in 2008 we won the SIFE world Cup in Singapore.";
const About = () => {
  return (
    <React.Fragment>
      <div className={`${classes.grid} ${classes["grid--1x2"]}`}>
        <div>
          <img
            className={classes.imgProfile}
            src={profile}
            alt=" Mike Wadden"
          />
        </div>
        <div className={classes.cardContainer}>
          <SmallCard title={introTitle} body={introBody} />
          <SmallCard title={interestTitle} body={interestBody} />
          <SmallCard title={factsTitle} body={factsBody} />
        </div>
      </div>
      <SmallCard title={workTitle} body={workBody} />
    </React.Fragment>
  );
};

export default About;
