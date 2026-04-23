import React from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
// import WindowSize from "../../Utils/WindowSize";
import styles from "./About.module.css";

const About = () => {
  const { newTheme } = React.useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
    >
      <div className={styles.first}>
        <img
          src={
            "https://github.com/RahulGoyal03/Portfolio/blob/main/public/developer.gif?raw=true"
          }
          alt=""
        />
      </div>
      <div className={styles.second}>
        <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
          About Me
        </h1>
        <div className={styles.borderBottom} />
        <p style={{ color: `${newTheme.para}` }} className={styles.aboutMe}>
          Hello! My name is Yogesh and I like to build websites/application that
          serves the world and always want to enhance my knowledge & adpot new
          technologies that make impact on peopleMy interest in web development started during my academic journey, where I
          began learning full-stack development and gained a strong foundation in HTML,
          CSS, JavaScript, and modern frameworks.
          . <br />
          <br /> Fast forward to today, I have developed multiple web applications and projects,
          including full-stack applications using technologies like React, Node.js,
          Express, and MongoDB. Through these experiences, I have strengthened my skills
          in problem-solving, teamwork, and communication.here i am
          <span style={{ color: `#00a0a0` }}>
            {" "}
            looking for an opportunity as a full stack web developer
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
