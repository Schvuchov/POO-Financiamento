export class Parcela {
    #numero;
    #valor;
    #juros;
    #amortizacao;
    #saldo;
    constructor(numero,valor,juros,amortizcaao,saldo) {
        this.#numero = numero;
        this.#valor = valor;
        this.#juros = juros;
        this.#amortizcaao = amortizcaao;
        this.#saldo = saldo;
    }
}



