import app from './app';
import opn from 'opn';

const port = process.env.PORT;

app.listen(port);
<<<<<<< HEAD

console.log(`Server 👂listening on ⚓port ${port}...`);
=======
opn(`http://localhost:${port}/`)
console.log(`👂Listening on ⚓port ${port}...`);
>>>>>>> ticket_open_operator
