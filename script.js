/* =====================================
   AGROVISION 2.0
   Desenvolvido por Gustavo
===================================== */

/* -----------------------------
   CONTADORES ANIMADOS
------------------------------ */

function animarContador(id, valorFinal) {

    let contador = 0;
    const elemento = document.getElementById(id);

    const intervalo = setInterval(() => {

        contador += Math.ceil(valorFinal / 100);

        if (contador >= valorFinal) {
            contador = valorFinal;
            clearInterval(intervalo);
        }

        elemento.textContent = contador.toLocaleString();

    }, 20);

}

window.addEventListener("load", () => {

    animarContador("agua", 50000);
    animarContador("arvores", 1200);
    animarContador("produtores", 350);

});


/* -----------------------------
   CALCULADORA SUSTENTÁVEL
------------------------------ */

function calcularEconomia() {

    const hectares =
        Number(document.getElementById("hectares").value);

    const resultado =
        document.getElementById("resultado");

    if (hectares <= 0 || isNaN(hectares)) {

        resultado.innerHTML =
            "⚠️ Digite uma quantidade válida de hectares.";

        return;
    }

    const economia = hectares * 500;

    resultado.innerHTML =
        `💧 Economia estimada: <strong>${economia.toLocaleString()}</strong> litros de água por dia.`;

}


/* -----------------------------
   MODO ESCURO
------------------------------ */

const darkModeBtn =
    document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        darkModeBtn.textContent =
            "☀️ Modo Claro";

    } else {

        darkModeBtn.textContent =
            "🌙 Modo Escuro";

    }

});


/* -----------------------------
   FRASES MOTIVACIONAIS
------------------------------ */

const frases = [

    "🌱 Cada pequena ação sustentável gera grandes resultados.",

    "🚜 A tecnologia é uma aliada da agricultura moderna.",

    "💧 Economizar água hoje é garantir alimento amanhã.",

    "🌳 Preservar a natureza é investir no futuro.",

    "☀️ Produzir mais e preservar melhor é possível.",

    "🤖 Inovação e sustentabilidade caminham juntas no campo."

];

function mostrarFrase() {

    const fraseAleatoria =
        frases[Math.floor(Math.random() * frases.length)];

    alert(fraseAleatoria);

}


/* -----------------------------
   FRASE AUTOMÁTICA
------------------------------ */

setTimeout(() => {

    console.log(
        "AgroVision carregado com sucesso!"
    );

}, 1000);


/* -----------------------------
   EFEITO SUAVE NOS LINKS
------------------------------ */

document.querySelectorAll('a[href^="#"]')
.forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const destino =
            document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({
            behavior: "smooth"
        });

    });

});
