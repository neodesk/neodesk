import express from "express";
import routes from "./routes";

class App {
  constructor() {
    this.server = express();

    this.config();
    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  config() {
    this.server.use(express.static("public"));

    this.server.set("view engine", "ejs");
    this.server.set("views", __dirname + "/views");
  }

  middlewares() {}

  routes() {
    this.server.use(routes);
  }

  exceptionHandler() {}
}

export default new App().server;
