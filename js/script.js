import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { calcIMC, notANumber } from "./utils.js"

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")


inputHeight.addEventListener("keypress", () => {
   const height = inputHeight.value

   notANumber(height) ? AlertError.open() : AlertError.close()
})

inputWeight.addEventListener("keypress", () => {
   const weight = inputWeight.value

   notANumber(weight) ? AlertError.open() : AlertError.close()
})

form.onsubmit = function(event) {
   event.preventDefault()

   const height = inputHeight.value
   const weight = inputWeight.value

   const heightOrWeightIsNotANumber = notANumber(inputHeight.value) || notANumber(inputWeight.value)

   if (heightOrWeightIsNotANumber) {
      AlertError.open()
      return;
   }
   AlertError.close()

   const resultIMC = calcIMC(height, weight)
   displayResultMessage(resultIMC)
}

function displayResultMessage(result) {
   const message = `Seu IMC é de ${result}`

   Modal.message.textContent = message
   Modal.open()
}