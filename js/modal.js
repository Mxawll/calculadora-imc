export const Modal = {
   wrapper: document.querySelector(".modal-wrapper"),
   buttonCalcIMC: document.querySelector(".btnIMC"),
   buttonClose: document.querySelector(".close"),
   message: document.querySelector(".modal-wrapper .title"),

   open() {
      Modal.wrapper.classList.remove("hide")
   },

   close() {
      Modal.wrapper.classList.add("hide")
   },

   pressingEscTheModalCloses(event) {
      const isModalShown = !Modal.wrapper.classList.contains("hide")
      const isEscPressed = event.key === "Escape"

      const canCloseModal = isEscPressed && isModalShown
      if (canCloseModal) {
         Modal.close()
      }
   }
}

const clickButtonClose = Modal.buttonClose

clickButtonClose.addEventListener("click", Modal.close)
window.addEventListener("keydown", Modal.pressingEscTheModalCloses)