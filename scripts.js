const form = document.querySelector(".formulario-fale-conosco");
const mask = document.querySelector(".mascara-formulario");
const btnAbrir = document.getElementById("open-form");

// Abre o formulário
btnAbrir.addEventListener("click", () => {
    form.style.left = "50%";
    form.style.transform = "translateX(-50%)";
    mask.style.visibility = "visible";
});

// Fecha o formulário ao clicar na máscara
mask.addEventListener("click", () => {
    form.style.left = "-300px";
    mask.style.visibility = "hidden";
});

window.addEventListener('scroll', function () {
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

/* Scroll Galeria  */

document.addEventListener("DOMContentLoaded", function () {
  const videoPrincipal = document.getElementById("videoPrincipal");
  const btnEsquerda = document.getElementById("btnEsquerda");
  const btnDireita = document.getElementById("btnDireita");
  const thumbs = document.querySelectorAll(".thumb");

  const videos = [
    "./img/IMG_4248.MOV",
    "./img/IMG_4245.MOV",
    "./img/copy_43B54BA9-BA25-4103-B4B4-AD9B29FC2ACB.mov",
    "./img/IMG_3272.MOV",
    "./img/IMG_4256.MOV"
  ];

  let indiceAtual = 0;
  let trocando = false;

  function trocarVideo(indice) {
    if (trocando) return;
    trocando = true;

    indiceAtual = indice;

    videoPrincipal.classList.add("saindo");

    setTimeout(() => {
      videoPrincipal.src = videos[indiceAtual];
      videoPrincipal.load();

      videoPrincipal.onloadeddata = function () {
        videoPrincipal.classList.remove("saindo");
        videoPrincipal.classList.add("entrando");

        videoPrincipal.play().catch(() => {});

        setTimeout(() => {
          videoPrincipal.classList.remove("entrando");
          trocando = false;
        }, 400);
      };

      thumbs.forEach((thumb, i) => {
        thumb.classList.toggle("ativo", i === indiceAtual);
      });
    }, 250);
  }

  btnDireita.addEventListener("click", function () {
    const proximo = (indiceAtual + 1) % videos.length;
    trocarVideo(proximo);
  });

  btnEsquerda.addEventListener("click", function () {
    const anterior = (indiceAtual - 1 + videos.length) % videos.length;
    trocarVideo(anterior);
  });

  thumbs.forEach((thumb, index) => {
    thumb.addEventListener("click", function () {
      trocarVideo(index);
    });
  });
});

                  
/*Imagem e texto primario*/

document.addEventListener("DOMContentLoaded", function () {
  const elementos = document.querySelectorAll(
    ".reveal, .reveal-card, .reveal-left, .reveal-right, .reveal-row"
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.15
  });

  elementos.forEach((elemento) => {
    observer.observe(elemento);
  });
});
