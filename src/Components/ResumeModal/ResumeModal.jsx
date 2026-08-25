import React, { useEffect } from "react";
import styles from "./ResumeModal.module.css";
import { ThemeContext } from "../../ContextProvider/ThemeContext";

const ResumeModal = ({ isOpen, onClose }) => {
  const { newTheme } = React.useContext(ThemeContext);
  const resumeUrl = `${process.env.PUBLIC_URL}/Yogesh_Pagar_Resume.pdf`;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `${resumeUrl}?v=${Date.now()}`;
    link.download = "Yogesh_Pagar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modalContent}
        style={{
          backgroundColor: newTheme.background || "#0b192f",
          color: newTheme.title || "#e6f1ff",
          boxShadow: `0 20px 50px rgba(0, 0, 0, 0.6)`,
          border: `1px solid ${newTheme.line || "rgba(100, 255, 218, 0.2)"}`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <div className={styles.titleGroup}>
            <i className="fas fa-file-alt" style={{ color: "#64ffda", marginRight: "10px", fontSize: "1.3rem" }}></i>
            <h2>Yogesh Pagar — Resume</h2>
          </div>
          <div className={styles.actions}>
            <button className={styles.downloadBtn} onClick={handleDownload} title="Download PDF">
              <i className="fas fa-download"></i> <span>Download</span>
            </button>
            <a
              href={`${resumeUrl}?v=${Date.now()}`}
              target="_blank"
              rel="noreferrer"
              className={styles.openNewBtn}
              title="Open in new tab"
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
            <button className={styles.closeBtn} onClick={onClose} title="Close Modal">
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>

        <div className={styles.iframeContainer}>
          <iframe
            src={`${resumeUrl}?v=${Date.now()}#toolbar=1&navpanes=0`}
            title="Yogesh Pagar Resume PDF"
            className={styles.pdfIframe}
          />
        </div>

        <div className={styles.footer}>
          <button className={styles.secondaryDownload} onClick={handleDownload}>
            <i className="fas fa-file-download"></i> Download Resume PDF
          </button>
          <button className={styles.closeSecondary} onClick={onClose}>
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
