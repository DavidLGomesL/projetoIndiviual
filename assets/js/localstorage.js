


// Local Storage

// Local Storage trabalha com strings, os valores por mais que sejam lidos independete de quais forem todos são transformados em string pelo local storage 

var objStorage = []  // Tendo em mente que o valor do local storage  e dado em string 
let convertStorage = localStorage.getItem('objStorage');
if (convertStorage != null) {
  objStorage = JSON.parse(localStorage.getItem("convertStorage"));
}




// if (convertStorage)

// let convertStorage = localStorage.getItem( JSON.parse('objStorage'))
// console.log

/*if (localStorage.getItem("convertStorage")) {
  objStorage = JSON.parse(localStorage.getItem("convertStorage"));
}*/


// (objStorage != "" ?  ""  : "")





function lerTabela () {
// Dom nome e valor dos input
var tabela = document.querySelector('.tabelaGeral')
let nome = document.querySelector('.btnMercadoria')
let nomeMercadoria = nome.value
let currency = document.querySelector('.btnValor')
let valor = currency.value
let tipoSelecao = document.getElementsByName('trade')


tabela.innerHTML += `<tr>

<td class="produto">${tipoSelecao.value == 'compra' ? '-' : '+' }&nbsp;${nomeMercadoria}</td> 

<td class="preco">${valor}</td>
</tr>`




};

/*function totalTabela () {
  var totalTable = document.querySelector('.tabelaGeral .tbody')

  totalTable.innerHTML += `<tr> 
    <td>Total</td>
    <td>1234</td>
  </tr>`
};*/

function limparDados () {
  let produto = document.querySelector('.produto')
  let preco = document.querySelector('.preco')
  produto.remove()
  preco.remove()
  //localStorage.clear();
  //localStorage.setItem('objStorage', JSON.stringify(objStorage))
  objStorage = [];
};

//Formatar para moeda local
/*const currencyFormat = new Intl.NumberFormat("pt-br", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
});*/

