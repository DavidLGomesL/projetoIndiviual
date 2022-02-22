//criação do arquivo js que irá interagir com a tabela.

var transactions = [ //variavel para definir modelo de distribuição de mercadoria e valores na tabela.
    {
      merchandise: 'lorem ipsum dolor',
      value:  12999.99,
    },

    {
      merchandise: 'Quis nostrud exercitation',
      value:  99.99,
    },

    {
      merchandise: 'lorem ipsum',
      value:  9.99,
    },
]


for (products in transactions) { //usado para inclusão dos valores formando a tabela sem precisar escrever caractere por caractere.
  document.querySelector('table.tabelaGeral tbody').innerHTML += (`<tr>
      <td > ${transactions[products].merchandise} </td>
      <td>${transactions[products].value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </td> 
    </tr>
    `) //".toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})" usado para atribuir o simbolo real "R$" da moeda brasileira e para transformar os valores no formato da moeda brasileira.
}