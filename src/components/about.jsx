import React from "react";
import profile from "../Images/Profile.png";
import classes from "./about.module.css";
import SmallCard from "../UI/smallCard";

const introTitle = "Intro";
const introBody =
  "Hey there! My name is Mike Wadden, I am a student in the Software Development Program at Keyin Colleage.  I also have a Bachelor of Buisness Administration from Memorial University in 2010 and over 15 years of professional expereince in operations and business managment.  I currently live in St. John's, NL.";
const interestTitle = "Interests";
const interestBody =
  "I have always had a passion for technology and online gaming. Since starting the Software Development Program I have found great fulfillment working in an area that I genuinely enjoy. If you can not find me on the computer you can probabaly find me at the rink coaching my kids in hockey";
const workTitle = "Work Experince";

const workBody =
  "After graduating from Memorial Unversity, I worked with a local wholesale company as a Purchaser and after a few short years was promoted to Operations Manager. At that time I managed over 30 employees and was responsible for the daily running of the warehouse and trucking operations as well being the Coca Cola purchaser.\n The Coca Cola line made up over 50% of the companies total sales and I was able to achieve a 95% service level with the limitation of only a 10 day lead time to order new stock.  By effectively managing the work flow of the warehouse and trucking I created efficiencies that led to reducing warehouse overtime by over 50%. Additionally, I implemented new trucking routes that reduced the fleet by one less truck which was a total savings of over $70,000 annually.";

const factsTitle = "Interesting Facts";
const factsBody =
  "While in university I was a member of SIFE Memorial, a volunteer organization representing students in free enterprise. I held the role of VP of Technology and was responsibile for the the video and technical equipment, as well as designing the presentations for business competition teams. During the four years I was on the team we won 3 National Championships and in 2008 we won the SIFE World Cup in Singapore.";
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
