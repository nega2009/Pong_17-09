//variaveis bolinha
let xBolinha = 200;
let yBolinha = 200;
let diametro = 30;

let velocidadexBolinha=6;
let velocidadeyBolinha=6;

//variáveis minharaquete
let xRaqueteJogador = 5;
let yRaqueteJogador = 15;
let larguraRaqueteJogador = 10;
let alturaRaqueteJogador = 90;

//variáveis raquete oponente
let xRaqueteOponente = 385;
let yRaqueteOponente = 150;
let larguraRaqueteOponente = 10;
let alturaRaqueteOponente = 90;


//colisao
let colidiu = false;

//
let velocidadeyOponente


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('black');
  mostraBolinha();
  movimentaBolinha();
  verificaColisao();
  mostreRaqueteJogador();
  movimentaRaqueteJogador();
  verificaColisaoRaqueteJogador();
  mostreRaqueteOponente();
  movimentaRaqueteOponente();
}


function mostraBolinha(){
  fill("rgb(226,54,84)"); // preenchimento com "cor"
  circle (xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha+= velocidadexBolinha ;
  yBolinha+= velocidadeyBolinha ;
  
}

function verificaColisao () {
  if (xBolinha > width || xBolinha < 0){
    velocidadexBolinha *= -1; 
  }
   if (xBolinha > height || yBolinha < 0){
     velocidadeyBolinha *= -1; 
}}

function mostreRaqueteJogador() {
 fill ('blue');
 stroke("rgb(238,22,141)");
  
 rect(
      xRaqueteJogador, 
      yRaqueteJogador, 
      larguraRaqueteJogador,
      alturaRaqueteJogador
 );
}

function mostreRaqueteOponente() {
 fill ('blue');
 stroke("rgb(238,22,141)");
  
 rect(
      xRaqueteOponente, 
      yRaqueteOponente, 
      larguraRaqueteOponente,
      alturaRaqueteOponente
 );
}



function movimentaRaqueteJogador () {
  if(keyIsDown(UP_ARROW)) {
    yRaqueteJogador-=10;
   }if(keyIsDown(DOWN_ARROW)) {
     yRaqueteJogador+=10;
   }
}

function verificaColisaoRaqueteJogador() {
  colidiu= collideRectCircle(
  xRaqueteJogador,
  yRaqueteJogador,
  larguraRaqueteJogador,
  alturaRaqueteJogador,
  xBolinha,
  yBolinha,
    diametro / 2
  );
  if (colidiu==true){
    velocidadexBolinha *= -1;
  }
}

function verificaColisaoRaqueteOponente() {
  colidiu= collideRectCircle(
  xRaqueteOponente,
  yRaqueteOponente,
  larguraRaqueteOponente,
  alturaRaqueteOponente,
  xBolinha,
  yBolinha,
  diametro / 2
  );
  if (colidiu==true){
    velocidadexBolinha *= -1;
  }
}

function movimentaRaqueteOponente(){
  velocidadeyOponente = yBolinha - yRaqueteOponente - alturaRaqueteOponente/2-30;
  
  yRaqueteOponente+= velocidadeyOponente;
}
