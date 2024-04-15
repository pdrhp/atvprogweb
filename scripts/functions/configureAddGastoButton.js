import { Gasto } from "../../models/Gasto.js";
import { GastoAlimentacao } from "../../models/GastoAlimentacao.js";
import { GastoEducacao } from "../../models/GastoEducacao.js";
import { GastoHabitacao } from "../../models/GastoHabitacao.js";
import { GastoTransporte } from "../../models/GastoTransporte.js";
import { renderGastos } from "./renderGastos.js";

export function configureGastoButton(addButtonGasto, inputNome, inputValor, selectCategoria, inputRestaurante, inputInstituicao, inputTipoTransporte, inputTiboHabitacao, listaGastos, divListaGastos){

    addButtonGasto.addEventListener('click', (e) => {
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
    })

}