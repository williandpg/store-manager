<h1><strong>Store Manager</strong></h1>

<h2><strong>Descrição</strong></h2>
<p align="justify">
  O Store Manager é uma API RESTful desenvolvida utilizando arquitetura em camadas.
  O objetivo é construir um sistema de gerenciamento de vendas no qual é possível criar, visualizar, atualizar e deletar produtos e vendas, com persistência de dados em MySQL.
  O projeto também inclui testes automatizados para garantir a qualidade das implementações e a confiabilidade das regras de negócio.
</p>

<h2><strong>Funcionalidades</strong></h2>
<ul>
  <li align="justify"><strong>CRUD de Produtos</strong>: criar, listar, buscar por ID, atualizar e remover produtos.</li>
  <li align="justify"><strong>CRUD de Vendas</strong>: criar, listar, buscar por ID, atualizar e remover vendas.</li>
  <li align="justify"><strong>Validações e Regras de Negócio</strong>: validação de payloads, IDs, quantidades e tratamento de erros padronizado.</li>
</ul>

<h2><strong>Demonstração do Projeto</strong></h2>
<p align="center">
  <em> Sem imagem de preview no momento. Em breve.</em>
</p>

<h2><strong>Tecnologias Utilizadas</strong></h2>
<ul>
  <li align="justify"><a href="https://nodejs.org/" target="_blank"><strong>Node.js</strong></a>: Runtime JavaScript utilizado para construir o backend da API.</li>
  <li align="justify"><a href="https://expressjs.com/" target="_blank"><strong>Express</strong></a>: Framework para criação de rotas, middlewares e estrutura REST.</li>
  <li align="justify"><a href="https://www.mysql.com/" target="_blank"><strong>MySQL</strong></a>: Banco de dados relacional utilizado para persistência de produtos e vendas.</li>
</ul>

<h2><strong>Estrutura do Projeto</strong></h2>
<p align="justify">A estrutura do projeto é organizada da seguinte forma:</p>
<pre><code>
/
├── backend/
│   ├── src/                # Pasta contendo o código-fonte da API
│   └── tests/              # Pasta contendo os testes automatizados  
├── sql/                    # Pasta contendo os arquivos SQL
│   ├── 01-migration.sql
│   └── 02-seed.sql
├── docker-compose.yml
└── README.html
</code></pre>

<h2><strong>Contato</strong></h2>
<p>
  <strong>Willian Gonçalves</strong> | 
  <a href="https://www.linkedin.com/in/williandpg/" target="_blank"><strong>LinkedIn</strong></a> | 
  <a href="https://github.com/williandpg" target="_blank"><strong>Github</strong></a> | 
  <a href="https://williandpg.github.io/" target="_blank"><strong>Portfólio</strong></a> | 
  <a href="mailto:goncalves.wdp@outlook.com" target="_blank"><strong>Email</strong></a>
</p>

<h2><strong>Créditos</strong></h2>
<p align="justify">
  Projeto foi desenvolvido como parte do curso de Desenvolvimento Web Full Stack oferecido pela Trybe.
</p>

<details>
  <summary><strong>English Version</strong></summary>

  <h1><strong>Store Manager</strong></h1>

  <h2><strong>Description</strong></h2>
  <p align="justify">
    Store Manager is a RESTful API built using a layered architecture.
    The goal is to implement a sales management system where you can create, view, update, and delete products and sales records, using MySQL for data persistence.
    The project also includes automated tests to ensure reliability and correctness across the application layers.
  </p>

  <h2><strong>Features</strong></h2>
  <ul>
    <li align="justify"><strong>Products CRUD</strong>: create, list, get by ID, update, and delete products.</li>
    <li align="justify"><strong>Sales CRUD</strong>: create, list, get by ID, update, and delete sales.</li>
    <li align="justify"><strong>Validations and Business Rules</strong>: payload validation, IDs, quantities, and standardized error handling.</li>
  </ul>

  <h2><strong>Project Demonstration</strong></h2>
  <p align="center">
    <em> No preview image available at the moment. Coming soon.</em>
  </p>

  <h2><strong>Technologies Used</strong></h2>
  <ul>
    <li align="justify"><a href="https://nodejs.org/" target="_blank"><strong>Node.js</strong></a>: JavaScript runtime used to build the backend API.</li>
    <li align="justify"><a href="https://expressjs.com/" target="_blank"><strong>Express</strong></a>: Framework for building REST routes, middlewares, and API structure.</li>
    <li align="justify"><a href="https://www.mysql.com/" target="_blank"><strong>MySQL</strong></a>: Relational database used to persist products and sales data.</li>
  </ul>

  <h2><strong>Project Structure</strong></h2>
  <p align="justify">The project structure is organized as follows:</p>
  <pre><code>
  /
  ├── backend/
  │   ├── src/                # Folder containing the API source code
  │   └── tests/              # Folder containing the automated tests
  ├── sql/                    # Folder containing the SQL files
  │   ├── 01-migration.sql
  │   └── 02-seed.sql
  ├── docker-compose.yml
  └── README.html
  </code></pre>

  <h2><strong>Contact</strong></h2>
  <p>
    <strong>Willian Gonçalves</strong> |
    <a href="https://www.linkedin.com/in/williandpg/" target="_blank"><strong>LinkedIn</strong></a> |
    <a href="https://github.com/williandpg" target="_blank"><strong>Github</strong></a> |
    <a href="https://williandpg.github.io/" target="_blank"><strong>Portfolio</strong></a> |
    <a href="mailto:goncalves.wdp@outlook.com" target="_blank"><strong>Email</strong></a>
  </p>

  <h2><strong>Credits</strong></h2>
  <p align="justify">
    This exercise was developed as part of the Web Development Full Stack course offered by Trybe.
  </p>
</details>
