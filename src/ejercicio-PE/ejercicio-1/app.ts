import fs, { readFile } from "fs";

function check(ruta:string, type: string) {
    
    readFile(ruta, 'utf8', (err, data) => {
        if (err) throw err;
        if (data !== "") {
            const contador = data.match(new RegExp(type, 'g'));
            console.log("CONTADOR de",type,":");
            console.log(contador?.length);
        }
    });
}

function main() {

    if (process.argv.length < 3) {
        console.log("Introduzca ruta del fichero y la palabra clave.");
    } 
    
    let ruta: string = process.argv[2];
    let type: string = process.argv[3];

    console.log("Ruta del fichero: ",ruta);

    check(ruta, type);

}


main();