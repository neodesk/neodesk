import { Router } from 'express';

const userRoutes = Router();

userRoutes.get('/', (req, res) => {
  res.render('user/home');
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

userRoutes.get('/tickets', (req, res) => {
  res.render('user/tickets');
});

userRoutes.get('/tickets/show', (req, res) => {
  res.render('user/show_ticket');
});

export default userRoutes;
