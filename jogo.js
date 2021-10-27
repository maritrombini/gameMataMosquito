var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
  //1500
  criaMosquitoTempo = 1500
} else if (nivel === 'dificil') {
  //1000
  criaMosquitoTempo = 1000
} else if (nivel === 'chucknorris') {
  //750
  criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo() {
  altura = window.innerHeight
  largura = window.innerWidth

  console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function () {
  tempo -= 1

  if (tempo < 0) {
    clearInterval(cronometro)
    clearInterval(criaMosquito)

    window.location.href = 'vitoria.html'
  } else {
    document.getElementById('cronometro').innerHTML = tempo
  }
}, 1000)

function posicaoRandomica() {
  //remover o mosquito anterior caso exista
  if (document.getElementById('mosquito')) {
    //testa se há algum
    document.getElementById('mosquito').remove()

    if (vidas > 3) {
      window.location.href = 'fim_de_jogo.html'
    } else {
      document.getElementById('v' + vidas).src = './imagens/coracao_vazio.png'

      vidas++
    }
  }

  var posicaoX = Math.floor(Math.random() * largura) - 90
  var posicaoY = Math.floor(Math.random() * altura) - 90 //90 corrige o estouro do tamanho da tela

  posicaoX = posicaoX < 0 ? 0 : posicaoX // prevenindo negativos já que subtraímos 90
  posicaoY = posicaoY < 0 ? 0 : posicaoY

  console.log(posicaoX, posicaoY)

  //criar elemento
  var mosquito = document.createElement('img')
  mosquito.src = 'imagens/mosca.png'
  mosquito.className = tamanhoAleatorio() + '' + ladoAleatorio()
  mosquito.style.left = posicaoX + 'px'
  mosquito.style.top = posicaoY + 'px'
  mosquito.style.position = 'absolute'
  mosquito.id = 'mosquito'
  mosquito.onclick = function () {
    this.remove()
  }

  document.body.appendChild(mosquito)
}

function tamanhoAleatorio() {
  // criando os tamanhos variados
  var classe = Math.floor(Math.random() * 3)

  switch (classe) {
    case 0:
      return ' mosquito1' // return dispensa o break pois o processamento da função é interrompido neste ponto
    case 1:
      return ' mosquito2'
    case 2:
      return ' mosquito3'
  }
}

//olhando para diferentes lados
function ladoAleatorio() {
  var classe = Math.floor(Math.random() * 2)

  switch (classe) {
    case 0:
      return ' ladoA' // return dispensa o break pois o processamento da função é interrompido neste ponto
    case 1:
      return ' ladoB'
  }
}
