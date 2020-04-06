# NeoDesk

## Instalação

Para o servidor de desenvolvimento, primeiro copiamos o arquivo `.env` e
preenchemos nossas variaveis de ambiente:

```bash
$ cp .env.example .env
```

Depois instalamos as dependencias do projeto:

```bash
$ npm install
```

Finalmente rodamos o script definido em `package.json`:

```bash
$ npm run dev
```

## Tecnologias utilizadas

### Ambiente de produção

- [express](https://expressjs.com/pt-br/): framework minimalista que orquestra
  toda a aplicação. Nele podemos definir rotas, controllers, models, views,
  middlewares, serviços e validações.

- [ejs](https://ejs.co/#docs): linguagem de templeting que nos permite manipular
  e executar código javascript na geração das views, possibilitando um conteudo
  dinamico.

- [express-ejs-layouts](https://github.com/Soarez/express-ejs-layouts): Nos
  permite definir layouts, arquivos que integram todas as views da aplicação em
  uma única estrutura e estilo. Assim podemos reutilizar mais código e aumentar
  a componentização.

- [dotenv](https://github.com/motdotla/dotenv#usage): modulo que nos permite
  carregar variaveis de ambiente detro de arquivos `.env`, e acessa-las dentro
  da nossa aplicação pela propiedade do NodeJS
  [`process.env`](https://nodejs.org/docs/latest/api/process.html#process_process_env).

- [cors](https://github.com/expressjs/cors#usage): middleware
  que implementa o padrão da industria Implementa o padrão da industria de
  [Cross-Origin Resource Sharing](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Controle_Acesso_CORS),
  permitindo a transferência de dados entre dominios web diferentes de uma
  maneira segura.

### Ambiente de desenvolvimento

- [youch](https://github.com/poppinss/youch#youch): pacote que captura e formata
  erros de uma maneira amigavel ao debugging.

- [nodemon](https://github.com/remy/nodemon#usage): monitora e recarrega
  automaticamente as mudanças nos arquivos enquanto codamos.

- [prettier](https://prettier.io/playground/): formata nosso codigo para ficar
  organizado e legível.

- [sucrase](https://github.com/alangpierce/sucrase#sucrase): o compilador de
  javascript mais veloz do mercado.
