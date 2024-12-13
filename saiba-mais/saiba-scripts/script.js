const carouselInner = document.querySelector('.carousel-inner');
const numImages = carouselInner.children.length;
let slideIndex = 0;
const slideWidth = carouselInner.offsetWidth;

function showSlides() {
  slideIndex = (slideIndex + 1) % (numImages -1);
  const translateX = -slideIndex * slideWidth;
  carouselInner.style.transform = `translateX(${translateX}px)`;
}


function smoothTransition() {
  const targetTranslate = -slideIndex * slideWidth;
  carouselInner.style.transform = `translateX(${targetTranslate}px)`;
}



setInterval(() => {
  showSlides();
  smoothTransition(); 
}, 3000);


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