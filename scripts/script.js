import { configureGastoButton } from "./functions/configureAddGastoButton.js";
import { controlDynamicSelect } from "./functions/dynamicSelect.js";
import { editExpenseItem } from "./functions/editExpenseItem.js";



const categoriaInputModal = document.getElementById('categoria');
const addButtonGasto = document.getElementById('addButtonGasto');
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

const divListaGastos = document.getElementById('expenses-content');

const modal = document.getElementById('exampleModal');

const listaGastos = [];


controlDynamicSelect(categoriaInputModal, divInputAlimentacao, divInputTransporte, divInputHabitacao, divInputEducacao);
configureGastoButton(addButtonGasto, inputNome, inputValor, selectCategoria, inputRestaurante, inputInstituicao, inputTipoTransporte, inputTiboHabitacao, listaGastos, divListaGastos);



document.addEventListener('click', function(event) {
    // Verifique se o botão de edição foi clicado
    if (event.target.id === 'edit-button') {
        var button = event.target;
        var div = button.parentElement.parentElement;
        var itemId = div.dataset.id;

        console.log(itemId);

        editExpenseItem(itemId, modal, listaGastos, inputNome, inputValor, selectCategoria, categoriaInputModal, inputRestaurante, inputInstituicao, inputTipoTransporte, inputTiboHabitacao);
    }
});





