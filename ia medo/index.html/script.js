const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você recebeu acesso a uma Inteligência Artificial muito avançada. O que faz primeiro?",
        alternativas: [
            {
                texto: "Uso para aprender coisas novas.",
                afirmacao: "Você descobriu que a IA pode ser uma ótima ferramenta de estudo."
            },
            {
                texto: "Uso para fazer todo o meu trabalho.",
                afirmacao: "Você percebeu que depender totalmente da IA pode prejudicar seu aprendizado."
            }
        ]
    },
    {
        enunciado: "Uma IA consegue criar imagens muito realistas. O que você pensa?",
        alternativas: [
            {
                texto: "É importante avisar quando uma imagem foi criada por IA.",
                afirmacao: "Você acredita que a transparência é essencial."
            },
            {
                texto: "Não vejo necessidade de avisar.",
                afirmacao: "Você percebeu que isso pode causar desinformação."
            }
        ]
    },
    {
        enunciado: "Na escola, um colega usa IA para responder todas as atividades.",
        alternativas: [
            {
                texto: "A IA deve ajudar, não substituir o estudante.",
                afirmacao: "Você valoriza o aprendizado verdadeiro."
            },
            {
                texto: "Se tirar nota boa, está tudo certo.",
                afirmacao: "Você concluiu que a nota nem sempre representa conhecimento."
            }
        ]
    },
    {
        enunciado: "No futuro, robôs poderão substituir muitos empregos.",
        alternativas: [
            {
                texto: "Precisamos aprender novas habilidades.",
                afirmacao: "Você acredita na adaptação às novas tecnologias."
            },
            {
                texto: "A tecnologia deveria ser proibida.",
                afirmacao: "Você percebeu que o melhor caminho é aprender a conviver com ela."
            }
        ]
    },
    {
        enunciado: "Depois dessa missão, qual sua opinião sobre a Inteligência Artificial?",
        alternativas: [
            {
                texto: "Ela pode melhorar nossas vidas quando usada com responsabilidade.",
                afirmacao: "Você concluiu que a IA é uma ferramenta poderosa quando usada de forma ética."
            },
            {
                texto: "Ela traz mais riscos do que benefícios.",
                afirmacao: "Você concluiu que a IA exige muito cuidado e responsabilidade."
            }
        ]
    }
];

let atual = 0;
let historiaFinal = "";

function mostraPergunta() {

    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    caixaAlternativas.innerHTML = "";

    const perguntaAtual = perguntas[atual];

    caixaPerguntas.textContent = perguntaAtual.enunciado;

    perguntaAtual.alternativas.forEach(alternativa => {
        const botao = document.createElement("button");
        botao.textContent = alternativa.texto;

        botao.addEventListener("click", () => respostaSelecionada(alternativa));

        caixaAlternativas.appendChild(botao);
    });

}

function respostaSelecionada(opcao) {

    historiaFinal += opcao.afirmacao + " ";

    atual++;

    mostraPergunta();

}

function mostraResultado() {

    caixaPerguntas.textContent = "Missão concluída!";

    caixaAlternativas.innerHTML = "";

    textoResultado.textContent = historiaFinal;

}

mostraPergunta();