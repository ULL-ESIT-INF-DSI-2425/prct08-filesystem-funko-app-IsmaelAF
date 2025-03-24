import { error } from "console";
import fs, { exists, readFile, write, writeFile } from "fs";
import path from "path";

function convertCSV(fJSON: string): string {

    /*let fichero;
    readFile(fJSON, "utf-8", function(err, data) {
        if (err) throw error;
        fichero = JSON.parse(data);
    });*/

    const fichero = JSON.parse(fs.readFileSync(fJSON, "utf-8"));

    let contador: number = 0;
    let objeto2 = Object.keys(fichero[1]);
    let resultado: string = "";

    objeto2.forEach(element => {
        resultado += `${element},`;
    });

    resultado += `\n`;

    fichero.forEach((element) => {
        resultado += `"${fichero[contador].fecha}","${fichero[contador].ubicacion}",${fichero[contador].temperatura},${fichero[contador].humedad},${fichero[contador].precipitacion},${fichero[contador].viento_kmh}\n`;
        contador++;
    });

    return resultado;
}

function main() {

    if (process.argv.length < 3) {
        console.log("Introduzca ruta del fichero JSON y ruta para el ficher CSV.");
    } 
    
    let fJSON: string = process.argv[2];
    let fCSV: string = process.argv[3];

    if (!fs.existsSync(fJSON)){
        console.log("No se encontró el fichero JSON en: ", fJSON);
        return undefined;
    }

    let resultado = convertCSV(fJSON);

    writeFile(fCSV, resultado, (err) => {
        if (err) throw err;
        console.log("Fichero escrito correctamente.");
    });

}

main();