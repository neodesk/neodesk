import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  res.render('main')
})

routes.get('/login', (req, res) => {
  res.render('login')
})

routes.get('/login_murilo', (req, res) => {
  res.render('login_murilo/user-login.html')
})

routes.get('/password_reset', (req, res) => {
  res.render('password_reset')
})

routes.get('/user', (req, res) => {
  res.render('user')
})

routes.get('/operator', (req, res) => {
  res.render('operator')
})

export default routes;