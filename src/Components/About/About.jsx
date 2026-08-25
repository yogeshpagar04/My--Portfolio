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
          Hello! My name is <strong>Yogesh Pagar</strong>, a Software Engineer & Full Stack Web Developer based in Nashik, India.
          I have completed my <strong>Bachelor of Engineering in Information Technology</strong> from Savitribai Phule Pune University (2022 – 2026).
          <br /><br />
          I specialize in building scalable web applications using <strong>JavaScript, React.js, Node.js, Express.js, and MongoDB</strong>.
          I am passionate about integrating Generative AI using <strong>Gemini and OpenAI APIs</strong>, developing RESTful APIs,
          implementing secure applications with <strong>JWT Authentication</strong>, and creating responsive, user-friendly interfaces.
          <br /><br />
          I am actively seeking opportunities as a <span style={{ color: `#64ffda`, fontWeight: 700 }}>
            Software Engineer, Full Stack Developer, or Web Developer
          </span>.
        </p>
      </div>
    </div>
      );
};

      export default About;
