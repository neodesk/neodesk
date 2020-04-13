import { Router } from 'express';

import fakerEjs from '../middlewares/fakerEjs';

import accessRoutes from './accessRoutes';
import userRoutes from './userRoutes';
import operatorRoutes from './operatorRoutes';

const router = Router();

router.use(fakerEjs);

router.use('/', accessRoutes);
router.use('/user', userRoutes);
router.use('/operator', operatorRoutes);

router.get('*', (req, res) => {
  return res.status(404).render('access/404');
});

export default router;
