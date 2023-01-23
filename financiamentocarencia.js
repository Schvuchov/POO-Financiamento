import { Financiamento } from "./financiamento";
import {Parcela} from "./parcela.js";

export class FinanciamentoCarencia extends Financiamento{
    #carencia;
    #taxaJuros;
    #parcelas = [];
    constructor(valor,entrada,taxaJuros,prazo,carencia){
        super(valor,entrada,taxaJuros,prazo);
        this.#taxaJuros = taxaJuros;
        this.#parcelas = super.getParcelas();
        this.#carencia = carencia;
    }

    calcParcelasMensais(){ //calcula juros dos meses de carencia
        let saldo = this.#parcelas[0].getSaldo();
        for(let i=0; i < this.#carencia; i++) {
            const numero = this.#parcelas.length;
            saldo += Financiamento.calcJuros(saldo,this.#taxaJuros);
            this.#parcelas.push(new Parcela(numero,0,0,0,saldo));
        }
        super.calcParcelasMensais();
    }
}