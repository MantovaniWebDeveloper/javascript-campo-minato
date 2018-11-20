// creo una funzione dove gli passo  il range da 1 a 100 random
var numeroMin = 1;
var numeroMax = 100;

function numeroRandom(numeroMin, numeroMax){
  var numRandomRisultante = Math.floor(Math.random() * (numeroMax - numeroMin + 1) - numeroMin);
  return numRandomRisultante;
}

//estraggo 16 numeri random da 1 a 100
var numeroCpu
for (var i = 0; i <=16; i++) {
  numeroCpu = numeroRandom(1,100);
  console.log("giro " + i + " numero random " + numeroCpu)
}
//chiedo all'utente di inserire un numero da 1 a 100,
//uno alla volta


//confronto i numeri inseriti fino a trovare se c'è il numero che combacia
//con quelli generati dalla cpu

//Se combaci la partita termina

//Se inserisce un numero vietato la partita termina (numeri vietati 16)
//quindi numero massimo è 100 - 16 = 84 numeri disponibili

//Se si supera il numero massimo 84 di lanci la partita termina
