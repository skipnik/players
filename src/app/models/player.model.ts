import * as moment from "moment";
import { Positions } from "./player.structure";

export class Player {
    #id: string;
    #name: string;
    #nr: number;
    #position: Positions;
    #birth: moment.Moment;
    #isStart: Boolean = true;

    constructor (name: string, nr: number, position: Positions, dateOfBirth: string, isReserve?: boolean) {
        this.#id = this.generateUUID();
        this.#name = name;
        this.#nr = nr;
        this.#position = position;
        this.#birth = moment(dateOfBirth);

        if(isReserve) {
            this.#isStart = false;
        }
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    get nr() {
        return this.#nr;
    }

    get position() {
        return this.#position;
    }

    get birth() {
        return this.#birth.format('DD.MM.YYYY');
    }

    get age() {
        return moment().diff(this.#birth, 'years', false);
    }

    get isStart() {
        return this.#isStart;
    }

    toogleIsStart() {
        this.#isStart = !this.#isStart;
    }

    generateUUID() {
        return `${new Date().getTime()}-${Math.trunc(Math.random() * 1000000)}`;
    }
}