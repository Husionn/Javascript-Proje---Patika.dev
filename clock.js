let userName = prompt("Lütfen İsminizi giriniz.")

let myName = document.querySelector(`#myName`)
myName.innerHTML = userName

let myClock = document.querySelector("#myClock")

let time = new Date()

let finalTime = `Günün Saati: ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} `
myClock.innerHTML = finalTime
