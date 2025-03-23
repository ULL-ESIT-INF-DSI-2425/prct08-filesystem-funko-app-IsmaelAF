import { Observable } from "./int_Observable.js";
import { Observer } from "./int_Observer.js";
import { Movil } from "./Movil.js";


export enum EstacionEventType {'NO_EVENT', 'TEMPERATURA_CHANGED', 'TORMENTA', 'NO_TORMENTA'};

export class Estacion implements Observable {

    private observers: Observer[] = [];

    private eventType: EstacionEventType = EstacionEventType.NO_EVENT;

    constructor(public id: number, public name: string, public temp: number, public torm: boolean = false){}

    /**
     * Metodo para subscribir un observer
     * @param observer - observer
     */
    subscribe(observer: Observer): void {
        if (this.observers.includes(observer)) {
            throw new Error('El observer ya está subscrito.');
        } else {
            this.observers.push(observer);
            console.log("Subscrito!");
        }
    }

    /**
     * Metodo para dejar de subscribir un observer
     * @param observer - observer
     */
    unsubscribe(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index === -1) {
            throw new Error('El observer no está subscrito.');
        } else {
            this.observers.splice(index, 1);
            console.log("No subscrito!");
        }
    }

    /**
     * Metodo para notificar de un evento a los subscriptores
     */
    notify(): void {
        this.observers.forEach(observer => {
            observer.update(this);
        });
    }

    /**
     * Metodo que devuelve el tipo de evento
     * @returns - tipo de evento
     */
    getEventType() {
        return this.eventType;
    }


    /**
     * Setter de atributo temperatura
     * @param temperatura - nueva temperatura
     */
    setTemp(temperatura: number) {
        if(this.temp !== temperatura) {
            this.temperatura();
        }
        this.temp = temperatura;
    }

    /**
     * Setter de tormenta
     * @param tormenta - boolean tormenta
     */
    setTorm(tormenta: boolean) {
        this.torm = tormenta;
        if (tormenta) {
            this.tormenta();
        } else {
            this.notormenta();
        }
    }

    /**
     * Cambio de tipo de evento a temperatura
     */
    temperatura() {
        this.eventType = EstacionEventType.TEMPERATURA_CHANGED;
        this.notify();
    }

    /**
     * Cambio de tipo de evento a tormenta
     */
    tormenta() {
        this.eventType = EstacionEventType.TORMENTA;
        this.notify();
    }

    /**
     * Cambio de tipo de evento a no_tormenta
     */
    notormenta() {
        this.eventType = EstacionEventType.NO_TORMENTA;
        this.notify();
    }


}


/*
const miEstacion = new Estacion(1, "Estacion Norte", 15);

const movilPersonal = new Movil(0, "Movil Personal");
const panel = new Panel(1, "Panel");

miEstacion.subscribe(movilPersonal);
miEstacion.subscribe(panel);

//miEstacion.tormenta();
//miEstacion.temperatura();

miEstacion.setTemp(13);
miEstacion.setTemp(13);
*/