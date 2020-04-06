import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  res.render('index');
});

routes.get('/login', (req, res) => {
  res.render('login');
});

routes.get('/password_reset', (req, res) => {
  res.render('password_reset');
});

routes.get('/user', (req, res) => {
  res.render('user/home');
});

routes.get('/user/subcategory', (req, res) => {
  res.render('user/subcategory');
});

routes.get('/user/ticket/new', (req, res) => {
  res.render('user/ticket_open')
})

routes.get('/operator', (req, res) => {
  res.render('operator/home');
});

export default routes;
