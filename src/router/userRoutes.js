import { Router } from 'express';

import TicketController from '../controllers/TicketController';
import auth from '../middlewares/auth';

const userRoutes = Router();

userRoutes.get('/', auth, (req, res) => {
  res.render('user/home', {user : req.session.user});
});

userRoutes.get('/category', (req, res) => {
  res.render('user/category');
});

userRoutes.get('/subcategory', (req, res) => {
  res.render('user/subcategory');
});

userRoutes.get('/tickets/new', (req, res) => {
  res.render('user/new_ticket');
});

userRoutes.post('/tickets/new', TicketController.create);

userRoutes.get('/tickets', TicketController.index);

userRoutes.get('/tickets/show', (req, res) => {
  res.render('user/show_ticket');
});

export default userRoutes;
