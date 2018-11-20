// creo una funzione dove gli passo  il range da 1 a 100 random
function numeroRandom(numeroMin, numeroMax){
  var numRandomRisultante = Math.floor(Math.random() * (numeroMax - numeroMin + 1) - numeroMin);
  return numRandomRisultante;
}

//estraggo 16 numeri random da 1 a 100
var numeroCpu;
var arrayNumeriCpu = [];
for (var i = 1; i <= 16; i++) {
  numeroCpu = numeroRandom(1,100);
  console.log("giro " + i + " numero random " + numeroCpu)
  arrayNumeriCpu.push(numeroCpu);
}
console.log("Array numeri della cpu: " + arrayNumeriCpu);
//chiedo all'utente di inserire un numero da 1 a 100,
//uno alla volta
var numeroUtente;
//funzione gestione errore numeroUtente
function errorNumber(numeroUtente){
  var controllo = false;
  if (numeroUtente < 1 || numeroUtente > 100) {
    controllo = true;
  }
  return controllo;
}
var punto = 1;
var score = 0;
var contatore = 0;
do {
  numeroUtente = parseInt(prompt("inserisci un numero da 1 a 100"));
  var erroreInserimento = errorNumber(numeroUtente);
  console.log(erroreInserimento);
  if (erroreInserimento) {
    alert('Numero non valido, inserisci numero da 1 a 100!');
  }
  else {
    console.log("giro " + i + " numero utente " + numeroUtente);
    score += punto;
    contatore ++;
    console.log("valore contatore: " + contatore)
  }
} while
 (!arrayNumeriCpu.includes(numeroUtente) && contatore < 2);
alert("partita terminata");
console.log("score finale : " + score);
//Se inserisce un numero vietato la partita termina (numeri vietati 16)
//quindi numero massimo è 100 - 16 = 84 numeri disponibili
//Se si supera il numero massimo 84 di lanci la partita termina
