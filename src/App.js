import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="page-wrapper">
        <section className="content">
          <div className="intro-part">
            <p>
              Hi! My name is <strong>Angelic Andersson</strong>
            </p>
            <br></br>
            <p>I am a junior frontend developer with big interest in UI & UX</p>
          </div>
          <section className="projects"></section>
          <section className="skills"></section>
          <section className="experiences"></section>
        </section>

        <section className="menu">
          <div className="profile">this is a picture</div>
          <div className="menu-items">
            <li>Projects</li>
            <li>Skills</li>
            <li>Experiences</li>
            <li>About Me</li>
          </div>
          <div className="contacts">
            <p>Social Medias</p>
            <div className="media-icons">
              <section className="media-linkedin">
                <a href="https://www.linkedin.com/in/angelic-andersson-20a522192/">
                  <FaLinkedin />
                  <p className="media-text">LinkedIn</p>
                </a>
              </section>
              <section className="media-github">
                <a href="https://github.com/AngelicMob?tab=repositories">
                  <AiOutlineGithub />
                  <p className="media-text">Github</p>
                </a>
              </section>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
