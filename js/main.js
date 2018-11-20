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
for (var i = 1; i <= 4; i++) {
  numeroUtente = parseInt(prompt("inserisci un numero da 1 a 100"));
  console.log("giro " + i + " numero utente " + numeroUtente);
  //confronto i numeri inseriti fino a trovare se c'è il numero che combacia
  //con quelli generati dalla cpu
  if (arrayNumeriCpu[i] == numeroUtente || i > 2) {
    //Se combacia la partita termina
    console.log("Eisto partita: TERMINATA");
    alert("terminata");
  }
  else {
    console.log("Eisto partita: CONTINUA");
  }
}



//Se inserisce un numero vietato la partita termina (numeri vietati 16)
//quindi numero massimo è 100 - 16 = 84 numeri disponibili

//Se si supera il numero massimo 84 di lanci la partita termina
