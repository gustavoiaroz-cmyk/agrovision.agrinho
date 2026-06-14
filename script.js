```javascript
/* =====================================
   AGROVISION - SCRIPT.JS
   Desenvolvido por Gustavo
===================================== */

/* -----------------------------
   MODO ESCURO
------------------------------ */

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        darkModeBtn.textContent = "☀️ Modo Claro";
    }else{
        darkModeBtn.textContent = "🌙 Modo Escuro";
    }

});


/* -----------------------------
   CALCULADORA DE ÁGUA
------------------------------ */

function calcularEconomia(){

    const hectares =
        Number(document.getElementById("hectares").value);

    const resultado =
        document.getElementById("resultadoAgua");

    if(hectares <= 0 || isNaN(hectares)){

        resultado.innerHTML =
            "⚠️ Digite um valor válido.";

        return;
    }

    let economia = hectares * 500;

    resultado.innerHTML =
        `💧 Com práticas sustentáveis, você pode economizar aproximadamente <strong>${economia.toLocaleString()}</strong> litros de água por dia.`;

}


/* -----------------------------
   CONTADOR DE ÁRVORES
------------------------------ */

let contadorArvores = 0;

function preservarArvore(){

    contadorArvores += 10;

    document.getElementById("contador").textContent =
        contadorArvores;

}


/* -----------------------------
   FRASES MOTIVACIONAIS
------------------------------ */

const frases = [

    "🌱 Cada ação sustentável ajuda a construir um futuro melhor.",

    "🚜 A tecnologia pode aumentar a produção e preservar a natureza.",

    "💧 Economizar água hoje garante alimentos amanhã.",

    "☀️ Energia limpa é uma aliada da agricultura sustentável.",

    "🌳 Preservar o meio ambiente é investir nas próximas gerações."

];

const fraseBtn =
    document.getElementById("fraseBtn");

fraseBtn.addEventListener("click", () => {

    const indice =
        Math.floor(Math.random() * frases.length);

    document.getElementById("fraseMotivacional")
        .textContent = frases[indice];

});


/* -----------------------------
   FORMULÁRIO
------------------------------ */

function enviarMensagem(){

    const nome =
        document.getElementById("nome").value;

    const mensagem =
        document.getElementById("mensagem").value;

    const resposta =
        document.getElementById("mensagemUsuario");

    if(nome === "" || mensagem === ""){

        resposta.innerHTML =
            "⚠️ Preencha todos os campos.";

        return;
    }

    resposta.innerHTML =
        `✅ Obrigado, ${nome}! Sua ideia foi registrada com sucesso.`;

}


/* -----------------------------
   MENSAGEM AUTOMÁTICA
------------------------------ */

window.addEventListener("load", () => {

    console.log(
        "AgroVision carregado com sucesso!"
    );

});
```
/* -----------------------------
   FORMULÁRIO DE IDEIAS
------------------------------ */

function enviarIdeia() {

    const nome =
        document.getElementById("nome").value;

    const ideia =
        document.getElementById("ideia").value;

    const mensagem =
        document.getElementById("mensagemUsuario");

    if(nome === "" || ideia === ""){

        mensagem.innerHTML =
            "⚠️ Preencha seu nome e sua ideia.";

        return;
    }

    mensagem.innerHTML =
        `✅ Obrigado, ${nome}! Sua ideia foi registrada com sucesso.`;

}
