export function controlDynamicSelect(categoriaInputModal, divInputAlimentacao, divInputTransporte, divInputHabitacao, divInputEducacao){
    categoriaInputModal.addEventListener('change', (e) => {
        const categoria = e.target.value;
    
        console.log(categoria);
    
        divInputAlimentacao.style.display = 'none';
        divInputTransporte.style.display = 'none';
        divInputHabitacao.style.display = 'none';
        divInputEducacao.style.display = 'none';
    
        if(categoria === 'Alimentação'){
            divInputAlimentacao.style.display = 'flex';
            return;
        }
        else if (categoria === 'Transporte') {
            divInputTransporte.style.display = 'flex';
            return;
        }
        else if (categoria === 'Habitação'){
            divInputHabitacao.style.display = 'flex';
            return
        }
        divInputEducacao.style.display = 'flex';
    })
}