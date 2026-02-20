const textos = {
en: {
        headline: "In the ring or in the code, my mission is always to evolve and deliver peak performance.",
        sobre: "About me",
        sobreh3: "Ring discipline, code precision.",
        foraDasTelas: "Beyond the screens",
        foraDasTelash3: "Balance in motion.",
        sobrep1: "My name is Luiz Roberto, and I believe that developing software is, above all, an exercise in resilience. I am a Systems Analysis and Development student who, for the past two years, has split my time between the keyboard and Muay Thai training.",
        sobrep2: "In the ring, I learned that technique without focus yields no results. In Web Development, I apply this same mindset to build modern, functional interfaces using HTML, CSS, and JavaScript. However, my curiosity knows no bounds: I strive for a 360º view of development, diving deep into the Back-end to create solutions that are as robust under the hood as they are elegant on the surface.",
        sobrep3: "My most significant technical milestone to date is Find Ware, a comprehensive inventory management ecosystem where I integrated React, Node.js, and PostgreSQL. Moving beyond a simple CRUD, I challenged myself to implement real-world security with JWT authentication and password hashing, alongside dynamic data dashboards.",
        sobrep4: "I believe a high-performance developer needs a mind and body in sync. Muay Thai has taught me non-negotiable values: discipline, respect, and loyalty. Whether facing a complex bug or a tough round, my stance remains the same — I keep my guard up, analyze the scenario, and evolve with every move.",
        sobrep5: "I am a lifelong learner, driven by constant evolution and a commitment to always delivering my best, both inside and outside the ring.",
        habilidades: "Skills",
        habilidadesP: "The technologies I use to transform ideas into modern interfaces.",
        projeto: "Projects",
        contato: "Contact",
        contatoP: "If you enjoyed my portfolio, feel free to reach out through the links below.",
    },
    
      pt: { 
       headline: "No ringue ou no código, minha missão é sempre evoluir e entregar o melhor desempenho.",
sobre: "Sobre mim",
sobreh3: "A disciplina do ringue, a precisão do código.",
foraDasTelas: "Fora das telas",
foraDasTelash3:"Equilíbrio em movimento.",
sobrep1: "Meu nome é Luiz Roberto e acredito que desenvolver software é, acima de tudo, um exercício de resiliência. Sou estudante de Análise e Desenvolvimento de Sistemas e, há dois anos, divido meu tempo entre as telas e os treinos de Muay Thai.",
sobrep2: "No esporte, aprendi que técnica sem foco não gera resultados. No desenvolvimento Web, aplico essa mesma mentalidade para construir interfaces modernas e funcionais com HTML, CSS e JavaScript. Mas minha curiosidade não aceita limites: busco uma visão 360º do desenvolvimento, mergulhando no Back-end para criar soluções que sejam tão robustas por dentro quanto são elegantes por fora.",
sobrep3: "Meu maior marco técnico até agora é o Find Ware, um ecossistema de gestão de estoque onde integrei React, Node.js e PostgreSQL. Mais do que um CRUD, desafiei-me a implementar segurança real com autenticação JWT e Hash de senhas, além de painéis de dados com gráficos dinâmicos.",
sobrep4: "Acredito que um desenvolvedor de alta performance precisa de um corpo e mente em sintonia. O Muay Thai me ensinou valores inegociáveis: disciplina, respeito e lealdade. Seja enfrentando um bug complexo ou um round difícil, minha postura é a mesma — mantenho a guarda alta, analiso o cenário e evoluo a cada movimento.",
sobrep5: "Sou um eterno aprendiz, movido pela evolução constante e pelo compromisso de entregar sempre o meu melhor, dentro e fora do ringue.",
habilidades: "Habilidades",
habilidadesP: "As tecnologias que utilizo para transformar ideias em interfaces modernas.",
projeto: "Projetos",
contato: "Contato",
contatoP: "Se você gostou do meu site, entre em contato comigo pelos links abaixo.",

    }
    
}
 const traducoes = {
      pt: {
        bom_dia: " Ola, Bom dia ☀️",
        boa_tarde: "Ola, Boa tarde 🌤️",
        boa_noite: "Ola, Boa noite 🌙"
      },
      en: {
        bom_dia: "  Hello, Good morning ☀️",
        boa_tarde: " Hello, Good afternoon 🌤️",
        boa_noite: "Hello, Good evening 🌙"
      }
    };

let idiomaAtual = "pt";

const toggle = document.getElementById("langToggle");
const activeLang = document.getElementById("activeLangDisplay");

toggle.addEventListener("click", () => {
  idiomaAtual = idiomaAtual === "pt" ? "en" : "pt";

  toggle.classList.toggle("en", idiomaAtual === "en");
  activeLang.textContent = idiomaAtual.toUpperCase();

  atualizarTextos();
});

let currentLang = localStorage.getItem("idioma") || "pt";

window.addEventListener('scroll', function() {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});


function mostrarSaudacao() {
      const hora = new Date().getHours();
      const saudacaoEl = document.querySelector('[data-translate="saudacao"]');
      let chave;

      if (hora >= 6 && hora < 12) {
        chave = "bom_dia";
      } else if (hora >= 12 && hora < 18) {
        chave = "boa_tarde";
      } else {
        chave = "boa_noite";
      }


      saudacaoEl.textContent = traducoes[currentLang][chave];

      
    }

const switchBtn = document.getElementById("langToggle");
const elementos = document.querySelectorAll("[data-translate]");

function updateLanguage(lang) {
  elementos.forEach(el => {
    const key = el.getAttribute("data-translate");
    el.textContent = textos[lang][key];
  });
  localStorage.setItem("idioma", lang);
}

 

// Inicializa com o idioma salvo
updateLanguage(currentLang);


// Alterna idioma ao clicar
switchBtn.addEventListener("click", () => {
  currentLang = currentLang === "pt" ? "en" : "pt";
  switchBtn.classList.toggle("active");
  updateLanguage(currentLang);
});
;
setInterval(mostrarSaudacao, 50);



const menuIcon = document.getElementsByClassName('menu-icon');
const navLinks = document.getElementsByClassName('nav-links');
const navItems = document.querySelectorAll('.nav-item');

// Alternar menu
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('open');
    navLinks.classList.toggle('active');
});

// Fechar ao clicar em um link (UX)
navItems.forEach(item => {
    item.addEventListener('click', () => {
        menuIcon.classList.remove('open');
        navLinks.classList.remove('active');
    });
});
 