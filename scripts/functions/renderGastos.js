import { createExpenseItem } from "./createExpenseItem.js";

export function renderGastos(listaGastos, divListaGastos){
    divListaGastos.innerHTML = '';
    listaGastos.forEach(item => {
        const div = createExpenseItem(item);
        div.dataset.id = item.id;
        divListaGastos.appendChild(div);
    })
}