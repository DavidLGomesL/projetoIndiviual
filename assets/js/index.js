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

  for (i in e.target.elements['valor'].value) {
    if ('0123456789'.indexOf(e.target.elements['valor'].value[i]) == -1) {
      alert('Apenas números são permitidos no campo valor!')
      return false
    }
  }

  if (e.target.elements['valor'].value.length > 6) {
    alert('Número invalido!')
    return false
  }
  
  var transactionsRaw = localStorage.getItem('transactions')
    if (transactionsRaw != null) {
      var transactions = JSON.parse(transactionsRaw)
    } else {
      var transactions = [];
}

if (id !== null) {
    transactions[id] = transactions.push({ //vai adicionar novas transações.
      merchandise: e.target.elements['nameMercadoria'].value,
      value: e.target.elements['valor'].value,
      trade: e.target.elements['trade'].value
    })
} else {
  transactions.push({
    merchandise: e.target.elements['nameMercadoria'].value,
    value: e.target.elements['valor'].value,
    trade: (e.target.elements['trade'].value == 'true')
  })
}
localStorage.setItem('transactions', JSON.stringify(transactions)) //salva novas transações no localstorage

document.getElementById('goHome').click()
};

criaTabela();

var urlPrincipal = new URL(window.location.href)

var id = urlPrincipal.searchParams.get('products')
if (id !== null) {
  if (transactionsRaw != null) {
    var transactions = JSON.parse(transactionsRaw)
  } else {
    var transactions = [];
}

  console.log(transactions[id])

  document.getElementById('nameMercadoria').value = transactions[id].nameMercadoria
  document.getElementById('valor').value = transactions[id].valor
  if (transactions[id].trade) {
    document.getElementById('trade-compra').checked = true
  } else {
    document.getElementById('trade-venda').checked = true
  }
}