const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')

for (let card of cards) {
  card.addEventListener("click", function() {
    const classLink = card.getAttribute("id")
    modalOverlay.classList.add('active')
    modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${classLink}`
  })
}

document.querySelector(".close-modal").addEventListener("click", function() {
  modalOverlay.classList.remove("active")
  modalOverlay.querySelector("iframe").src = ""
})

document.querySelector('.fullscreen-modal').addEventListener("click", function(){
  if (!(modal.classList.contains('fullscreen'))){
      modal.classList.add('fullscreen')    
  }else{
   modal.classList.remove('fullscreen')
  }
})