import classes from "./projectSummary.module.css";

const ProjectSummary = (props) => {
  return (
    <section className={classes.summary}>
      <h2 className={classes.badge}>{props.title}</h2>
      {props.body}
    </section>
  );
};

export default ProjectSummary;
