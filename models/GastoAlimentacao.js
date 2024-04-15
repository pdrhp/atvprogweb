import { Gasto } from "./Gasto.js";

export class GastoAlimentacao extends Gasto{
    constructor(nome, valor, data, restaurante) {
        super(nome, valor, data);
        this.restaurante = restaurante;
    }
}