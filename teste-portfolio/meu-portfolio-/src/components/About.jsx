import React from "react";
import myPhoto from "../images/arthur.jpg";

function About() {
  document.title = "My Portfolio";
  return (
    <div>
      <div className="container" id="Sobre">
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <a href="#outras" className="nav-link">
                Outras Habilidades
              </a>
            </li>
            <li className="nav-item">
              <a href="#orgulho" className="nav-link">
                Principais Habilidades
              </a>
            </li>
          </ul>
        </nav>
        <img
          alt="foto-minha"
          src={myPhoto}
          width="200px"
          height="350px"
          className="rounded float-end"
        ></img>
        <p> Estudante de desenvolvimento web na Trybe</p>
        <p>
          {" "}
          Gosto muito de aprender e procuro cada dia mais melhorar nos assuntos
          que possuo conhecimento
        </p>
      </div>
      <div className="container ul">
        <p id="orgulho">
          <strong>Habilidades que mais me orgulho</strong>
        </p>
        <ul>
          <li>Colaboração</li>
          <li>Comunicação</li>
          <li>Organização</li>
        </ul>
        <p id="outras">
          {" "}
          <strong>Outras Habilidades.</strong>
        </p>
        <ul>
          <li>Git e GitHub </li>
          <li>Básico de python</li>
          <li>Unix e Bash</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
