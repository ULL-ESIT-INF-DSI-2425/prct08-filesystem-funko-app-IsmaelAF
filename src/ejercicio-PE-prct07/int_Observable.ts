import { Observer } from "./int_Observer.js";

/**
 * Interfaz para el objeto observable
 */
export interface Observable {
    subscribe(observer: Observer): void;
    unsubscribe(observer: Observer): void;
    notify(): void;
}