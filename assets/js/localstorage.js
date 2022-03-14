


// Local Storage

// Local Storage trabalha com strings, os valores por mais que sejam lidos independete de quais forem todos são transformados em string pelo local storage 

var objStorage = []  // Tendo em mente que o valor do local storage é dado em string 
let convertStorage = localStorage.getItem('objStorage')
if (convertStorage != null) {
  objStorage = JSON.parse(convertStorage);
} 


desenhaTabela()
function desenhaTabela () {
  for (transaction of objStorage) {
    document.querySelector('.tabelaGeral').innerHTML += `
  <tr>

    <td class="produto">${transaction.tipo}&nbsp;${transaction.nome}</td> 

    <td class="preco">${transaction.valor}</td>
  </tr>`
  };


}



function lerTabela () {
// Dom nome e valor dos input
var tabela = document.querySelector('.tabelaGeral')
let nome = document.querySelector('.btnMercadoria')
let nomeMercadoria = nome.value
let currency = document.querySelector('.btnValor')
let valor = currency.value
let tipoSelecao = document.getElementsByName('trade')


tabela.innerHTML += `
  <tr class="dinamic-content">

    <td class="produto">${tipoSelecao.value == "compra" ? "+" : "-"}&nbsp;${nomeMercadoria}</td> 

    <td class="preco">${valor}</td>
  </tr>`

  objStorage.push({
    nome: nomeMercadoria,
    valor: valor,
    tipo: tipoSelecao.value == "compra" ? "+" : "-"
  })


  localStorage.setItem('objStorage', JSON.stringify(objStorage))

};

function totaValor () {

  var listTr = document.querySelectorAll('.dinamic-content');
    var total = 0;

        for (i = 0; i < listTr.length; i++) {
            var list = listTr[i];

            var tdValor = list.querySelectorAll('.preco');
            var resultado = list.querySelector('.qtdTotal');

        for (let i = 0; i < tdValor.length; i++) {
            var valor = tdValor[i]

            total = total + valor;
            resultado.textContent = total;

            console.log(total);
        }
  }
    

    document.querySelector('.tabelaGeral .foot').innerHTML += `
  <tr>

    <td>Total</td> 

    <td class="qtdTotal">${total}</td>
  </tr>`

  if (objStorage.length > 0) {
    document.querySelector('.tabelaGeral tfoot').innerHTML += `
    <tr>
      <td></td>
      <td class="status">${Math.sign(total) > 0 ? "[LUCRO]" : "[PREJUÍZO]"}</td>
    </tr>`
  }

  console.log(total)
}
totaValor()





function limparDados () {
  let produtos = document.querySelectorAll('.produto')
  let precos = document.querySelectorAll('.preco')
  
  produtos.forEach((element) => {
    element.remove();
  })
  precos.forEach((element) => {
    element.remove();
  })

  objStorage = [];
  localStorage.setItem('objStorage', JSON.stringify(objStorage))
  alert('Os dados serão removidos!')
};


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