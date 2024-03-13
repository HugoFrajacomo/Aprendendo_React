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
2) Abra o terminal intregrado ao VS e digite o seguinte comando:
```
npx create-react-app nome-do-seu-projeto
```

Obs: Caso ocorra algum erro digite os seguintes comandos:
```
npm cache clean -f
npm install -g create-react-app
npx create-react-app nome-do-seu-projeto
```
3) Digite o comando para selecionar a pasta do projeto:
```
cd .\nomeDoProjeto\
```
5) Logo após, inicie a palicação com:
```
NPM start
```

## Instalando uma aplicação com React -- npm create vite@latest

1) Abra o VS code na pasta da aplicação
2) Abra o terminal intregrado ao VS e digite o seguinte comando:
```
npm create vite@latest
```

O terminal irá lhe dar algumas opções.
```
Ok to proceed: Y
Project name: nomeDoProjeto 
```
Na lista selecione React utilizando as setas do teclado ou o mouse
```
Selecione entre JavaScript ou TypeScript
```
3) Para rodar o projeto digite:

```
npm run dev
```
   
## Instalação Opcional

1) Extensão do VS code para o React: ES7 + React/Redux/React-Native snippets. -> Permite o autocompletar de códigos em React
![image](https://github.com/HugoFrajacomo/Aprendendo_React/assets/125396485/4cbdfcc9-99a6-48da-ab51-2d43aca551e5)

2) Configurando o Emmet - Extensão para ajudar a escrever HTML/Css mais rápido<br>
<p>File>preferences>Settings e procure por Emmet.</p><br>
<p>Adicione o javascriptreact ao include languages.</p>

![image](https://github.com/HugoFrajacomo/Aprendendo_React/assets/125396485/8593702c-6357-47fd-8fe8-7ae497f0f3ac)

3) Prettier - ferramenta de formatação de código que auxilia os desenvolvedores a manter um estilo de código limpo e agradável para trabalhar.
![image](https://github.com/HugoFrajacomo/Aprendendo_React/assets/125396485/f7f51023-2791-41df-a704-2dbfc23cf96c)



## Estrutura base

1) node_modules -> Local onde ficam as dependências do projeto
2) public -> Assets estáticos e HTML de inicialização
3) scr -> Espaço de programação
4) Scr/index.js -> Arquivo de inicilização do react
5) scr/App.js -> Componente principal da aplicação

## Criação de Componentes

A aplicação utilizada para este topico será nomeada de "fundamentos". <br>

1) Crie uma pasta componentes dentro de src chamada "components"
2) Crie um arquivo .js com nome do seu componente
3) Estrutura:
![FirstComponent](https://github.com/HugoFrajacomo/Aprendendo_React/assets/125396485/5e5ea05d-d845-4b39-8acf-b20fe6d8d98d)
<p>Devemos criar uma Arrow Function com o nome do nosso componente. Obrigatóriamente a função deve ter um return onde será inserida o bloco de código html do componente.</p>
<p>É possivel inserir uma lógica ao componente antes do return.</p>
<p>Também devemos declarar o export default do componente, que disponibilizará seu acesso na aplicação.</p>

## Importar Componente

Em app.js faremos a nossa importação do componente a aplicação. 

1) utilize o comando import nome_do_componente from 'local_do_componente'. Obs: ao digitar o import com nome do componente é possivel clicar tab para autocompletar. Desta forma já estará no diretório correto do componente.
2) Insira o componente utilizando a tag com o nome dele <nome_do_componente></nome_do_componente>

Ex:
![InsertComponete](https://github.com/HugoFrajacomo/Aprendendo_React/assets/125396485/53d97973-ddbb-4571-a48e-67fe9269600a)

Componentes também podem ser importados para dentro de outros componentes. Da mesma forma que importamos na aplicação principal. Lembre-se que sempre que existe uma hierarquia entre os componentes. Logo a aplicação principal é componente pai de primeiro nível, a importada na aplicação principal é de segundo nível, já a que foi importada dentro do componente, será de terceiro nível. 

## Template Expressions

<p>Forma de executar códigos JS no JSX. Toda função JS deve estar dentro de colchetes. Ex:</p>

![Js no JSX](https://github.com/HugoFrajacomo/Aprendendo_React/assets/125396485/8df938ee-6d8f-44bd-aa57-ed863f4dc1ee)

## Eventos

1) Button (Aplicação - fundamentos)
![eventoButton](https://github.com/HugoFrajacomo/Aprendendo_React/assets/125396485/af242035-57e9-4aab-8a20-f2b5f0c94a73)

<p>Para ter mais informações sobre os eventos podemos utilizar o parâmetro "e" na função do evento. Dentro delas temos que colocar console.log(e)</p>


## Imagens
<p>Existem 2 formas de importar imagens utilizando o react.</p>
1) Importando imagens da pasta public. para realizar a importação basta utilizar /nome_da_imagem_formato. 

```
<img src="/img1.png" alt="logotipo do react" />
```
2) Importando a imagem através da atribuição de uma variável.

Primeiro use o comando import para atribuir o caminho da imagem a uma variável

```
import img2 from "./assets/img2.webp";
```
Depois você poderá chamar a imagem utilizando as chaves {nome_da_variável}

```
<img src={img2} alt="imagem de teste" />
```
![code](https://github.com/HugoFrajacomo/Aprendendo_React/assets/125396485/d8888095-05ab-4431-83dd-4de0f5b7bc5f)

## Hooks

Hooks no React são funções especiais que permitem que componentes funcionais tenham estados, efeitos e outras características previamente disponíveis apenas em componentes de classe. Eles facilitam a gestão de estado e o ciclo de vida dos componentes, proporcionando uma abordagem mais concisa e legível para o desenvolvimento. Alguns hooks comuns incluem useState para gerenciar o estado, useEffect para lidar com efeitos colaterais em componentes funcionais, entre outros, contribuindo para um código mais modular e eficiente em termos de processamento de memória.

Os hooks sempre serão inicializados utilizando o comando use após serem importados. Por exemplo: useState;

A função useState retorna um valor e uma função para atualizar o valor. 
![hook](https://github.com/HugoFrajacomo/Aprendendo_React/assets/125396485/79f95f9f-123c-4240-9722-1e368855aef3)

React doc: https://react.dev/reference/react/useState


