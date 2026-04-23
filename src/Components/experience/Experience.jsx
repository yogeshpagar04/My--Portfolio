// import React from "react";
// import { ThemeContext } from "../../ContextProvider/ThemeContext";
// // import WindowSize from "../../Utils/WindowSize";
// import styles from "./Experience.module.css";

// const Experience = () => {
//   const { newTheme } = React.useContext(ThemeContext);

//   return (
//     <div
//       className={styles.container}
//       style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
//     >
//       <div className={styles.first}>
//         <img
//           src={
//             "https://media1.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
//           }
//           alt=""
//         />
//       </div>
//       <div className={styles.second}>
//         <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
//           Experience
//         </h1>
//         <div className={styles.borderBottom} />
//         <h2 style={{ color: `${newTheme.title}` }} className={styles.heading}>Infosys Ltd</h2>
//         <h3 style={{ color: `${newTheme.title}` }} className={styles.aboutMe} >Position : System Engineer (Sept-2021 To Nov-2022)</h3>
//         <p style={{ color: `${newTheme.para}` }} className={styles.aboutMe}>
//          <li>
//            Develop and Manage project as per client Requirement.
//          </li>
//          <li>
//            Handle Incidents that related to the python technology.
//          </li>
//          <li>
//            Worked on jupyterhub, Docker, Django, Flask,Aws SageMaker, Azure Machine Learning tools.
//          </li>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Experience;

import React from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import styles from "./Experience.module.css";

const Experience = () => {
  const { newTheme } = React.useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
    >
      <div className={styles.first}>
        <img
          src="https://media1.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
          alt="coding animation"
        />
      </div>

      <div className={styles.second}>
        <h1 style={{ color: newTheme.title }} className={styles.heading}>
          Experience
        </h1>

        <div className={styles.borderBottom} />

        {/* Anvistar */}
        <h2 style={{ color: newTheme.title }} className={styles.heading}>
          Software Development Intern
        </h2>

        <h3 style={{ color: newTheme.title }} className={styles.aboutMe}>
          Anvistar ITS Pvt. Ltd., Pune (Remote) | Jan 2025 – Feb 2025
        </h3>

        <ul style={{ color: newTheme.para }} className={styles.aboutMe}>
          <li>
            Developed dynamic web application features using React.js and JavaScript.
          </li>
          <li>
            Built reusable React components and ensured responsive UI design.
          </li>
          <li>
            Collaborated with team members to maintain clean code and best practices.
          </li>
        </ul>

        {/* Gyanteerth */}
        <h2 style={{ color: newTheme.title }} className={styles.heading}>
          Data Science Intern (Python)
        </h2>

        <h3 style={{ color: newTheme.title }} className={styles.aboutMe}>
          Gyanteerth, Pune | Jan 2025
        </h3>

        <ul style={{ color: newTheme.para }} className={styles.aboutMe}>
          <li>
            Completed a 4-credit Python for Data Science internship with hands-on exercises.
          </li>
          <li>
            Applied Python for data analysis, visualization, and problem-solving tasks.
          </li>
          <li>
            Strengthened analytical and technical skills through real-world projects.
          </li>
        </ul>

        {/* CodeSoft */}
        <h2 style={{ color: newTheme.title }} className={styles.heading}>
          Web Developer Intern
        </h2>

        <h3 style={{ color: newTheme.title }} className={styles.aboutMe}>
          CodeSoft (Remote) | Jul 2024 – Aug 2024
        </h3>

        <ul style={{ color: newTheme.para }} className={styles.aboutMe}>
          <li>
            Developed responsive web pages using HTML5, CSS3, and JavaScript (ES6+).
          </li>
          <li>
            Enhanced UI usability with modern design standards.
          </li>
          <li>
            Implemented DOM manipulation and interactive features for web applications.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;