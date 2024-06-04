export function notANumber(value) {
   return isNaN(value) || value == ""
}

export function calcIMC(height, weight) {
   
   const imc = (weight / (height / 100) ** 2).toFixed(2)
   return imc
}