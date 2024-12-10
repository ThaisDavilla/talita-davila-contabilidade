let slideIndex = 0;
const carouselInner = document.querySelector('.carousel-inner');
const numImages = carouselInner.children.length;

function showSlides() {
  slideIndex = (slideIndex + 1) % numImages;
  const translateX = -slideIndex * 100 / numImages + '%'; // Calcula o deslocamento
  carouselInner.style.transform = `translateX(${translateX})`;
}

setInterval(showSlides, 3000);


const cards = document.querySelectorAll('.card img');
const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');
const closeModal = document.querySelector('.close');

cards.forEach(card => {
  card.addEventListener('click', () => {
    modalText.textContent = card.dataset.info;
    modal.style.display = 'block';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}