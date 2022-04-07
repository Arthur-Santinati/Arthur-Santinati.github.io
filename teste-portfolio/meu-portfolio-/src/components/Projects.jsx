import React from "react";

function Projects() {
  return (
    <div>
      <main className="container" id="Projects">
        <h1 className="card-container"> Meus Projetos </h1>
        <div className="card-container">
          <a
            href="https://clever-torvalds-0f147c.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="card-trybewarts card">
              <div className="card-wrapper">
                <h2> Trybe Warts</h2>
                <p> Clique pra preencher seu formulário!</p>
              </div>
            </div>
          </a>
          <div className="card-text">
            Criação de formulários usando HTML, CSS utilizado para criar layouts flexíveis, página feita como referencia a trilogia de Harry Potter e mesclando a tecnologia adquirida no curso junto. 
          </div>
        </div>
        <div className="card-container">
          <a
            href="https://scintillating-raindrop-6d9412.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <div className="card-encookado card">
              <div className="card-wrapper">
                <h2> Encookado </h2>
                <p> Clique para começar sua receita!</p>
              </div>
            </div>
          </a>
          <div className="card-text">
          O objetivo do projeto é abordar um “livro de receitas”, mas em forma de aplicativo, nele você faz o seu login, e assim que entra procura pela receita da sua escolha, podendo usar filtros, tanto como bebidas, como comidas, e tendo opções de explorar várias receitas que talvez você não conheça. 
          </div>
        </div>

        <div className="card-container">
          <a
            href="https://clinquant-heliotrope-080da0.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <div className="card-trybe-tunes card">
              <div className="card-wrapper">
                <h2> TrybeTunes</h2>
                <p>Clique e vem ouvir sua música!</p>
              </div>
            </div>
          </a>
            <div className="card-text">
            Esse projeto funciona como um aplicativo de música basicamente, uso de APIs para pesquisar bandas ou artistas, recuperar as músicas de cada álbum e salvar as músicas favoritas, além de editar as informações da pessoa logada. 
            <p>
              Lidando com requisições assíncronas e promises. Fazemos uso dos métodos de ciclo de vida (lifecycle methods) e de estados para controlar o que é renderizado por seus componentes dependendo do momento em que as requisições se encontram.
            </p>
            </div>
        </div>

        <div className="card-container">
          <a
            href="https://amazing-pika-359441.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <div className="card-to-do-list card">
              <div className="card-wrapper">
                <h2>To do List</h2>
                <p>Clique pra começar a adicionar suas tarefas!</p>
              </div>
            </div>
          </a> 
          <div className="card-text">
            Uma página que você pode adicionar suas tarefas a serem feitas, selecionar uma tarefa, excluir as que já foram concluídas, projeto simples mas de grande aprendizado, feito no módulo de fundamentos da Trybe.
          </div>
        </div>
      </main>
    </div>
     
  );
}

export default Projects;
