import { readdirSync } from 'fs';
import { basename, join } from 'path';

const fileNames = readdirSync(__dirname).filter(
  /*
   retorna apenas o nome dos arquivos não ocultos
   diferentes do atual com a extensao js para
   um novo array
  */
  (file) =>
    file.indexOf('.') !== 0 &&
    file !== basename(__filename) &&
    file.slice(-3) === '.js'
);

/*
  Adiciona a importacao dos arquivos encontrados
  para o array models
*/
const models = fileNames.map((file) => {
  return require(join(__dirname, file)).default;
});

console.info(`Successfully imported models: ${fileNames.join(', ')}`);

export default models;
