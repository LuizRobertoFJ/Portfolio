// 1. Dicionário de Textos
const textos = {
    en: {
        nomeDestaque: "I'm Luiz Roberto",
        sobrenome: "Faria Junior",
        headline: "In the ring or in the code, my mission is always to evolve and deliver peak performance.",
        sobre: "About me",
        sobreh3: "Ring discipline, code precision.",
        foraDasTelas: "Beyond the screens",
        foraDasTelash3: "Balance in motion.",
        sobrep1: "My name is Luiz Roberto, and I believe that developing software is, above all, an exercise in resilience. I am a Systems Analysis and Development student who, for the past two years, has split my time between the keyboard and Muay Thai training.",
        sobrep2: "In the ring, I learned that technique without focus yields no results. In Web Development, I apply this same mindset to build modern, functional interfaces using HTML, CSS, and JavaScript. However, my curiosity knows no bounds: I strive for a 360º view of development, diving deep into the Back-end to create solutions that are as robust under the hood as they are elegant on the surface.",
        sobrep3: "My most significant technical milestone to date is Find Ware, a comprehensive inventory management ecosystem where I integrated React, Node.js, and PostgreSQL.",
        sobrep4: "I believe a high-performance developer needs a mind and body in sync. Muay Thai has taught me non-negotiable values: discipline, respect, and loyalty.",
        sobrep5: "I am a lifelong learner, driven by constant evolution and a commitment to always delivering my best, both inside and outside the ring.",
        habilidades: "Skills",
        habilidadesP: "The technologies I use to transform ideas into modern interfaces.",
        projeto: "Projects",
        contato: "Contact",
        contatoTitulo: "Let's talk?",
        contatoP: "I am always looking for new challenges and connections. Feel free to send me a message or follow me on social media.",
    },
    pt: {
        nomeDestaque: "Sou o Luiz Roberto",
        sobrenome: "Faria Junior",
        headline: "No ringue ou no código, minha missão é sempre evoluir e entregar o melhor desempenho.",
        sobre: "Sobre mim",
        sobreh3: "A disciplina do ringue, a precisão do código.",
        foraDasTelas: "Fora das telas",
        foraDasTelash3: "Equilíbrio em movimento.",
        sobrep1: "Meu nome é Luiz Roberto e acredito que desenvolver software é, acima de tudo, um exercício de resiliência. Sou estudante de Análise e Desenvolvimento de Sistemas e, há dois anos, divido meu tempo entre as telas e os treinos de Muay Thai.",
        sobrep2: "No esporte, aprendi que técnica sem foco não gera resultados. No desenvolvimento Web, aplico essa mesma mentalidade para construir interfaces modernas e funcionais com HTML, CSS e JavaScript.",
        sobrep3: "Meu maior marco técnico até agora é o Find Ware, um ecossistema de gestão de estoque onde integrei React, Node.js e PostgreSQL.",
        sobrep4: "Acredito que um desenvolvedor de alta performance precisa de um corpo e mente em sintonia. O Muay Thai me ensinou valores inegociáveis: disciplina, respeito e lealdade.",
        sobrep5: "Sou um eterno aprendiz, movido pela evolução constante e pelo compromisso de entregar sempre o meu melhor, dentro e fora do ringue.",
        habilidades: "Habilidades",
        habilidadesP: "As tecnologias que utilizo para transformar ideias em interfaces modernas.",
        projeto: "Projetos",
        contato: "Contato",
        contatoTitulo: "Vamos conversar?",
        contatoP: "Estou sempre em busca de novos desafios e conexões. Sinta-se à vontade para me enviar uma mensagem ou me seguir nas redes sociais.",
    }
};

const traducoesSaudacao = {
    pt: { bom_dia: " Ola, Bom dia ☀️", boa_tarde: "Ola, Boa tarde 🌤️", boa_noite: "Ola, Boa noite 🌙" },
    en: { bom_dia: "  Hello, Good morning ☀️", boa_tarde: " Hello, Good afternoon 🌤️", boa_noite: "Hello, Good evening 🌙" }
};

// 2. Variáveis de Controle
let currentLang = "pt"; // Força início em PT
const switchBtn = document.getElementById("langToggle");
const activeLangDisplay = document.getElementById("activeLangDisplay");
const elementosTraduziveis = document.querySelectorAll("[data-translate]");

// 3. Função de Atualização de Idioma e Visual do Toggle
function updateLanguage(lang) {
    // Atualiza textos do dicionário principal
    elementosTraduziveis.forEach(el => {
        const key = el.getAttribute("data-translate");
        
        if (key === "saudacao") {
            // Lógica da Saudação por horário
            const hora = new Date().getHours();
            let chaveHora = (hora >= 6 && hora < 12) ? "bom_dia" : 
                             (hora >= 12 && hora < 18) ? "boa_tarde" : "boa_noite";
            el.textContent = traducoesSaudacao[lang][chaveHora];
        } else if (textos[lang][key]) {
            el.textContent = textos[lang][key];
        }
    });

    // Atualiza o texto dentro da bolinha (Thumb)
    if (activeLangDisplay) {
        activeLangDisplay.textContent = lang.toUpperCase();
    }

    // MOVE A BOLINHA: Adiciona ou remove a classe .en conforme seu CSS
    if (lang === "en") {
        switchBtn.classList.add("en");
    } else {
        switchBtn.classList.remove("en");
    }

    // Salva no storage (opcional, já que você quer resetar ao F5, mas mantém a lógica)
    localStorage.setItem("idioma", lang);
}

// 4. Event Listener do Clique no Switch
switchBtn.addEventListener("click", () => {
    currentLang = (currentLang === "pt") ? "en" : "pt";
    updateLanguage(currentLang);
});

// 5. Efeito de Scroll na Navbar
window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNav');
    if (nav) {
        window.scrollY > 50 ? nav.classList.add('scrolled') : nav.classList.remove('scrolled');
    }
});

// 6. Menu Mobile (Hambúrguer) corrigido
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-item');

if (menuIcon) {
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('open');
        navLinks.classList.toggle('active');
    });
}

navItems.forEach(item => {
    item.addEventListener('click', () => {
        menuIcon.classList.remove('open');
        navLinks.classList.remove('active');
    });
});

// 7. Inicialização (Força PT ao carregar)
document.addEventListener("DOMContentLoaded", () => {
    const idiomaSalvo = localStorage.getItem("idioma") || "pt";
    updateLanguage(idiomaSalvo);
});

window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");

  if (window.scrollY > 50) {
    nav.classList.add("shrink");
  } else {
    nav.classList.remove("shrink");
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
   if (entry.isIntersecting) {
    entry.target.classList.add("show");
} else {
    entry.target.classList.remove("show"); // Opcional: remove quando sai da tela
}
  });
}, { threshold: 0.2 });

document.querySelectorAll(
  ".sobreTexto, .sobreImagens, .habilidadeWrapper, .projetosContainer, .contato-grid"
).forEach(el => observer.observe(el));

const modal = document.getElementById("projetoModal");
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    // Extrai os dados do card clicado
    const title = card.getAttribute("data-title");
    const desc = card.getAttribute("data-desc");
    const img = card.getAttribute("data-image");
    const repo = card.getAttribute("data-repo");
    const link = card.getAttribute("data-link");

    // Preenche o modal
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDesc").innerText = desc;
    document.getElementById("modalImg").src = img || "placeholder.jpg";
    document.getElementById("modalRepo").href = repo;
    document.getElementById("modalDeploy").href = link;

    // Mostra o modal
    modal.style.display = "block";
  });
});

// Fechar ao clicar no X ou fora do modal
document.querySelector(".close-btn").onclick = () => modal.style.display = "none";
window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; }


document.querySelector('.contato-form').addEventListener('submit', function(e) {
    e.preventDefault(); 

    // 1. Captura os dados dos campos
    const nome = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const mensagem = this.querySelector('textarea').value;

    // 2. Configura seu número (DDI 55 + DDD 47 + Numero)
    const meuNumero = "5547996828896";

    // 3. Monta o texto da mensagem com quebras de linha (%0A)
    // Usamos encodeURIComponent para que caracteres especiais não quebrem o link
    const textoMensagem = encodeURIComponent(
        `🚀 *Novo contato do Portfólio* 🚀\n\n` +
        `*Nome:* ${nome}\n` +
        `*E-mail:* ${email}\n` +
        `*Mensagem:* ${mensagem}`
    );

    // 4. Cria a URL final
    const urlZap = `https://api.whatsapp.com/send?phone=${meuNumero}&text=${textoMensagem}`;

    // 5. Abre em uma nova aba e limpa o form
    window.open(urlZap, '_blank');
    this.reset(); 
});