//criação do arquivo js que irá interagir com a tabela.
var transactionsRaw = localStorage.getItem('transactions')
if (transactionsRaw != null) {
  var transactions = JSON.parse(transactionsRaw)
} else {
  var transactions = [];
}


function criaTabela() {


    currentLines = [...document.querySelectorAll('table.tabelaGeral tbody .dinamic-content')];
    currentLines.forEach((element) => {
      element.remove('Limpar Dados')
    })
    for (products in transactions) { //usado para inclusão dos valores formando a tabela sem precisar escrever caractere por caractere.
      document.querySelector('table.tabelaGeral tbody').innerHTML += (`<tr class="dinamic-content">
          <td > ${transactions[products].merchandise} </td>
          <td>${transactions[products].value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </td> 
        </tr>
        `) //".toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})" usado para atribuir o simbolo real "R$" da moeda brasileira e para transformar os valores no formato da moeda brasileira.
    }
}

function testaFormulario(e) {
  e.preventDefault();
  console.log('oi');
}