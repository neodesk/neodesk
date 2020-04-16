import app from './app';

const port = process.env.PORT || 5000;

app.listen(port);

if (process.env.AUTO_OPEN === 'true') {
  const opn = require('opn');

  opn(`http://localhost:${port}/`);
}

console.log(`👂Listening on ⚓port ${port}...`);
