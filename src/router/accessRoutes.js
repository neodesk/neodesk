import { Router } from 'express';
import AccessController from '../controllers/AccessController';
import auth from '../middlewares/auth';

const accessRoutes = Router();

accessRoutes.get('/', (req, res) => {
  res.render('root');
});

accessRoutes.get('/login', AccessController.index);
accessRoutes.post('/login', AccessController.show);
accessRoutes.get('/logout', auth, AccessController.destroy)

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
