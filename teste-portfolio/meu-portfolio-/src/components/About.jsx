import React from "react";

function About() {
  return (
    <div>
      <header className="header-container">
        <div className="header">
          <div className="checkbox-container">
            <div className="checkbox-wrapper">
              <input type="checkbox" id="toggle" />
              <label for="toggle" className="checkbox">
                <div className="trace"></div>
                <div className="trace"></div>
                <div className="trace"></div>
              </label>
              <div className="menu"></div>
                <nav className="menu-items">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Sobre</a>
                    </li>
                    <li>
                      <a href="#">Projetos</a>
                    </li>
                  </ul>
                </nav>
            </div>
          </div>
        </div>
        <h1> Hello My Name is Arthur Santinati.</h1>
        <h2> I'm a front end developer</h2>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/arthur-santinati/" target="_blank" 
            rel="noreferrer">Linkedin</a>
          <a href="https://github.com/Arthur-Santinati" target="_blank" 
            rel="noreferrer">Github</a>
        </div>
      </header>
      <main className="container">
        <div className="card-container">
          <a
            href="https://clever-torvalds-0f147c.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="card-trybewarts card">
              <div className="card-wrapper">
                <h2> Trybe Warts</h2>
                <p> Clique pra ver ele funcionando!</p>
              </div>
            </div>
          </a>
          <div className="card-text">
            Lorem ipsum dolor sit amet, consect
          </div>
        </div>

        {/* <div className="card-container">
          <a
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <div className="card">
              <div className="card-wrapper">
                <h2> Projeto 2</h2>
                <p>Vem ver</p>
              </div>
            </div>
            <div className="card-text">
              Lorem ipsum dolor sit amet, consect
            </div>
          </a>

        </div> */}

        <div className="card-container">
          <a
            href="https://amazing-pika-359441.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <div className="card-to-do-list card">
              <div className="card-wrapper">
                <h2>To do List</h2>
                <p>Clique pra ver ele funcionando!</p>
              </div>
            </div>
          </a> 
          <div className="card-text">
            Lorem ipsum dolor sit amet, consect
          </div>
        </div>
      </main>
    </div>
     
  );
}

export default About;
