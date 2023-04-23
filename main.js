const BtnInputname = document.getElementById("BtnInputName");
const reload = document.getElementById("reload");
const playindex = document.querySelectorAll('button[name="nameBlock"]');
const inicio = document.querySelector("#inicio");
const blockJogo = document.getElementById("blockJogo");
let display = document.getElementById("Turn");
let result = document.getElementById("winner");
let players = [];
let jogadaindex = true;
let currentPlayer = 0;
let tabelajogadas = ["3", "3", "3", "3", "3", "3", "3", "3", "3"];
let contadorDeJogadas = 0;

BtnInputname.addEventListener("click", addName);

playindex.forEach((playindex) => {
  playindex.addEventListener("click", addInfoVelha);
});

function addInfoVelha() {
  jogadaindex = this.id;
  if (currentPlayer == "0" && tabelajogadas[jogadaindex] == "3") {
    tabelajogadas[jogadaindex] = currentPlayer;
    alterarclassesX();
    verificarVitoria(currentPlayer);
    MostrarName();
  } else if (currentPlayer == "1" && tabelajogadas[jogadaindex] == "3") {
    tabelajogadas[jogadaindex] = currentPlayer;
    alterarclassesO();
    verificarVitoria(currentPlayer);
    MostrarName();
  }
}

function addName() {
  console.log(tabelajogadas);
  const playerInput = document.querySelector("#InputJogador");
  let player = playerInput.value;
  playerInput.value = "";
  players.push(player);
  if (players.length == 2) {
    inicio.style.display = "none";
    blockJogo.style.zIndex = "-1";
  }
}

function MostrarName() {
  ContadorGeral();

  if (currentPlayer == "0") {
    display.textContent = players[currentPlayer];
    display.classList.remove("vitoriaO");
    display.classList.add("vitoriaX");
  } else if (currentPlayer == "1") {
    display.textContent = players[currentPlayer];
    display.classList.remove("vitoriaX");
    display.classList.add("vitoriaO");
  }
}

function ContadorGeral() {
  contadorDeJogadas++;
  console.log(contadorDeJogadas);
  jogadaindex = !jogadaindex;
  currentPlayer = (currentPlayer + 1) % 2;
  if (contadorDeJogadas == 9) {
    result.textContent = "Empate!";
    result.style.visibility = "visible";
  }
}

function verificarVitoria(jogador) {
  //validar linha
  for (var i = 0; i <= 9; i += 3) {
    if (
      tabelajogadas[i] == jogador &&
      tabelajogadas[i + 1] == jogador &&
      tabelajogadas[i + 2] == jogador
    ) {
      alertVitory(jogador);
      break;
    }
  }
  for (var i = 0; i <= 9; i += 1) {
    if (
      tabelajogadas[i] == jogador &&
      tabelajogadas[i + 3] == jogador &&
      tabelajogadas[i + 6] == jogador
    ) {
      alertVitory(jogador);
    }
  }
  if (
    tabelajogadas[0] === jogador &&
    tabelajogadas[4] === jogador &&
    tabelajogadas[8] === jogador
  ) {
    alertVitory(jogador);
  }
  if (
    tabelajogadas[2] === jogador &&
    tabelajogadas[4] === jogador &&
    tabelajogadas[6] === jogador
  ) {
    alertVitory(jogador);
  }
}

function alertVitory(jogador) {
  const modalVitoria = document.getElementById("Modal");
  if (jogador == "0") {
    playindex.forEach((playindex) => {
      playindex.removeEventListener("click", addInfoVelha);
      result.style.visibility = "visible";
    });
  } else {
    playindex.forEach((playindex) => {
      playindex.removeEventListener("click", addInfoVelha);
      result.style.visibility = "visible";
    });
  }
}

function alterarclassesX() {
  playindex.forEach((playindex) => {
    const botaoClicado = event.target;
    botaoClicado.classList.add("leyoutX");
  });
}

function alterarclassesO() {
  playindex.forEach((playindex) => {
    const botaoClicado = event.target;
    botaoClicado.classList.add("leyoutO");
  });
}

function reinciar() {
  tabelajogadas = ["3", "3", "3", "3", "3", "3", "3", "3", "3"];
  playindex.forEach((playindex) => {
    playindex.addEventListener("click", addInfoVelha);
  });
}
function enpate() {
  playindex.forEach((playindex) => {
    playindex.removeEventListener("click", addInfoVelha);
  });
}
