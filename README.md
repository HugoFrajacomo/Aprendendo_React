## O que é React? 

React é uma biblioteca de JavaScript utilizada no desenvolvimento de interfaces de usuário (UI). O React permite construir componentes reutilizáveis que representam partes específicas da interface. A principal característica é o conceito de "Virtual DOM", onde as alterações na interface são primeiro aplicadas a uma representação virtual, otimizando as atualizações no DOM real. Isso melhora a eficiência e o desempenho das aplicações, especialmente em aplicações de página única (SPA). Com o React, é possível criar interfaces dinâmicas e responsivas, facilitando a construção de aplicações web interativas. Além disso, sua popularidade é evidenciada pela robusta comunidade de desenvolvedores e vasta quantidade de recursos disponíveis.

## Onde é utilizado?

No contexto do desenvolvimento, frameworks como React, Angular e Vue.js são comumente utilizados para criar SPAs. Eles facilitam a manipulação do DOM, a gestão do estado da aplicação e a navegação entre as diferentes seções. Além disso, SPAs oferecem melhor desempenho, já que reduzem a carga no servidor e otimizam a transferência de dados.

## Instalação dos requisitos iniciais de um projeto React

Instalação Node e o NPM Windows:
   <ul>
     <li>Acesse o site: nodejs.org</li>
     <li>Faça o download da ultima versão LTS</li>
     <li>Instale a aplicação</li>
   </ul>
   
Obs: Para conferir se a atualização foi finalizada com sucesso, abra o CMD e digite o comando "node --version" e  "npm --version"

## Instalando uma aplicação com React -- Utilizando create-react-app
1) Abra o VS code na pasta da aplicação
2) Abra o terminal intregrado ao VS e digite o seguinte comando: npx create-react-app nome-do-seu-projeto

Obs: Caso ocorra algum erro digite os seguintes comandos
   <ul>
     <li>npm cache clean -f</li>
     <li>npm install -g create-react-app</li>
     <li>npx create-react-app nome-do-seu-projeto</li>
   </ul>

3) Digite o comando: cd .\nomeDoProjeto\
4) Logo após, digite: NPM start


## Instalando uma aplicação com React -- npm create vite@latest

1) Abra o VS code na pasta da aplicação
2) Abra o terminal intregrado ao VS e digite o seguinte comando: npm create vite@latest

O terminal irá lhe dar algumas opções.

   <ul>
     <li>Ok to proceed: Y</li>
     <li>Project name: nomeDoProjeto </li>
      <li>Na lista selecione React utilizando as setas do teclado ou o mouse</li>
      <li>Selecione entre JavaScript ou TypeScript</li>
   </ul>

3) Para rodar o projeto digite: npm run dev


