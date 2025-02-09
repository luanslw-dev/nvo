let imgSlider = document.querySelectorAll(".slider-container .slider-box");
let btnProx = document.querySelector("#proxima");
let btnAnter = document.querySelector("#anterior");
let btnNav = document.querySelectorAll(".btn-nav-box .btn-nav");

let contadorImg = imgSlider.length;
let imgAtiva = 0;

btnProx.addEventListener("click", () => {
  imgAtiva++;
  if (imgAtiva >= contadorImg) {
    imgAtiva = 0;
  }
  mostrarSlider();
});

btnAnter.addEventListener("click", () => {
  imgAtiva--;
  if (imgAtiva < 0) {
    imgAtiva = contadorImg - 1;
  }

  mostrarSlider();
});

function mostrarSlider() {
  let antigaImg = document.querySelector(".slider-container .slider-box.ativo");
  let antigoBtnNav = document.querySelector(".btn-nav-box .btn-nav.ativo");

  antigaImg.classList.remove("ativo");
  antigoBtnNav.classList.remove("ativo");

  imgSlider[imgAtiva].classList.add("ativo");
  btnNav[imgAtiva].classList.add("ativo");
}

btnNav.forEach((btn, indice) => {
  btn.addEventListener("click", () => {
    imgAtiva = indice;
    mostrarSlider();
  });
});

// Seleciona as divs de cada imagem do slider
const sliderBoxes = document.querySelectorAll('.slider-box');
const btnNavs = document.querySelectorAll('.btn-nav');
let currentIndex = 0;
const totalSlides = sliderBoxes.length;

// Função para atualizar o slider
function updateSlider() {
  // Remove a classe 'ativo' de todos os slides
  sliderBoxes.forEach((box) => box.classList.remove('ativo'));
  btnNavs.forEach((btn) => btn.classList.remove('ativo'));

  // Adiciona a classe 'ativo' ao slide atual
  sliderBoxes[currentIndex].classList.add('ativo');
  btnNavs[currentIndex].classList.add('ativo');
}

// Função para avançar o slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
}

// Função para retroceder o slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlider();
}

// Definindo os botões de navegação
document.getElementById('proxima').addEventListener('click', nextSlide);
document.getElementById('anterior').addEventListener('click', prevSlide);

// Definindo o comportamento do slider automático
setInterval(nextSlide, 5000); // Muda de slide a cada 5 segundos

// Inicializa o slider
updateSlider();
