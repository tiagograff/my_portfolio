var numberSpans = 100;

// local onde o span será gerado
var container = document.getElementsByClassName("containerIndex-stars")[0];

// loop parar gerar a quantidade de spans
for (var i = 0; i < numberSpans; i++) {
  // cria o span
  var span = document.createElement("span");
  // adiciona a classe ao span
  span.className = "containerIndex-stars-star";
  // Adiciona algum conteúdo ao span (opcional)
  span.style.setProperty("--i", Math.random() * 15);
  // add o snap ao container
  container.appendChild(span);
}
