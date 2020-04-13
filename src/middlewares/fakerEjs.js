import faker from 'faker';

export default (req, res, next) => {
  faker.locale = 'pt_BR';
  res.locals.faker = faker;

  return next();
};
