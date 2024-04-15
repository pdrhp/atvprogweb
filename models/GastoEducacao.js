import { Gasto } from "./Gasto.js";

export class GastoEducacao extends Gasto{
    constructor(nome, valor, data, instituicao) {
        super(nome, valor, data);
        this.instituicao = instituicao;
    }
}