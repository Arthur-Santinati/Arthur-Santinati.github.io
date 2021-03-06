import React from "react";

function Header() {
  return (
    <header className="header-container" id="Home">
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
                  <a href="#Home">Home</a>
                </li>
                <li>
                  <a href="#Sobre">Sobre</a>
                </li>
                <li>
                  <a href="#Projects">Projetos</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <h1> Hello My Name is Arthur Santinati.</h1>
      <h2> I'm a front end developer</h2>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/arthur-santinati/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
        <a
          href="https://github.com/Arthur-Santinati"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
    </header>
  );
}

export default Header;
