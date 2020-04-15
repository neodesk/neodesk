import { Router } from 'express';
import faker from 'faker';

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
   const randomDate = new Date(faker.date.past())

   const dateYear = randomDate.getFullYear()
   const dateMonthRaw = randomDate.getMonth() + 1

   const dateMonth = Number(dateMonthRaw) < 10 ? '0' + dateMonthRaw : dateMonthRaw
   const dateDayRaw = randomDate.getDate()

   const dateDay = Number(dateDayRaw) < 10 ? '0' + dateDayRaw : dateDayRaw
   const dateString = `${dateYear}-${dateMonth}-${dateDay}`

  const user = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    dateString
  };

  res.render('operator/edit_user', user);
});

export default operatorRoutes;
