//File System
const { crearArchivoAsync } = require('./helpers/mutiplicar');
const argv = require('./config/yargs')

console.clear();

crearArchivoAsync(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo))
    .catch(error => console.log(error));








// console.log(argv);
// console.log(argv.base)

//console.log(process.argv);

// Te muestra lo que recibe al ejecutar un comando
// console.log(process.argv);

// //Esta forma contiene muchos inconvenientes
// const [ , , arg3 = '--base=5'] = process.argv;
// const [ , base = 5] = arg3.split("=");

// fs.writeFile(`tabla-${base}.txt`,salida,(error) => {
//     if(error) throw error;

//     console.log(`Tabla del ${base} creada`);
// })