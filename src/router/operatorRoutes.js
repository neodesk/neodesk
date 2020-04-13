import { Router } from 'express';

const operatorRoutes = Router();

operatorRoutes.get('/', (req, res) => {
  res.render('operator/home');
});

operatorRoutes.get('/tickets', (req, res) => {
  res.render('operator/tickets');
});

operatorRoutes.get('/users', (req, res) => {
  res.render('operator/users');
});

operatorRoutes.get('/users/edit', (req, res) => {
  res.render('operator/edit_user');
});

export default operatorRoutes;
