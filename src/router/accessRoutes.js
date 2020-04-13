import { Router } from 'express';

const accessRoutes = Router();

accessRoutes.get('/', (req, res) => {
  res.render('root');
});

accessRoutes.get('/login', (req, res) => {
  res.render('access/login');
});

accessRoutes.get('/password_reset', (req, res) => {
  res.render('access/password_reset');
});

accessRoutes.get('/404', (req, res) => {
  res.render('access/404');
});

accessRoutes.get('/500', (req, res) => {
  res.render('access/500');
});

export default accessRoutes;
