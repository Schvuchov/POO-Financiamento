import {Financiamento} from "./financiamento";
import {FinanciamentoCarencia} from "./financiamentocarencia";


const comCarencia = document.querySelector('#comCarencia'); //declarando objetos
const listaSuspensa = document.querySelector('#listaSuspensa');
const corpoTabela = document.querySelector('#corpoTabela');
const botaoCalcular = document.querySelector('#botaoCalcular');
const textoValor = documento.querySelector('#textoValor');
const textoEntrada = documento.querySelector('#textoEntrada');
const textoTaxaJuros = documento.querySelector('#textoTaxaJuros');
const textoPrazo = documento.querySelector('#textoPrazo');

function limpaCorpoDaTabela() {
    while(corpoTabela.firstChild) {
        corpoTabela.removeChild(corpoTabela.firstChild);
    }
}

comCarencia.addEventListener('change', function(){
    if(this.checked) {
        listaSuspensa.removeAttribute('hidden');
    } else {
        listaSuspensa.setAttribute('hidden', 'hidden');
    }
});

botaoCalcular.addEventListener('click', function(){
    limpaCorpoDaTabela();
    const valor = parseFloat(textoValor.value);
    const entrada = parseFloat(textoEntrada.value);
    const taxaJuros = parseFloat(textoTaxaJuros.value);
    const prazo = parseFloat(textoPrazo.value);
    let simulacao;
    if(comCarencia.checked) {
        const carencia = parseInt(listaSuspensa.value);
        simulacao = new FinanciamentoCarencia(valor,entrada,taxaJuros,prazo,carencia);
    } else{
        simulacao = new Financiamento(valor,entrada,taxaJuros,prazo);
    }

    simulacao.calcParcelasMensais();
    simulacao.exibeParcelas();
})