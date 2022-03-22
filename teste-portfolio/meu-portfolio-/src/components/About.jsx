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
          <div className="card">
            <div className="card-wrapper">
              <h2> Projeto 1</h2>
              <p>Vem ver</p>
            </div>
          </div>
          <div className="card-text">
            Lorem ipsum dolor sit amet, consect
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="card-wrapper">
              <h2> Projeto 2</h2>
              <p>Vem ver</p>
            </div>
          </div>
          <div className="card-text">
            Lorem ipsum dolor sit amet, consect
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="card-wrapper">
              <h2> Projeto 3</h2>
              <p>Vem ver</p>
            </div>
          </div>
          <div className="card-text">
            Lorem ipsum dolor sit amet, consect
          </div>
        </div>

      </main>

      <footer className="footer">
        Feito por Arthur Santinati :)
      </footer>
    </div>
     
  );
}

export default About;
