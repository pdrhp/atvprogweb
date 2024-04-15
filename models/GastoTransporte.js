import { Gasto } from "./Gasto.js";

export class GastoTransporte extends Gasto{
    constructor(nome, valor, data, tipo_transporte) {
        super(nome, valor, data);
        this.tipo_transporte = tipo_transporte;
    }
}