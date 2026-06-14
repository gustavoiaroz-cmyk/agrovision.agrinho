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

    const incremento = Math.ceil(valorFinal / 100);

    const intervalo = setInterval(() => {

        contador += incremento;

        if (contador >= valorFinal) {
            contador = valorFinal;
            clearInterval(intervalo);
        }

        elemento.textContent = contador.toLocaleString('pt-BR');

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

    if (!hectares || hectares <= 0) {

        resultado.innerHTML =
            "⚠️ Digite uma quantidade válida de hectares.";

        return;
    }

    const economia = hectares * 500;

    resultado.innerHTML =
        `💧 Economia estimada: <strong>${economia.toLocaleString('pt-BR')}</strong> litros de água por dia.`;
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

    "🤖 Inovação e sustentabilidade caminham juntas no campo.",

    "🌾 O futuro da agricultura depende das escolhas que fazemos hoje.",

    "🚀 Sustentabilidade e produtividade podem andar juntas."

];

function mostrarFrase() {

    const fraseAleatoria =
        frases[Math.floor(Math.random() * frases.length)];

    alert(fraseAleatoria);

}


/* -----------------------------
   SCROLL SUAVE
------------------------------ */

document
.querySelectorAll('a[href^="#"]')
.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const destino =
            document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({
            behavior: "smooth"
        });

    });

});


/* -----------------------------
   ANIMAÇÃO AO ROLAR A PÁGINA
------------------------------ */

const elementos =
    document.querySelectorAll(".card, .section");

function revelarElementos() {

    const alturaTela =
        window.innerHeight;

    elementos.forEach(elemento => {

        const topo =
            elemento.getBoundingClientRect().top;

        if (topo < alturaTela - 100) {

            elemento.style.opacity = "1";
            elemento.style.transform = "translateY(0)";

        }

    });

}

elementos.forEach(elemento => {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(30px)";
    elemento.style.transition =
        "all 0.8s ease";

});

window.addEventListener(
    "scroll",
    revelarElementos
);

revelarElementos();


/* -----------------------------
   MENSAGEM NO CONSOLE
------------------------------ */

console.log(
    "🌾 AgroVision carregado com sucesso!"
);
