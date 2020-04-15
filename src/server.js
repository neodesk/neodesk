import app from './app';
import opn from 'opn';

const port = process.env.PORT;

app.listen(port);

if (process.env.AUTO_OPEN === "true") opn(`http://localhost:${port}/`);

console.log(`👂Listening on ⚓port ${port}...`);
