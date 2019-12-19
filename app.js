/*
//requires
const fs = require('fs');
// const fs = require('express');//Paquetes no nativos de node
// const fs = require('./fs');//Son archivos escritos propios almacenados internamente

let base = 3;

let data = '';

for (let i = 1; i < 11; i++) {
    data += `${base} * ${i} = ${base*i}\n`;
}

fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${base}.txt ha sido creado`);
});
*/

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); //Forma destructuración
const argv = require('./config/yargs').argv; //argv es todo el archivo, con el .argv al final, indica al objeto
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite)
            .catch(e => console.log(e));
        break;

    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
        break;
}

// console.log(process.argv);
// let argv2 = process.argv;

// console.log(argv.base);
// console.log(argv.l);
// console.log(argv2);

// let parametro = argv[2];
// let base = parametro.split('=')[1];