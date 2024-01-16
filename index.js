const convertBtn = document.getElementById("convert-button")
const inputNum = document.getElementById("input-number")
const displayNums = document.getElementsByClassName("display-number")
const error = document.getElementById("error")
const feetNum = document.getElementById("to-feet")
const metersNum = document.getElementById("to-meters")
const gallonsNum = document.getElementById("to-gallons")
const litersNum = document.getElementById("to-liters")
const poundsNum = document.getElementById("to-pounds")
const kilosNum = document.getElementById("to-kilos")

console.log(isNumber(2));

convertBtn.addEventListener("click", function() {
    if (!parseInt(inputNum.value)) {
        error.innerHTML = "Please enter a number"
        return
    }
    error.innerHTML= ""

    Array.prototype.forEach.call(displayNums, function(displayNum) {
        displayNum.textContent = inputNum.value
    });

    feetNum.textContent = (inputNum.value * 3.281).toFixed(3)
    metersNum.textContent = (inputNum.value / 3.281).toFixed(3)
    gallonsNum.textContent = (inputNum.value * 0.264).toFixed(3)
    litersNum.textContent = (inputNum.value / 0.264).toFixed(3)
    poundsNum.textContent = (inputNum.value * 2.204).toFixed(3)
    kilosNum.textContent = (inputNum.value / 2.204).toFixed(3)
})

function isNumber(value) {
   return typeof value === 'number';
}