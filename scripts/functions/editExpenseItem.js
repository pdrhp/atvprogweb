export function editExpenseItem(itemId, modal, listaGastos, inputNome, inputValor, selectCategoria, categoriaInputModal, inputRestaurante, inputInstituicao, inputTipoTransporte, inputTiboHabitacao){
    const gasto = listaGastos.find(gasto => gasto.id == itemId);

    inputNome.value = gasto.nome;
    inputValor.value = gasto.valor;
    selectCategoria.value = gasto.constructor.name;
    categoriaInputModal.value = gasto.constructor.name;

    if(gasto.constructor.name === 'GastoAlimentacao'){
        inputRestaurante.value = gasto.restaurante;
    }
    else if(gasto.constructor.name === 'GastoTransporte'){
        inputTipoTransporte = gasto.tipo_transporte;
    }
    else if(gasto.constructor.name === 'GastoHabitacao'){
        inputTiboHabitacao = gasto.tipo_habitacao;
    }
    else if(gasto.constructor.name === 'GastoEducacao'){
        inputInstituicao = gasto.instituicao;
    }

    var modalInstace = new bootstrap.Modal(modal);

    modalInstace.show();
}