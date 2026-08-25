import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Card from "../Card/Card";
import SideIcons from "../SideIcons/SideIcons";
import TechStacks from "../TechStacks/TechStacks";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../assets/yogesh.jpeg"
import { Button } from "../Button/Button";
import About from "../About/About";
import { projects } from "../../Utils/Projects";
import Contact from "../Contact/Contact";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import GitHub from "../Calender/calender";
import Experience from "../experience/Experience";
// import Experiences from '../Experiences/Experiences';



import ResumeModal from "../ResumeModal/ResumeModal";

const Home = ({ scrollRef }) => {
  const [projectArray, setProjectArray] = useState(projects.slice(0, 4));
  const { newTheme } = React.useContext(ThemeContext);
  const [offset, setOffset] = useState(0);
  const [location, setLocation] = useState(0);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    AOS.init();
  });

  const handleOffset = () => {
    setOffset(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleOffset);
    return () => window.removeEventListener("scroll", handleOffset);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = newTheme.background;
  }, [newTheme]);

  const handleDownloadResume = () => {
    const resumeUrl = `${process.env.PUBLIC_URL}/Yogesh_Pagar_Resume.pdf?v=${Date.now()}`;
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Yogesh_Pagar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShowAndDownload = () => {
    setIsResumeModalOpen(true);
    handleDownloadResume();
  };

  console.log(offset);
  const handleShowMoreBtn = () => {
    if (projects.length === projectArray.length) {
      setProjectArray(projects.slice(0, 4));
      window.scrollTo(0, location);
    } else {
      setProjectArray(projects);
      setLocation(offset);
    }
  };

  return (
    <div ref={scrollRef} className={styles.suraj}>
      <SideIcons />
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
      <div
        id="home"
        className={styles.profile}
        style={{ backgroundColor: `${newTheme.imgBackground}` }}
      >
        <div
          data-aos="fade-up"
          className={styles.intro}
          style={{
            color: `${newTheme.para}`,
          }}
        >
          <div className={styles.badge}>Available for Work</div>
          <h1>
            <span>Hey👋, I'm </span>
            <div className={styles.name} style={{ color: `${newTheme.title}` }}>
              Yogesh Pagar
            </div>
          </h1>
          <h2 className={styles.subHeading}>Full Stack Web Developer (MERN & GenAI)</h2>
          <p className={styles.bioTagline}>
            Crafting intelligent web applications, AI tools, and scalable MERN stack solutions.
          </p>
          <div className={styles.btnContainer}>
            <button
              className={`${styles.actionBtn} ${styles.showBtn}`}
              onClick={() => setIsResumeModalOpen(true)}
            >
              <i className="fas fa-eye"></i> Show Resume
            </button>
            
            <button
              className={`${styles.actionBtn} ${styles.downloadBtn}`}
              onClick={handleDownloadResume}
            >
              <i className="fas fa-file-download"></i> Download Resume
            </button>

            <button
              className={`${styles.actionBtn} ${styles.bothBtn}`}
              onClick={handleShowAndDownload}
            >
              <i className="fas fa-cloud-download-alt"></i> Show &amp; Download
            </button>
          </div>
        </div>

        <div
          data-aos="fade-left"
          className={styles.profileImage}
        >
          <img
            src={img1}
            alt="Yogesh Pagar - Profile"
          />
        </div>
      </div>

      <div
        id="about"
        style={{
          background: `${newTheme.highlightBackground}`,
        }}
        className={styles.experience}
      >
        <About />
      </div>
      <div
        id="about"
        style={{
          background: `${newTheme.highlightBackground}`,
        }}
        className={styles.experience}
      >
        <Experience />
      </div>

      <div id="techStacks" className={styles.techStacks}>
        <TechStacks />
      </div>
        
      <div>
        <GitHub/>
      </div>

      {/* project section from here => */}
      <div id="projects" className={styles.projects}>
        <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
          Few Things I've Build
        </h1>
        <div className={styles.borderBottom} />
        <div>
          {projectArray.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
        <Button
          text={
            projects.length !== projectArray.length ? "Show More" : "Show Less"
          }
          handleButton={handleShowMoreBtn}
        />
      </div>

      <div
        style={{
          background: `${newTheme.highlightBackground}`,
        }}
      >
        <Contact />
      </div>
    </div>
  );
};

export default Home;
