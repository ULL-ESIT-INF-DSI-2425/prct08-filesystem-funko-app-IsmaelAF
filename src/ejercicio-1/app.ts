import yargs from "yargs";
import {hideBin} from "yargs/helpers"
import { Funko } from "./Funko.js";
import { FunkoGenero } from "./enums/FunkoGenero.js";
import { FunkoTipo } from "./enums/FunkoTipo.js";
import { FunkoManager } from "./FunkoManager.js";

const argv = yargs(hideBin(process.argv))
    .command('add', 'Agrega un Funko', {
        user: { type: "string", demandOption: true },
        id: { type: "number", demandOption: true },
        name: { type: "string", demandOption: true },
        desc: { type: "string", demandOption: true },
        type: { type: "string", choices: Object.values(FunkoTipo), demandOption: true },
        genre: { type: "string", choices: Object.values(FunkoGenero), demandOption: true },
        franq: { type: "string", demandOption: true },
        numero: { type: "number", demandOption: true },
        exclu: { type: "boolean", demandOption: true },
        carac: { type: "string", demandOption: true },
        valor: { type: "number", demandOption: true }
    }, (args) => {
        const manager = new FunkoManager(args.user);
        const newFunko = new Funko(
            args.id,
            args.name,
            args.desc,
            args.type as FunkoTipo,
            args.genre as FunkoGenero,
            args.franq,
            args.numero,
            args.exclu,
            args.carac,
            args.valor
        );
        //console.log(newFunko);
        manager.addFunko(newFunko);
    })
    .command("list", "Listar Funkos", {
        user: {type: "string", demandOption: true }
    }, (args) => {
        const manager = new FunkoManager(args.user);
        manager.listarFunkos();
    })
    .command("update", "Modificar un Funko", {
        user: { type: "string", demandOption: true },
        id: { type: "number", demandOption: true },
        name: { type: "string", demandOption: true },
        desc: { type: "string", demandOption: true },
        type: { type: "string", choices: Object.values(FunkoTipo), demandOption: true },
        genre: { type: "string", choices: Object.values(FunkoGenero), demandOption: true },
        franq: { type: "string", demandOption: true },
        numero: { type: "number", demandOption: true },
        exclu: { type: "boolean", demandOption: true },
        carac: { type: "string", demandOption: true },
        valor: { type: "number", demandOption: true }
    }, (argv) => {
        const manager = new FunkoManager(argv.user);
        const updateFunko = new Funko(
            argv.id,
            argv.name,
            argv.desc,
            argv.type as FunkoTipo,
            argv.genre as FunkoGenero,
            argv.franq,
            argv.numero,
            argv.exclu,
            argv.carac,
            argv.valor
        );
        manager.actualizarFunko(updateFunko);
    })
    .command("remove", "Elimina un Funko", {
        user: { type: "string", demandOption: true },
        id: { type: "number", demandOption: true }
    }, (argv) => {
        const manager = new FunkoManager(argv.user);
        manager.eliminarFunko(argv.id);
    })
    .command("read", "Muestra la informacion de un Funko", {
        user: { type: "string", demandOption: true },
        id: { type: "number", demandOption: true }
    }, (argv) => {
        const manager = new FunkoManager(argv.user);
        manager.mostrarFunko(argv.id);
    })
    .help()
    .argv;
    