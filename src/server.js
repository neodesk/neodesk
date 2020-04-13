import app from './app';
import opn from 'opn';

const port = process.env.PORT;

app.listen(port);
opn(`http://localhost:${port}/`)
console.log(`👂Listening on ⚓port ${port}...`);
