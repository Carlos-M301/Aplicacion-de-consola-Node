const fs = require('fs');
const color = require('colors');

color.setTheme({
    lineas: ['red', 'yellow', 'bold'],
    b: 'yellow',
    x: ['magenta', 'cyan'],
    igual: ['brightWhite', 'strikethrough'],
    resultado: ['rainbow', 'bgWhite']
});


const crearArchivoAsync = async (base = 2, list, hasta) => {

    let salida = "";
    let consola = "";
    try {
        for(let i = 1; i <= hasta; i++){
            salida += `${base} x ${i} = ${ i *base} \n`;
            consola += `${color.b(base)} ${'x'.x} ${color.b(i)} ${'='.igual} ${ i *base} \n`;
        }
        if(list){
            console.log("===========================".lineas);
            console.log("======= Tabal del".lineas, color.b(base) ,"=======".lineas);
            console.log("===========================".lineas);
            console.log(consola);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
    
        return `Tabla del ${base}.txt creada`.resultado;
    } catch (error) {
        throw error;
    }
}
//Permite exportar
module.exports = {
    crearArchivoAsync,
}