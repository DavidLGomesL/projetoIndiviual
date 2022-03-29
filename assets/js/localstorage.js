
// Local Storage

// Local Storage trabalha com strings, os valores por mais que sejam lidos independete de quais forem todos são transformados em string pelo local storage 

var objStorage = []  // Tendo em mente que o valor do local storage é dado em string 
let convertStorage = localStorage.getItem('objStorage')
if (convertStorage != null) {
  objStorage = JSON.parse(convertStorage);
} 


desenhaTabela()
function desenhaTabela () { //Mantém a tabela
 
  let total = 0

  if (objStorage.length === 0) {
    document.getElementById("nTransacoes");
    console.log(objStorage.length === 0);
    `
    <tr>
      <td class="nenhumaTransacao" >Nenhuma transação cadastrada.</td>
    </tr>
    `
  } else {
    document.getElementById("nTransacoes").style.display = 'none';
    console.log(objStorage);
  }


  objStorage.forEach((item) => {
    total += parseFloat(item.valor.replaceAll('.','').replaceAll(',','').replace(/([0-9][0-9])$/g, '.$1')) * parseInt(item.tipo+'1')
  }); total

    for (transaction of objStorage) {
        document.querySelector('.tabelaGeral').innerHTML += `
      <tr>

        <td class="produto">${transaction.tipo}&nbsp;${transaction.nome}</td> 

        <td class="preco">${transaction.valor}</td>
      </tr>

      <tr class="tabTotal">

          <td>Total</td> 

          <td class="qtdTotal">${total}</td>
      </tr>
      <!--Mostra status de Lucro ou Prejuízo-->
      <tr class="lucroPrejuizo">
        <td></td>
        <td class="status">${Math.sign(total) > 0 ? "[LUCRO]" : "[PREJUÍZO]"}</td>
      </tr>
      `

    };

}

function lerTabela () {
    // Dom nome e valor dos input
    let nome = document.querySelector('.btnMercadoria')
    let nomeMercadoria = nome.value
    let currency = document.querySelector('.btnValor')
    let valor = currency.value
    let tipoSelecao = document.querySelector('#transacao').value == 'compra' ? '-' : '+'
    let total = 0
    
    if (objStorage.length === 0) {
      document.getElementById("nTransacoes");
      console.log(objStorage.length === 0);
      `
      <tr>
        <td class="nenhumaTransacao" >Nenhuma transação cadastrada.</td>
      </tr>
      `
    } else {
      document.getElementById("nTransacoes").style.display = 'none';
      console.log(objStorage);
    }
 
  document.querySelector('.tabelaGeral').innerHTML += `
      <tr>

        <td class="produto">${tipoSelecao}&nbsp;${nomeMercadoria}</td> 

        <td class="preco">${valor}</td>
      </tr>

      <tr class="tabTotal">

          <td>Total</td> 

          <td class="qtdTotal">${total}</td>
      </tr>
      <!--Mostra status de Lucro ou Prejuízo-->
      <tr class="lucroPrejuizo">
        <td></td>
        <td class="status">${Math.sign(total) > 0 ? "[LUCRO]" : "[PREJUÍZO]"}</td>
      </tr>
      `

  objStorage.push({
    nome: nomeMercadoria,
    valor: valor,
    tipo: tipoSelecao
  })


  localStorage.setItem('objStorage', JSON.stringify(objStorage))

  objStorage.forEach((item) => {
    total += parseFloat(item.valor.replaceAll('.','').replaceAll(',','').replace(/([0-9][0-9])$/g, '.$1')) * parseInt(item.tipo+'1')
  }); total

  

};


function limparDados () { //Limpa a tabela

    let produtos = document.querySelectorAll('.produto')
    let precos = document.querySelectorAll('.preco')
    let totals = document.querySelectorAll('.tabTotal')
    let lP = document.querySelectorAll('.lucroPrejuizo')

    if (confirm("Deseja remover os dados da tabela?")) {

      produtos.forEach((element) => {
        element.remove();
      })
      precos.forEach((element) => {
        element.remove();
      })
      totals.forEach((element) => {
        element.remove();
      })
      lP.forEach((element) => {
        element.remove();
      })
  
      objStorage = [];
      localStorage.setItem('objStorage', JSON.stringify(objStorage))

      return true;
    } else {
      return false;
    }
    
};

//Mascara da tabela
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