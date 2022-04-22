import React, { useState } from "react";
import classes from "./projects.module.css";
import ProjectHeader from "./projectHeader";
import ProjectSummary from "./projectSummary";
import { Outlet } from "react-router-dom";
import Card from "../../UI/card";

const projectATitle = "Expense Tracker";
const projectABody = (
  <React.Fragment>
    <p>
      Expense tracker was the first simple applicaiton i completed with react.
    </p>
    <p>
      This applications allows the user to add expense and sort the data by
      year.
    </p>
  </React.Fragment>
);
const projectBTitle = "Gary Blue's";
const projectBBody = (
  <React.Fragment>
    <p>
      As part of team we created a website for Gary Blue's Dinner useing React.
    </p>
    <p>
      I worked on the authnication part of site to allow the user to log in and
      implemented a function cart so a customer could place a order. Part of the
      project i also worked on the graphic desing for the site including the
      logo.
    </p>
  </React.Fragment>
);
const projectCTitle = "Python Collection";
const projectCBody = (
  <React.Fragment>
    <p>
      A collection of Python projects created in my first semester of software
      development
    </p>
    <p>
      Most of the programs were exercises for school but i created a couple of
      programs on my spare time one is a CSV database system for a mock company
      and a program can you to grade a test.
    </p>
  </React.Fragment>
);
const projectDTitle = "Buisness Management";
const projectDBody = (
  <React.Fragment>
    <p>I have over 10 yeras of management expeince working in operations.</p>
    <p>
      While this does not count as a actually software program. I feal that
      management work experince and knowledge will make me a great asset for
      your team.
    </p>
  </React.Fragment>
);

const Projects = () => {
  const [showProjectA, setShowProjectA] = useState(false);
  const [showProjectB, setShowProjectB] = useState(false);
  const [showProjectC, setShowProjectC] = useState(false);
  const [showProjectD, setShowProjectD] = useState(false);

  const projectAHandler = () => {
    setShowProjectA(true);
    setShowProjectB(false);
    setShowProjectC(false);
    setShowProjectD(false);
  };
  const projectBHandler = () => {
    setShowProjectB(true);
    setShowProjectA(false);
    setShowProjectC(false);
    setShowProjectD(false);
  };
  const projectCHandler = () => {
    setShowProjectB(false);
    setShowProjectA(false);
    setShowProjectC(true);
    setShowProjectD(false);
  };
  const projectDHandler = () => {
    setShowProjectB(false);
    setShowProjectA(false);
    setShowProjectC(false);
    setShowProjectD(true);
  };
  return (
    <React.Fragment>
      <ProjectHeader
        onClickProjectA={projectAHandler}
        onClickProjectB={projectBHandler}
        onClickProjectC={projectCHandler}
        onClickProjectD={projectDHandler}
      />
      {showProjectA && (
        <ProjectSummary title={projectATitle} body={projectABody} />
      )}
      <div className={classes.block1}>
        {showProjectA && (
          <Card>
            <Outlet />
          </Card>
        )}
      </div>
      {showProjectB && (
        <ProjectSummary title={projectBTitle} body={projectBBody} />
      )}

      <div>
        {showProjectB && (
          <Card>
            <Outlet />{" "}
          </Card>
        )}
      </div>

      {showProjectC && (
        <ProjectSummary title={projectCTitle} body={projectCBody} />
      )}
      <div>{showProjectC && <Outlet />}</div>
      {showProjectD && (
        <ProjectSummary title={projectDTitle} body={projectDBody} />
      )}
      <div>{showProjectD && <Outlet />}</div>
    </React.Fragment>
  );
};

export default Projects;
