import { Gasto } from "../models/Gasto.js";
import { GastoAlimentacao } from "../models/GastoAlimentacao.js";
import { GastoEducacao } from "../models/GastoEducacao.js";
import { GastoHabitacao } from "../models/GastoHabitacao.js";
import { GastoTransporte } from "../models/GastoTransporte.js";
import { controlDynamicSelect } from "./functions/dynamicSelect.js";
import { editExpenseItem } from "./functions/editExpenseItem.js";
import { renderGastos } from "./functions/renderGastos.js";




const addButtonGasto = document.getElementById('addButtonGasto');
const EditButtonGasto = document.getElementById('EditButtonGasto');


const divInputAlimentacao = document.querySelector('.alimentacao');
const divInputTransporte = document.querySelector('.transporte');
const divInputHabitacao = document.querySelector('.habitacao');
const divInputEducacao = document.querySelector('.educacao');

const inputNome = document.getElementById('nome');
const inputValor = document.getElementById('valor');
const selectCategoria = document.getElementById('categoria');
const inputRestaurante = document.getElementById('Restaurante');
const inputInstituicao = document.getElementById('instituicao');
const inputTipoTransporte = document.getElementById('tipo_transporte');
const inputTiboHabitacao = document.getElementById('tipo_habitacao');

const divInputAlimentacaoEdit = document.querySelector('.alimentacao_edit');
const divInputTransporteEdit = document.querySelector('.transporte_edit');
const divInputHabitacaoEdit = document.querySelector('.habitacao_edit');
const divInputEducacaoEdit = document.querySelector('.educacao_edit');

const inputNomeEdit = document.getElementById('nome_edit');
const inputValorEdit = document.getElementById('valor_edit');
const selectCategoriaEdit = document.getElementById('categoria_edit');
const inputRestauranteEdit = document.getElementById('Restaurante_edit');
const inputInstituicaoEdit = document.getElementById('instituicao_edit');
const inputTipoTransporteEdit = document.getElementById('tipo_transporte_edit');
const inputTiboHabitacaoEdit = document.getElementById('tipo_habitacao_edit');

const divListaGastos = document.getElementById('expenses-content');

const modal = document.getElementById('exampleModal');
const modalEdit = document.getElementById('exampleModalEdit')

const inputFiltro = document.getElementById('filter')

const listaGastos = [];


controlDynamicSelect(selectCategoria, divInputAlimentacao, divInputTransporte, divInputHabitacao, divInputEducacao);

addButtonGasto.addEventListener('click', (e) => handleClickButtonAddGasto(e, inputNome, inputValor, selectCategoria, inputRestaurante, inputInstituicao, inputTipoTransporte, inputTiboHabitacao))

inputFiltro.addEventListener('input', (e) => {
    const filtro = e.target.value.toLowerCase();
    const gastosFiltrados = listaGastos.filter(gasto => gasto.nome.toLowerCase().includes(filtro));
    renderGastos(gastosFiltrados, divListaGastos);
});

document.addEventListener('click', function(event) {
    // Verifique se o botão de edição foi clicado
    if (event.target.id === 'edit-button') {
        var button = event.target;
        var div = button.parentElement.parentElement;
        var itemId = div.dataset.id;

        console.log(itemId);

        editExpenseItem(itemId, modalEdit, listaGastos, inputNomeEdit, inputValorEdit, selectCategoriaEdit, inputRestauranteEdit, inputInstituicaoEdit, inputTipoTransporteEdit, inputTiboHabitacaoEdit, EditButtonGasto, divListaGastos, divInputAlimentacaoEdit, divInputEducacaoEdit, divInputHabitacaoEdit, divInputTransporteEdit);
    }
    if(event.target.id === 'delete-button'){
        console.log('1');
        var button = event.target;
        var div = button.parentElement.parentElement;
        var itemId = div.dataset.id;
    
        const index = listaGastos.findIndex(item => item.id == itemId);
        if (index !== -1) {
            listaGastos.splice(index, 1);
        }

        renderGastos(listaGastos, divListaGastos);
    }
});





export function removeAddButtonListener(){
    addButtonGasto.removeEventListener('click', (e) => handleClickButtonAddGasto(e, inputNome, inputValor, selectCategoria, inputRestaurante, inputInstituicao, inputTipoTransporte, inputTipoHabitacao))
}

function handleClickButtonAddGasto(e, inputNome, inputValor, selectCategoria, inputRestaurante, inputInstituicao, inputTipoTransporte, inputTiboHabitacao){
    e.preventDefault();

    const nome = inputNome.value;
    const valor = inputValor.value;
    const categoria = selectCategoria.value;
    const restaurante = inputRestaurante.value;
    const instituicao = inputInstituicao.value;
    const tipo_transporte = inputTipoTransporte.value;
    const tipo_habitacao = inputTiboHabitacao.value;
    const data = new Date().toLocaleDateString('pt-BR');
    let gasto;

    console.log(categoria);

    if(categoria === 'Alimentação'){
        gasto = new GastoAlimentacao(nome, valor, data, restaurante);
    }
    else if(categoria === 'Transporte'){
        gasto = new GastoTransporte(nome, valor, data, tipo_transporte);
    }
    else if(categoria === 'Habitação'){
        gasto = new GastoHabitacao(nome, valor, data, tipo_habitacao);
    }
    else if(categoria === 'Educação'){
        gasto = new GastoEducacao(nome, valor, data, instituicao);
    }
    else{
        gasto = new Gasto(nome, valor, data);
    }

    listaGastos.push(gasto);

    renderGastos(listaGastos, divListaGastos);
}

export function configureGastoButton(addButtonGasto, inputNome, inputValor, selectCategoria, inputRestaurante, inputInstituicao, inputTipoTransporte, inputTiboHabitacao, listaGastos, divListaGastos){
    addButtonGasto.addEventListener('click', (e) => handleClickButtonAddGasto(e, inputNome, inputValor, selectCategoria, inputRestaurante, inputInstituicao, inputTipoTransporte, inputTiboHabitacao))
}




