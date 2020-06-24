import 'dotenv/config';

import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import { join, resolve } from 'path';
import cors from 'cors';
import session from 'express-session'

import router from './router';
import youch from './config/youch';

import './database';

class App {
  constructor() {
    this.server = express();

    this.config();
    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  config() {
    this.server.use(express.static(resolve(__dirname, '..', 'public')));

    this.server.set('view engine', 'ejs');
    this.server.set('views', join(__dirname, 'views'));

    
    this.server.use(expressLayouts);
    this.server.set('layout extractScripts', true);
    this.server.set('layout extractStyles', true);
    this.server.set('layout extractMetas', true);
    this.server.set('layout', 'layouts/default');

    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));

    this.server.use(cors());

    this.server.use(session({
      secret:'e00886e4cea6848134accb94ab0177f2',
      resave:true,
      saveUninitialized: true
    }))
  }

  middlewares() {}

  routes() {
    this.server.use(router);
  }

  exceptionHandler() {
    this.server.use(youch);
  }
}

export default new App().server;
