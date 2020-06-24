import { Router } from 'express';
import faker from 'faker';
import UserController from '../controllers/UserController';
import auth from '../middlewares/auth'

const operatorRoutes = Router();

operatorRoutes.get('/', auth, (req, res) => {
  res.render('operator/home', {operator: req.session.operator});
});

operatorRoutes.get('/tickets', (req, res) => {
  res.render('operator/tickets');
});

operatorRoutes.get('/tickets/show', (req, res) => {
  const ticketTitle = faker.lorem.words();

  res.render('operator/show_ticket', { ticketTitle });
});

operatorRoutes.get('/users', UserController.index);

operatorRoutes.get('/users/edit/:id', UserController.show);
operatorRoutes.get('/users/edit/op/:id', UserController.show);
operatorRoutes.get('/users/create', UserController.create);

operatorRoutes.delete('/users/edit/:id/delete')

operatorRoutes.get('/kanban', (req, res) => {
  res.render('operator/kanban');
});

export default operatorRoutes;
