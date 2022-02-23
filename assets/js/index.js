//criação do arquivo js que irá interagir com a tabela.
var transactionsRaw = localStorage.getItem('transactions') // primeira parte responsável pela inclusão de itens na localstorage.
if (transactionsRaw != null) {
  var transactions = JSON.parse(transactionsRaw)
} else {
  var transactions = [];
};


function criaTabela() {


    currentLines = [...document.querySelectorAll('table.tabelaGeral tbody .dinamic-content')];
    currentLines.forEach((element) => {
      element.remove()
    })
    for (products in transactions) { //usado para inclusão dos valores formando a tabela sem precisar escrever caractere por caractere.
      document.querySelector('table.tabelaGeral tbody').innerHTML += (`<tr class="dinamic-content">
          <td > ${transactions[products].merchandise} </td>
          <td>${transactions[products].value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </td> 
        </tr>
        `) //".toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})" usado para atribuir o simbolo real "R$" da moeda brasileira e para transformar os valores no formato da moeda brasileira.
        
    }
};

function testaFormulario(e) { //função desenvolvida para registro de itens na localstorage.
  e.preventDefault();
  
  var transactionsRaw = localStorage.getItem('transactions')
    if (transactionsRaw != null) {
      var transactions = JSON.parse(transactionsRaw)
    } else {
      var transactions = [];
}

transactions.push({ //vai adicionar novas transações.
  merchandise: e.target.elements['nameMercadoria'].value,
  value: e.target.elements['valor'].value,
  trade: e.target.elements['trade'].value
})

localStorage.setItem('transactions', JSON.stringify(transactions)) //salva novas transações no localstorage

document.getElementById('goHome').click()
};

criaTabela();