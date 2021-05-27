const tierra = document.querySelectorAll('.tierra')
const tiempo = document.querySelector('#tiempo')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null

function randomPoso(){
  tierra.forEach(
    poso => {
    poso.classList.remove('topo')
  }
  )

  let randomPoso = tierra[Math.floor(Math.random() * 9)]
  randomPoso.classList.add('topo')

  hitPosition = randomPoso.id
}

tierra.forEach(
  poso => {
  poso.addEventListener('mousedown', () => {
    if (poso.id == hitPosition) {
      result++
      score.textContent = result
      hitPosition = null
    }
  })
}
)

function moveTopo() {
  timerId = setInterval(randomPoso, 500)
}

moveTopo()

function countDown() {
 currentTime--
 tiempo.textContent = currentTime

 if (currentTime == 0) {
   clearInterval(countDownTimerId)
   clearInterval(timerId)
   alert('El juego a acabado, tu puntaje es: ' + result)
 }

}

let countDownTimerId = setInterval(countDown, 1000)

