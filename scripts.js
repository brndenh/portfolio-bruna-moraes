const form = document.querySelector(".formulario-fale-conosco")
const mask = document.querySelector(".mascara-formulario")
function ClickButton () {
form.style.left = "50%"
form.style.transform = "translateX(-50%)"
mask.style.visibility = "visible"
}
function ClickMask () {
form.style.left = "-300px"
mask.style.visibility = "hidden"   
}
window.addEventListener('scroll', function() {
  const h1 = document.querySelector('.texto1 h1');
  const h2 = document.querySelector('.texto1 h2');
  const p = document.querySelector('.texto1 p');

  const h1Position = h1.getBoundingClientRect().top;
  const h2Position = h2.getBoundingClientRect().top;
  const pPosition = p.getBoundingClientRect().top;

  const windowHeight = window.innerHeight;

  if (h1Position < windowHeight) {
    h1.classList.add('visible');
  }

  if (h2Position < windowHeight) {
    h2.classList.add('visible');
  }

  if (pPosition < windowHeight) {
    p.classList.add('visible');
  }
});
