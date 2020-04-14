import { Router } from 'express';

import fakerEjs from '../middlewares/fakerEjs'

const router = Router();

router.use(fakerEjs);

router.get('/', (req, res) => {
  res.render('root');
});

router.get('/login', (req, res) => {
  res.render('access/login');
});

router.get('/password_reset', (req, res) => {
  res.render('access/password_reset');
});

router.get('/404', (req, res) => {
  res.render('access/404');
});

router.get('/500', (req, res) => {
  res.render('access/500');
});

router.get('/user', (req, res) => {
  res.render('user/home');
});

router.get('/user/subcategory', (req, res) => {
  res.render('user/subcategory');
});

router.get('/user/ticket/new', (req, res) => {
  res.render('user/ticket')
})

router.get('/user/ticket/list', (req, res) => {
  res.render('user/ticket_list')
})

router.get('/operator', (req, res) => {
  res.render('operator/home');
});

router.get('/operator/tickets', (req, res) => {
  res.render('operator/tickets');
});

router.get('/operator/users', (req, res) => {
  res.render('operator/users');
});

router.get('/operator/kanban', (req, res) => {
  res.render('operator/kanban');
});

router.get('*', (req, res) => {
  return res.status(404).render('access/404');
});

export default router;
