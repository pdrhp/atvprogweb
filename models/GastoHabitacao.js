import { Gasto } from "./Gasto.js";

export class GastoHabitacao extends Gasto {
    constructor(nome, valor, data, tipo_gasto) {
        super(nome, valor, data);
        this.tipo_gasto = tipo_gasto;
    }
}