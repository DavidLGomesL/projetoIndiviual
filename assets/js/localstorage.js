


// Local Storage

// Local Storage trabalha com strings, os valores por mais que sejam lidos independete de quais forem todos são transformados em string pelo local storage 

let objStorage = []  // Tendo em mente que o valor do local storage  e dado em string 

var tabela = document.querySelector('.tabelaGeral')
let nome = document.getElementById('nameMercadoria')
let valorNome = nome.value
let currency = document.querySelector('.btnValor')
let valor = currency.value

// let convertStorage = localStorage.getItem( JSON.parse('objStorage'));

// if (convertStorage)

// let convertStorage = localStorage.getItem( JSON.parse('objStorage'))
// console.log

if (localStorage.getItem("convertStorage")) {
  objStorage = JSON.parse(localStorage.getItem("convertStorage"));
}
console.log (objStorage)

console.log (typeof objStorage)

// (objStorage != "" ?  ""  : "")





function lerTabela () {
// Dom nome e valor dos input



tabela.innerHTML += `<tr>
<td class="produto">${valorNome}</td> <td class="preco">${valor}</td>
</tr>`


}

function limparDados () {
  let produto = document.querySelector('.produto')
  let preco = document.querySelector('.preco')
  produto.remove()
  preco.remove()
}



// Send to local stororage enviar local storage:

let sendStorage = [
  {
    convertStorage: valorNome,
    convertStorage: valor,
  },

  
]

console.log(sendStorage)