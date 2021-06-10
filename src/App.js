import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="page-wrapper">
        <section className="content">
          <div className="intro-part">
            <p>Hi! My name is Angelic Andersson</p>
            <br></br>
            <p>I am a junior frontend developer with big interest in UI & UX</p>
          </div>
          <section className="projects">Projects</section>
          <section className="skills">Skills</section>
          <section className="experiences">Experiences</section>
        </section>
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
      </div>
    </div>
  );
}

export default App;
