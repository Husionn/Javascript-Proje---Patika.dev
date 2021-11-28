let userName = prompt("Lütfen İsminizi giriniz.")
let userNameUpperCase = `${userName[0].toUpperCase()}${userName.slice(1).toLowerCase()}`

let myName = document.querySelector(`#myName`)
myName.innerHTML = userNameUpperCase

let myClock = document.querySelector("#myClock")

let time = new Date()

let finalTime = `Günün Saati: ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
myClock.innerHTML = finalTime
