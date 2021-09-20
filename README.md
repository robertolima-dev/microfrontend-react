# Microfrontend com React
Três projetos em React gerenciado por um container. Ao clonar o projeto, verifique os quatro projetos. O container gerencia o microfrontend, o projeto cat é apenas um componente que renderiza imagens randômicas de gatos, o projeto dogs também renderiza imagens de cachorro randomicamente e o projeto greeting é adiconar um texto à uma imagem. Rode npm i em todos os projetos e npm start para inicir cada um deles. Cada projeto irá iniciar em uma porta que são 3000, 3001, 3002 e 3003, mas a porta 3000 está o container. 

## Clone o projeto
git@github.com:robertolima-dev/microfrontend-react.git

## Variáveis de ambiente
$ cd container
$ vim .env

REACT_APP_DOGS_HOST=http://localhost:3001
REACT_APP_CATS_HOST=http://localhost:3002
REACT_APP_GREETING_HOST=http://localhost:3003

## Instalação e iniciando o projeto
$ cd container
$ npm install
$ npm start

$ cd cat
$ npm install
$ npm start

$ cd dogs
$ npm install
$ npm start

$ cd greeting
$ npm install
$ npm start

## O servidor inciará na porta:3000 - acesse <http:localhost:3000> 


## License
[MIT](https://choosealicense.com/licenses/mit/)

