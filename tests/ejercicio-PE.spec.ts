import { describe, expect, test, vi } from "vitest";
import {listaMod} from "../src/ejercicio-PE/listaMod"
import { resolveObjectURL } from "buffer";


let lista1 = [1,2,3,4];
let lista3 = [5,6,7,8];
let lista4 = [9,10];
let lista2 = ["rojo", "verde"];

let lista10 = ["uno", "dos"];
let lista11 = ["tres", "cuatro"];

let mod = new listaMod(lista1);
let mod3 = new listaMod(lista1);

let modString = new listaMod(lista2);

let listaString1 = new listaMod(lista10);


describe("Tests Ejercicio-PE", () => {
    test("append number", () => {
      expect(mod.append(lista3)).toEqual([1,2,3,4,5,6,7,8]);
    });
    test("append string", () => {
        expect(listaString1.append(lista11)).toEqual(["uno", "dos", "tres", "cuatro"]);
      });

    test("Filter number", () => {
        expect(mod.filter(num => num >= 3 === true)).toEqual([3,4]);
    });
    test("Filter string", () => {
        expect(listaString1.filter(num => num.length === 3 === true)).toEqual(["uno", "dos"]);
    });

    test("Length number", () => {
        let mod2 = new listaMod(mod.append(lista3));
      expect(mod2.length()).toBe(8);
    });

    test("Length string", () => {
      expect(listaString1.length()).toBe(2);
    });

    test("Map number", () => {
      expect(mod.map(n => n+n)).toEqual([2,4,6,8]);
    });

    test("Map string", () => {
        expect(listaString1.map(n => n+n)).toEqual(["unouno", "dosdos"]);
      });

    test("concatenate", () => {
        expect(mod3.concatenate(lista3,lista4)).toEqual([1,2,3,4,5,6,7,8,9,10]);
    });

    test("reverse string", () => {
        expect(modString.reverse()).toEqual(["verde", "rojo"]);
    });
    test("reverse number", () => {
        expect(mod.reverse()).toEqual([10,9,8,7,6,5,4,3,2,1]);
    });

    test("reduce string", () => {
        expect(modString.reduce("color:", (accum, n) => accum+n)).toEqual(["color:rojo", "color:verde"]);
    });

    test("reduce number", () => {
        expect(mod.reduce(2, (accum, n) => accum+n)).toEqual([3,4,5,6,7,8,9,10,11,12]);
    });
    
});
