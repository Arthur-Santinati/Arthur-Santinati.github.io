import React from "react";
import myPhoto from "../images/arthur.jpg";

function About() {
  document.title = "My Portfolio";
  return (
    <div className="container">
      <h1 className="card-container">Um pouco sobre mim</h1>
      <div className="container-about">
        <div className="photo">
          <img
            alt="foto-minha"
            src={myPhoto}
            width="200px"
            height="350px"
            className="rounded float-end"
          ></img>
        </div>
        <div className="container-habilities">
          <h2>Habilidades que mais me orgulho</h2>
          <ul>
            <li>Colaboração</li>
            <li>Comunicação</li>
            <li>Organização</li>
            <li>Pró-Atividade</li>
            <li>Resolução de problemas</li>
            <li>Flexibilidade</li>
          </ul>
        </div>
        <div className="container-habilities">
          <h2>Habilidades Técnicas</h2>
          <ul>
            <li>Git e GitHub </li>
            <li>Unix e Bash</li>
            <li>React Native</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Redux</li>
            <li>React Router</li>
            <li>Api Consumption</li>
            <li>React Testing Library</li>
            <li>React Hooks e Context Api</li>
            <li>Docker e SQL</li>
          </ul>
        </div>
      </div>
      <div className="container">
        <h2 className="card-container"> Onde minha história com a tecnologia começou </h2>
        <p>Mesmo que seja um história cliche ela se encaixa bem na minha vida kkkkkkkk sempre gostei muito de video-games, tive meu primeiro contato com o computador aos 10 anos e sempre tinha essa curiosidade de como as coisas funcionam por detras dos panos, o tempo passou eu segui outros caminhos e por conta de um conhecido fiquei sabendo do curso da <strong> Trybe</strong> e então resolvi tentar me candidatar, com muito esforço fui aprovado e aqui estou eu apaixonado por programação e em busca de novas oportunidades 😁 </p>
      </div>
    </div>
  );
}

export default About;
