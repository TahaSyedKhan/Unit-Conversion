/*
1 unit = 3.281 feet
1 unit = 0.264 gallon
1 kilogram = 2.204 ound
*/

const convertBtn = document.getElementById("convert-btn")
const inputEL = document.getElementById("input-el")
const lengthEL  = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEL = document.getElementById("mass")


function meterToFeet(unit) {
   return `${unit} meters = ${(unit * 3.281).toFixed(3)} feet | ${unit} feet = ${(unit * 0.3048).toFixed(3)} meters`
}

function literToGAllon(unit) {
    return `${unit} liters = ${(unit * 0.264).toFixed(3)} gallons | ${unit} gallons = ${(unit * 3.78541).toFixed(3)} liters`
}

function kiloToound(unit) {
    return `${unit} kilos = ${(unit * 2.204).toFixed(3)} pounds | ${unit} pounds = ${(unit *0.453592).toFixed(3)} = kilos`
}


convertBtn.addEventListener("click", function() {
    lengthEL.textContent = meterToFeet(inputEL.value)
    volumeEl.textContent = literToGAllon(inputEL.value)
    massEL.textContent = kiloToound(inputEL.value)
    inputEL.value = ""
})


