import { useState, useEffect, useCallback } from "react";
import bioData from "../data/bio.json";

const ABOUT_PATH = "/about";

function isAboutPath() {
  return typeof window !== "undefined" && window.location.pathname === ABOUT_PATH;
}

function About() {
  const [isOpen, setIsOpen] = useState(isAboutPath);

  const open = useCallback(() => {
    if (window.location.pathname !== ABOUT_PATH) {
      window.history.pushState({ modal: true }, "", ABOUT_PATH);
    }
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    if (window.history.state?.modal) {
      window.history.back();
    } else if (window.location.pathname === ABOUT_PATH) {
      window.history.pushState({}, "", "/");
    }
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const onPop = () => setIsOpen(isAboutPath());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close]);

  const handleTriggerClick = (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    open();
  };

  return (
    <>
      <span className="about-sentence">
        Do you want to know more? Click here:{" "}
        <a
          href={ABOUT_PATH}
          className="about-trigger"
          onClick={handleTriggerClick}
        >
          About
        </a>
      </span>
      {isOpen && (
        <div className="about-backdrop" onClick={close}>
          <div
            className="about-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="about-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="about-close"
              onClick={close}
              aria-label="Close"
            >
              ✕
            </button>
            <h2 id="about-title">About Alcarcia</h2>
            <p className="about-content">{bioData.bio.join("\n\n")}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default About;
