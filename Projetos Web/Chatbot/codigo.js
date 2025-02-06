//Aviso: Parte desse script foi feito com ajuda de IA, não possuo conhecimento avançado de Javascript (utilizei minha lógica de programação para desenvolver esse código).

// Saber o tamanho da tela para a imagem de fundo -> Ver no console
function printScreenSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    console.log(`Largura da tela: ${width}px`);
    console.log(`Altura da tela: ${height}px`);
}

printScreenSize();
window.onresize = printScreenSize;
//---------------------

let mensagem_chatbot = document.getElementById("mensagem_chatbot");

let tempoVisivel = 5000;

function ajustarAlturaChatbot() {
    mensagem_chatbot.style.height = mensagem_chatbot.scrollHeight + "px";
}

//Function feita com auxilio de IA
function exibirMensagem(mensagem, tempoVisivel = 5000, callback) {
    // Limpa o conteúdo anterior
    mensagem_chatbot.innerHTML = '';

    // Cria um elemento span para aplicar a animação de digitação
    let span = document.createElement('span');
    span.className = 'typing-animation';

    // Adiciona o elemento span ao div #mensagem_chatbot
    mensagem_chatbot.appendChild(span);

    // Cria um contador para controlar o atraso entre os caracteres
    let i = 0;
    let typingInterval = setInterval(function() {
        // Adiciona cada caractere à mensagem com um pequeno atraso
        span.textContent += mensagem[i];
        i++;

        // Quando todos os caracteres foram adicionados, limpa o intervalo
        if (i >= mensagem.length) {
            clearInterval(typingInterval);
            ajustarAlturaChatbot(); // Ajusta a altura do chatbot após a animação

            // Atraso após a digitação da mensagem
            setTimeout(function() {
                if (typeof callback === 'function') {
                    callback();
                }
            }, tempoVisivel); // Tempo visível na tela antes de mudar para a próxima mensagem
        }
    }, 100); // Ajuste o intervalo conforme necessário
}

function qual_pergunta() {
    let saudacoes = [
        "Olá.",
        "Saudações.",
        "Boas vindas.",
        "Oi!",
        "Tudo bem?",
        "Bem-vindo(a)."
    ];

    let saudacao = Math.floor(Math.random() * saudacoes.length);
    exibirMensagem(saudacoes[saudacao], tempoVisivel, function() {
        exibirMensagem('Sou um chatbot simplificado que irá te apresentar o Future Map.', tempoVisivel, function() {
            exibirMensagem('Qual é a sua pergunta?', tempoVisivel, function() {
                let perguntas = document.getElementById("Perguntas");
                perguntas.hidden = false;
                setTimeout(function() {
                    perguntas.classList.add("show");
                }, 10);
            });
        });
    });
}


window.onload = qual_pergunta;

let pergunta_motivos = document.getElementById("pergunta_motivos");
let pergunta_funcionamento = document.getElementById("pergunta_funcionamento");
let pergunta_custo = document.getElementById("pergunta_custo");
let pergunta_requisitos = document.getElementById("pergunta_requisitos");
let pergunta_pausa = document.getElementById("pergunta_pausa");
let pergunta_certificacao = document.getElementById("pergunta_certificacao");
let pergunta_teste = document.getElementById("pergunta_teste");
let pergunta_nivel = document.getElementById("pergunta_nivel");
let pergunta_reembolso = document.getElementById("pergunta_reembolso");

function desabilitarBotoes() {
    let botoesPerguntas = document.querySelectorAll("#Perguntas button");
    botoesPerguntas.forEach(botao => {
        botao.disabled = true;
    });
}

function habilitarBotoes() {
    let botoesPerguntas = document.querySelectorAll("#Perguntas button");
    botoesPerguntas.forEach(botao => {
        botao.disabled = false;
    });
}


// ------------------------------------------------------------------------------
//Sincronizacao do tempo feita com auxilio de IA

let duvidas_finais = [
    "Deseja perguntar mais alguma coisa?",
    "Mais alguma dúvida?",
    "Tem mais alguma pergunta?",
    "Quer saber mais sobre algo?",
    "Caso tenha mais dúvidas, só perguntar.",
    "Tem mais alguma dúvida?",
    "Dúvidas?"
];

// respostas do funcionamento
pergunta_funcionamento.addEventListener("click", function() {
    let duvida_f = Math.floor(Math.random() * duvidas_finais.length);
    desabilitarBotoes();
    exibirMensagem("O Future Map é uma ferramenta que te oferece uma trilha de estudos no contexto tecnológico.", tempoVisivel, function() {
        exibirMensagem("Utilizando vídeo aulas, materiais em PDF, e projetos que irão desenvolver as suas habilidades.", tempoVisivel, function() {
            exibirMensagem(duvidas_finais[duvida_f], tempoVisivel, function() {
                habilitarBotoes();
            });
        });
    });
});

// respostas de como ele pode ajudar
pergunta_motivos.addEventListener("click", function() {
    let duvida_f = Math.floor(Math.random() * duvidas_finais.length);
    desabilitarBotoes();
    exibirMensagem("O Future Map te dará uma chance de aprender e se aperfeiçoar no mundo da tecnologia.", tempoVisivel, function() {
        exibirMensagem("Programação Web, Cyber security, Inteligência Artificial, são alguns dos tópicos oferecidos.", tempoVisivel, function() {
            exibirMensagem("Estudar apenas um desses tópicos permite que você fique atualizado para suprir as demandas.", tempoVisivel, function() {
                exibirMensagem(duvidas_finais[duvida_f], tempoVisivel, function() {
                    habilitarBotoes();
                });
            });
        });
    });
});

// respostas do custo
pergunta_custo.addEventListener("click", function() {
    let duvida_f = Math.floor(Math.random() * duvidas_finais.length);
    desabilitarBotoes();
    exibirMensagem("Os cursos terão algumas aulas gratuitas para o usuário experimentar.", tempoVisivel, function() {
        exibirMensagem("O usuário poderá conseguir descontos nos seus próximos cursos caso o seu rendimento seja alto.", tempoVisivel, function() {
            exibirMensagem("Haverá um teste final com certificado comprovando as habilidades do usuário.", tempoVisivel, function() {
                exibirMensagem(duvidas_finais[duvida_f], tempoVisivel, function() {
                    habilitarBotoes();
                });
            });
        });
    });
});

// respostas sobre uma pausa
pergunta_pausa.addEventListener("click", function() {
    let duvida_f = Math.floor(Math.random() * duvidas_finais.length);
    desabilitarBotoes();
    exibirMensagem("A trilha de conhecimento irá salvar o seu progresso exatamente de onde você parou.", tempoVisivel, function() {
        exibirMensagem('Pode ser no meio de um vídeo, exercício ou durante algum texto, exceto durante provas.', tempoVisivel, function() {
            exibirMensagem(duvidas_finais[duvida_f], tempoVisivel, function() {
                habilitarBotoes();
            });
        });
    });
});

// respostas sobre o certificado
pergunta_certificacao.addEventListener("click", function() {
    let duvida_f = Math.floor(Math.random() * duvidas_finais.length);
    desabilitarBotoes();
    exibirMensagem("Ao final da trilha, o usuário realizará uma prova provando o seu conhecimento.", tempoVisivel, function() {
        exibirMensagem('Caso o rendimento tenha sido bom, um certificado de conclusão vai ficar disponível.', tempoVisivel, function() {
            exibirMensagem(duvidas_finais[duvida_f], tempoVisivel, function() {
                habilitarBotoes();
            });
        });
    });
});

// respostas sobre gratuidade
pergunta_teste.addEventListener("click", function() {
    let duvida_f = Math.floor(Math.random() * duvidas_finais.length);
    desabilitarBotoes();
    exibirMensagem("As aulas iniciais são gratuitas, se gostar, pode adquirir o resto por preços acessíveis.", tempoVisivel, function() {
        exibirMensagem(duvidas_finais[duvida_f], tempoVisivel, function() {
            habilitarBotoes();
        });
    });
});

// respostas sobre o nível
pergunta_nivel.addEventListener("click", function() {
    let duvida_f = Math.floor(Math.random() * duvidas_finais.length);
    desabilitarBotoes();
    exibirMensagem("As trilhas de conhecimento têm materiais básicos até avançados, evoluindo com as etapas da trilha.", tempoVisivel, function() {
        exibirMensagem(duvidas_finais[duvida_f], tempoVisivel, function() {
            habilitarBotoes();
        });
    });
});

// respostas sobre reembolso
pergunta_reembolso.addEventListener("click", function() {
    let duvida_f = Math.floor(Math.random() * duvidas_finais.length);
    desabilitarBotoes();
    exibirMensagem("O reembolso é viável até 2 horas após a compra.", tempoVisivel, function() {
        exibirMensagem(duvidas_finais[duvida_f], tempoVisivel, function() {
            habilitarBotoes();
        });
    });
});

// respostas sobre os requisitos
pergunta_requisitos.addEventListener("click", function() {
    let duvida_f = Math.floor(Math.random() * duvidas_finais.length);
    desabilitarBotoes();
    exibirMensagem("Basta ter um computador com acesso à internet para aproveitar toda a trilha.", tempoVisivel, function() {
        exibirMensagem(duvidas_finais[duvida_f], tempoVisivel, function() {
            habilitarBotoes();
        });
    });
});
// ------------------------------------------------------------------------------
