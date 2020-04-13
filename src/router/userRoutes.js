import { Router } from 'express';

const userRoutes = Router();

userRoutes.get('/', (req, res) => {
  res.render('user/home');
});

userRoutes.get('/subcategory', (req, res) => {
  res.render('user/subcategory');
});

userRoutes.get('/ticket/new', (req, res) => {
  res.render('user/ticket');
});

export default userRoutes;
