//requires
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido para base; '${base}', no es un número`);
            return;
        } else if (!Number(limite)) {
            reject(`El valor introducido para límite: '${limite}', no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        // resolve(
        console.log('============'.green);
        console.log(`Tabla del ${base}`)
        console.log('============'.red);
        console.log(data);
        // );
    })
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`EL valor introducido '${base}', no es un número`);
            return;
        } else if (!Number(limite)) {
            reject(`El valor introducido para límite: '${limite}', no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);

            // console.log(`El archivo tabla-${base}.txt ha sido creado`);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}