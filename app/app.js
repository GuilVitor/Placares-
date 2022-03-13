
const url = "https://api.api-futebol.com.br/v1/campeonatos/10"

let headers = new Headers();

headers.append('Athorization', 'Bearer live_c1c639c0f6b0e2a135e5b62ad74307')
console.log(headers);

const options = {headers: {'Authorization' : 'Bearer live_c1c639c0f6b0e2a135e5b62ad74307'},
}

function buscarPartidas() {
    fetch(url, options)
   .then(resposta => {
     resposta.json()
      .then(obj => {
      mostrarPartidas(obj);
    })
  })
  .catch()
  
  }
  
  
  
  function mostrarPartidas(campeonatos) {
    console.log(campeonatos, "Isso é partidas para mobile")
  
  
  
    var image = document.createElement('img');
     image.setAttribute('src', campeonatos.logo)
     image.style.width='200px'
     image.style.marginLeft='-70%'
     image.style.height='200px'

  
    var nome  = document.createElement('h2');
    nome.innerText = campeonatos.edicao_atual.nome_popular
    nome.style.marginTop='-150px'
    nome.style.fontSize='50px'
    nome.style.marginLeft='25%'
    nome.style.color='black'
  
  
  
  
      document.getElementById('partidasAoVivo').append(image,nome);
    }
  
  document.write(buscarPartidas());
  
  ////////////////////////////LOGO DO CAMPEONATO//////////////////////////////




  const urltab = "https://api.api-futebol.com.br/v1/campeonatos/10/tabela"


function buscarPartidas2() {
  fetch(urltab, options)
 .then(resposta => {
   resposta.json()
    .then(obj => {
    mostrarPartidas2(obj);
  })
})
.catch()
}

function mostrarPartidas2(tabela) {
  console.log(tabela, "Isso é partidas para pc")

 for (i=0; i<tabela.length; i++){


  var ano  = document.createElement('h3');
  ano.style.marginLeft='-80%'


  var logo =  document.createElement('img');
  logo.setAttribute('src', tabela[i].time.escudo)
  logo.style.width='40px'
  logo.style.height='50px'
  logo.style.marginTop='10px'
  logo.style.marginLeft='-75%'


  var posicao = document.createElement('h3');
  posicao.innerText = tabela[i].posicao
  posicao.style.marginTop='-50px'
  posicao.style.marginLeft='-90%'
  posicao.style.color='white'
  posicao.style.backgroundColor='brown'

  var nomelogo = document.createElement('h5')
  nomelogo.innerText = tabela[i].time.nome_popular
  nomelogo.style.backgroundColor='red'
  nomelogo.style.marginTop='-15px'
  nomelogo.style.marginLeft='-50%'
  nomelogo.style.color='black'


  var ponto = document.createElement('h4')
  ponto.innerText=tabela[i].pontos
  ponto.style.backgroundColor='brown'
  ponto.style.marginTop='-25px'
  ponto.style.marginLeft='-15%'
  ponto.style.color='white'

  var vit = document.createElement('h4');
  vit.innerText=tabela[i].vitorias
  vit.style.marginTop='-60px'
  vit.style.marginLeft='39%'
  vit.style.color='white'
  vit.style.backgroundColor='brown'
  vit.style.width = '30px'


  var empate = document.createElement('h4')
  empate.innerText=tabela[i].empates
  empate.style.marginTop='-60px'
  empate.style.marginLeft='46%'
  empate.style.color='white'
  empate.style.backgroundColor='brown'
  empate.style.width = '30px'


  var derrota =  document.createElement('h4');
  derrota.innerText=tabela[i].derrotas
  derrota.style.marginTop='-60px'
  derrota.style.marginLeft='53%'
  derrota.style.color='white'
  derrota.style.backgroundColor='brown'
  derrota.style.width = '30px'


  var golpro = document.createElement('h4');
  golpro.innerText=tabela[i].gols_pro
  golpro.style.marginTop='-60px'
  golpro.style.marginLeft='60%'
  golpro.style.color='white'
  golpro.style.backgroundColor='brown'
  golpro.style.width = '30px'


  var golcontra = document.createElement('h4');
  golcontra.innerText=tabela[i].gols_contra
  golcontra.style.marginTop='-60px'
  golcontra.style.marginLeft='67%'
  golcontra.style.color='white'
  golcontra.style.backgroundColor='brown'
  golcontra.style.width = '30px'


  var saldo = document.createElement('h4');
  saldo.innerText=tabela[i].saldo_gols
  saldo.style.marginTop='-60px'
  saldo.style.marginLeft='74%'
  saldo.style.color='white'
  saldo.style.backgroundColor='brown'
  saldo.style.width = '30px'

  var jogo = document.createElement('h4');
  jogo.innerText=tabela[i].jogos
  jogo.style.marginTop='-60px'
  jogo.style.marginLeft='81%'
  jogo.style.color='white'
  jogo.style.backgroundColor='brown'
  jogo.style.width = '30px'


  var jogopassado = document.createElement('h4');
  jogopassado.innerText=tabela[i].aproveitamento
  jogopassado.style.marginTop='-60px'
  jogopassado.style.marginLeft='87%'
  jogopassado.style.color='black'
  jogopassado.style.backgroundColor='#6c93c7'
  jogopassado.style.width = '101px'

 
    document.getElementById('partidasAoVivo2').append(logo,ano, posicao,nomelogo,ponto,vit,empate,derrota,golpro,golcontra,saldo,jogo,jogopassado);
 }
}

document.write(buscarPartidas2());

//parte de tabela



