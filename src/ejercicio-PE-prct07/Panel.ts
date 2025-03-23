import { Estacion } from "./Estacion.js";
import { Observable } from "./int_Observable.js";
import { Observer } from "./int_Observer.js";

import { EstacionEventType } from "./Estacion.js";

export class Panel implements Observer {

    constructor(public id: number, private name: string){}

    /**
     * Metodo update que refleja la acción con respecto al evento notificado
     * @param observable - objeto observable
     */
    update(observable: Observable){
        if (observable instanceof Estacion) {
            switch(observable.getEventType()) {
                case EstacionEventType.TEMPERATURA_CHANGED:
                    console.log(`Notificacion desde ${this.name} de ${observable.name} cambio de temperatura.`);
                break;
                case EstacionEventType.TORMENTA:
                    console.log(`Notificacion desde ${this.name} de ${observable.name} se acerca tormenta.`);
                break;
                case EstacionEventType.NO_TORMENTA:
                    console.log(`Notificacion desde ${this.name} de ${observable.name} NO se acerca tormenta.`);
                break;
            }
        }
    }
}