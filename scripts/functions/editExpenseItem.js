import { renderGastos } from "./renderGastos.js";

export function editExpenseItem(
  itemId,
  modal,
  listaGastos,
  inputNome,
  inputValor,
  selectCategoria,
  inputRestaurante,
  inputInstituicao,
  inputTipoTransporte,
  inputTiboHabitacao,
  editButton,
  divListaGastos,
  divInputAlimentacaoEdit,
  divInputEducacaoEdit,
  divInputHabitacaoEdit,
  divInputTransporteEdit
) {
  const gasto = listaGastos.find((gasto) => gasto.id == itemId);

  inputNome.value = gasto.nome;
  inputValor.value = gasto.valor;
  const className = gasto.constructor.name;
  const category = className.replace("Gasto", "");
  console.log(category);
  selectCategoria.value = category;

  selectCategoria.disabled = true;
  divInputAlimentacaoEdit.style.display = 'none';
  divInputTransporteEdit.style.display = 'none';
  divInputHabitacaoEdit.style.display = 'none'
  divInputEducacaoEdit.style.display = 'none';

  console.log(gasto);


  if (category === "Alimentacao") {
    inputRestaurante.value = gasto.restaurante;
    divInputAlimentacaoEdit.style.display = 'flex';
  } else if (category === "Transporte") {
    inputTipoTransporte.value = gasto.tipo_transporte;
    divInputTransporteEdit.style.display = 'flex';
  } else if (category === "Habitacao") {
    inputTiboHabitacao.value = gasto.tipo_habitacao;
    divInputHabitacaoEdit.style.display = 'flex'
  } else if (category === "Educacao") {
    inputInstituicao.value = gasto.instituicao;
    divInputEducacaoEdit.style.display = 'flex';
  }

  var modalInstace = new bootstrap.Modal(modal);

  modalInstace.show();

  editButton.addEventListener("click", function () {
    gasto.nome = inputNome.value;
    gasto.valor = inputValor.value;

    console.log(inputTipoTransporte.value);

    if (gasto.constructor.name === "GastoAlimentacao") {
      gasto.restaurante = inputRestaurante.value;
    } else if (gasto.constructor.name === "GastoTransporte") {
      gasto.tipo_transporte = inputTipoTransporte.value;
    } else if (gasto.constructor.name === "GastoHabitacao") {
      gasto.tipo_habitacao = inputTipoHabitacao.value;
    } else if (gasto.constructor.name === "GastoEducacao") {
      gasto.instituicao = inputInstituicao.value;
    }

    modalInstace.hide();

    renderGastos(listaGastos, divListaGastos);
  });
}
