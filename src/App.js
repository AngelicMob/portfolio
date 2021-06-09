import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="page-wrapper">
        <section className="menu">
          <img></img>
          <div className="menu-items">
            <li>Projects</li>
            <li>Skills</li>
            <li>Experiences</li>
            <li>About Me</li>
          </div>
          <div className=""></div>
        </section>

        <section className="content">
          <div className="intro-part">
            <h3>Hi! My name is Angelic Andersson</h3>
            <br></br>
            <h3>
              I am a junior frontend developer with big interest in UI & UX
            </h3>
          </div>
          <section className="projects">Projects</section>
          <section className="skills">Skills</section>
          <section className="experiences">Experiences</section>
        </section>
      </div>
    </div>
  );
}

export default App;
