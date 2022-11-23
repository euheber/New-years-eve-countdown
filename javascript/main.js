const dayContainer = document.querySelector("#day-time")
const hourContainer = document.querySelector("#hour-time")
const minutesContainer = document.querySelector("#minute-time")
const secondsContainer = document.querySelector("#seconds-time")
const CountdownTitle = document.querySelector('#countdown-title')
const timerContainer = document.querySelector('.number')
const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`)

const handleZero = number => number < 10 ?  `0${number}` : number

const insertDataAtDOM = (days, hours, minutes, seconds) => {
  dayContainer.textContent = handleZero(days)
  hourContainer.textContent = handleZero(hours)
  minutesContainer.textContent = handleZero(minutes)
  secondsContainer.textContent = handleZero(seconds)
  CountdownTitle.textContent = `Contagem regressiva para ${nextYear}`
}


const flipAnimation = (day, hour, minutes, seconds) => {
  secondsContainer.classList.toggle('active')
  seconds === 59 ? minutesContainer.classList.toggle('active') : ''
  if( minutes < 1 &&  hourContainer.classList.contains('active')){
    return
  } else if(minutes < 1){ 
      hourContainer.classList.toggle('active')
  }
}

const getData = () => {
  const dataAtual = new Date()
  let countDown = newYearTime - dataAtual
  const days = Math.floor(countDown / 1000 / 60 / 60 / 24)
  const hour = Math.floor(countDown / 1000 / 60 / 60) % 24
  const minutes = Math.floor(countDown / 1000 / 60) % 60
  const seconds = Math.floor(countDown / 1000) % 60
  insertDataAtDOM(days, hour, minutes, seconds)
  flipAnimation(days,hour, minutes, seconds)
}

setInterval(getData, 1000)
