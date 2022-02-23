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
    
        
    };

};

function testaFormulario(e) { //função desenvolvida para registro de itens na localstorage.
  e.preventDefault();

  /*for (i in e.target.elements['valor'].value) { //teste basico pós preenchimento do formulario.
    if ('0123456789'.indexOf(e.target.elements['valor'].value[i]) == -1) {
      alert('Apenas números são permitidos no campo valor!')
      return false
    }
  }*/

  /*var valuePattern = /^[0-9]+/g
  if (valuePattern.test(e.target.elements['valor'].value)) {
    alert('Apenas números são permitidos no campo valor!')
    return false
  }*/

  /*if (e.target.elements['valor'].value.length > 6) { //teste basico pós preenchimento do formulario.
    alert('Número invalido!')
    return false
  }*/
  
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

String.prototype.reverse = function(){
  return this.split('').reverse().join(''); 
};

function mascaraMoeda(campo,evento){
  var tecla = (!evento) ? window.event.keyCode : evento.which;
  var valor  =  campo.value.replace(/[^\d]+/gi,'').reverse();
  var resultado  = "";
  var mascara = "##.###.###,##".reverse();
  for (var x=0, y=0; x<mascara.length && y<valor.length;) {
    if (mascara.charAt(x) != '#') {
      resultado += mascara.charAt(x);
      x++;
    } else {
      resultado += valor.charAt(y);
      y++;
      x++;
    }
  }
  campo.value = resultado.reverse();
}