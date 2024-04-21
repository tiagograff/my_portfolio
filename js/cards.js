//dados
const certificateData = [
  {
    escola: "alura",
    curso: "iniciante de programação",
    imagem: "../img/certificates.svg",
    linkCertificate:
      "https://cursos.alura.com.br/user/tiagopinzgraffunder/degree-programacao-v123948-123948/certificate",
  },
  {
    escola: "alura",
    curso: "pratique html e css em projetos web",
    imagem: "../img/certificates.svg",
    linkCertificate:
      "https://cursos.alura.com.br/degree/certificate/c70ce600-b557-4d7d-b7df-4f136152b371",
  },
  {
    escola: "alura",
    curso: "pratique html e css em projetos web (nova formação)",
    imagem: "../img/certificates.svg",
    linkCertificate:
      "https://cursos.alura.com.br/degree/certificate/c5694f8d-bf4b-44e1-888f-f0908ba4beea",
  },
  {
    escola: "alura",
    curso: "a partir do zero: html e css para projetos web",
    imagem: "../img/certificates.svg",
    linkCertificate:
      "https://cursos.alura.com.br/degree/certificate/0a36cc23-f42b-4629-b04d-7a6e635d9c4c",
  },
  {
    escola: "alura",
    curso: "css: aprofunde em estilos",
    imagem: "../img/certificates.svg",
    linkCertificate:
      "https://cursos.alura.com.br/degree/certificate/924984be-e960-451b-8f43-cad9ec162194",
  },
  {
    escola: "alura",
    curso: "aprenda a programar em javascript com foco no back-end",
    imagem: "../img/certificates.svg",
    linkCertificate:
      "https://cursos.alura.com.br/user/tiagopinzgraffunder/degree-js-backend-210587/certificate",
  },
  {
    escola: "alura (curso)",
    curso: "inteligência artificial generativa: midjourney e chatgpt",
    imagem: "../img/certificates.svg",
    linkCertificate:
      "https://cursos.alura.com.br/user/tiagopinzgraffunder/course/inteligencia-artificial-generativa-midjourney-chatgpt/certificate",
  },
  {
    escola: "alura (curso)",
    curso: "chatgpt e javascript: construa o jogo pong",
    imagem: "../img/certificates.svg",
    linkCertificate:
      "https://cursos.alura.com.br/user/tiagopinzgraffunder/course/chatgpt-javascript-construa-jogo-pong/certificate",
  },
  {
    escola: "alura (curso)",
    curso: "chatgpt desvendando ia conversas aplicacoes",
    imagem: "../img/certificates.svg",
    linkCertificate:
      "https://cursos.alura.com.br/user/tiagopinzgraffunder/course/chatgpt-desvendando-ia-conversas-aplicacoes/certificate",
  },
  {
    escola: "CNPq",
    curso: "bolsa de iniciação cientifíca 2021",
    imagem: "../img/certificates.svg",
    linkCertificate: "../img/cnpq2021.pdf",
  },
  {
    escola: "CNPq",
    curso: "bolsa de iniciação cientifíca 2022",
    imagem: "../img/certificates.svg",
    linkCertificate: "../img/cnpq2022.pdf",
  },
  {
    escola: "onebitcode",
    curso: "start na programação",
    imagem: "../img/certificates.svg",
    linkCertificate: "../img/start_prmc_obc.pdf",
  },
  {
    escola: "onebitcode",
    curso: "start na programação (novo)",
    imagem: "../img/certificates.svg",
    linkCertificate: "../img/start programacao obc.pdf",
  },
  {
    escola: "onebitcode",
    curso: "HTML5",
    imagem: "../img/certificates.svg",
    linkCertificate: "../img/html5 obc.pdf",
  },
  {
    escola: "onebitcode",
    curso: "CSS3",
    imagem: "../img/certificates.svg",
    linkCertificate: "../img/css3 obc.pdf",
  },
  {
    escola: "onebitcode",
    curso: "javascript",
    imagem: "../img/certificates.svg",
    linkCertificate: "../img/JavaScript obc.pdf",
  },
  {
    escola: "alura",
    curso: "imersão front-end 2024",
    imagem: "../img/certificates.svg",
    linkCertificate:
      "https://cursos.alura.com.br/immersion/certificate/user/883922",
  },
];

// função que gera cards automáticamente
function generateCards(data) {
  const container = document.getElementById("certificatesCards");
  // para cada item crie um elemento article com o class name...
  data.forEach((item) => {
    const article = document.createElement("article");
    article.className = "main-certificates-cards-card";
    // para cada item crie um elemento link com o class name...
    const link = document.createElement("a");
    link.className = "main-certificates-cards-card-link";
    link.href = item.linkCertificate;
    // para cada item crie um elemento img com o class name...
    const img = document.createElement("img");
    img.className = "main-certificates-cards-card-link-img";
    img.src = item.imagem;
    img.alt = "";
    // adcionar link a img
    link.appendChild(img);
    // para cada item crie um elemento div infos com o class name...
    const infos = document.createElement("div");
    infos.className = "main-certificates-cards-card-link-infos";
    // para cada item crie um elemento p com o class name...
    const paragraph1 = document.createElement("p");
    paragraph1.className =
      "main-certificates-cards-card-link-infos-paragraphSchool";
    paragraph1.textContent = item.escola;

    const paragraph2 = document.createElement("p");
    paragraph2.className =
      "main-certificates-cards-card-link-infos-paragraphCourse";
    paragraph2.textContent = item.curso;
    // adcionar infos ao paragraph
    infos.appendChild(paragraph1);
    infos.appendChild(paragraph2);
    // adcionar link e infos ao article
    article.appendChild(link);
    article.appendChild(infos);
    // adcionar o article ao container
    container.appendChild(article);
  });
}

// chamada da função
generateCards(certificateData);
