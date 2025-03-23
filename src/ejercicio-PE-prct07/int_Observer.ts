import { Observable } from "./int_Observable.js";

/**
 * Interfaz para objeto observador
 */
export interface Observer {
    update(observable: Observable): void;
}