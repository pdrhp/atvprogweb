export function createExpenseItem(item){
    const className = item.constructor.name;
    const category = className.replace('Gasto', '');


    let condicional;

    if(className === 'GastoAlimentacao'){
        condicional = `Restaurante: ${item.restaurante}`;
    }
    else if(className === 'GastoTransporte'){
        condicional = `Tipo de Transporte: ${item.tipo_transporte}`;
    }
    else if(className === 'GastoHabitacao'){
        condicional = `Tipo de Gasto: ${item.tipo_gasto}`;
    }
    else if(className === 'GastoEducacao'){
        condicional = `Tipo de Gasto: ${item.instituicao}`;
    }
    else{
        condicional = '';
    }


    const div = document.createElement('div');
    div.classList.add('expenses-item');
    div.innerHTML = `
    <div class="flex-col dataCol">
        <span>Nome: ${item.nome}</span>
        <span>Valor: ${item.valor}</span>
        <span>${condicional}</span>
    </div>

    <div class="flex-col dataCol">
        <span>Data: ${item.data}</span>
        <span>Categoria: ${category}</span>
    </div>

    <div class="flex-col dataCol">
        <button id="edit-button" class="btn btn-primary"">Editar</button>
        <button id="delete-button"  class="btn btn-danger">Excluir</button>
    </div>
    `;

    return div;
}