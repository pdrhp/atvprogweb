export class Gasto {
    constructor(nome, valor, data) {
        this.id = Date.now();
        this.nome = nome;
        this.valor = valor;
        this.data = data;
    }
}