


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

<td class="produto">${tipoSelecao.values == 'compra' ? '+' : '-' }&nbsp;${nomeMercadoria}</td> 

<td class="preco">${valor}</td>
</tr>`




};

/*function tT () {
  
  document.querySelector('.totalTabela .tbody').innerHTML += `<tr> 
    <td>Total</td>
    <td>1234</td>
  </tr>`

};*/

function limparDados () {
  let produto = document.querySelector('.produto')
  let preco = document.querySelector('.preco')
  produto.remove();
  preco.remove();
  
  //localStorage.clear();
  localStorage.setItem('objStorage', JSON.stringify(objStorage))
  objStorage = [];
  alert('Os dados serão removidos!')
};

//Formatar para moeda local
/*const currencyFormat = new Intl.NumberFormat("pt-br", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
});*/

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