//chiedo all'utente il livello di dificolota
var livelloDifficolta = parseInt(prompt("Seleziona il livello di difficolta: 0 - 1 - 2"));
// creo una funzione dove gli passo  il livello di livelloDifficolta
function numeroRandom(difficolta){
  switch (difficolta) {
    case 0:
      var numRandomRisultante = Math.floor(Math.random() * (100 - 1 + 1) - 1);
      break;
    case 1:
      var numRandomRisultante = Math.floor(Math.random() * (88 - 1 + 1) - 1);
      break;
    case 2:
      var numRandomRisultante = Math.floor(Math.random() * (50 - 1 + 1) - 1);
      break;
    default:
  }
  return numRandomRisultante;
}
//funzione per il controllo del livello di difficolta
function errorNumberDifficolta(livelloDifficolta){
  var controllo = false;
  if (livelloDifficolta < 1 || livelloDifficolta > 2  || isNaN(livelloDifficolta)) {
    controllo = true;
  }
  return controllo;
}

//funzione per il controllo numeri uguali nell'array
//  NON FUNZIONANTE///////////////////////
function controlloArray(arrayNumeriCpu,numeroCpu){
  var array2 = [];
  for (var i = 0; i < arrayNumeriCpu.length; i++) {
    for (var i = 0; i < array2.length; x++) {
      if(arrayNumeriCpu[i] === newArr[x]) {
        arrayNumeriCpu.pop(numeroCpu)
      }
    }
  }
  return array2;
}
////////////////////////////////////////////////////////


//controllo se il livello di difficolta inserito è corretto
var erroreLivelloDifficolta = errorNumberDifficolta(livelloDifficolta);
if (erroreLivelloDifficolta) {
  alert('Inserisci il livello giusto, da 0 a 2!');
}
else {
  //estraggo 16 numeri random da 1 a 100
  var numeroCpu;
  var arrayNumeriCpu = [];
  var i = 0;
  do {
      numeroCpu = numeroRandom(livelloDifficolta);
      console.log("giro " + i + " numero random " + numeroCpu)
      arrayNumeriCpu.push(numeroCpu);
      i++;
  } while (i <= 16);

  console.log("Array numeri della cpu: " + arrayNumeriCpu);
  //chiedo all'utente di inserire un numero da 1 a 100,
  //uno alla volta
  var numeroUtente;
  //funzione gestione errore numeroUtente
  function errorNumber(numeroUtente){
    var controllo = false;
    if (numeroUtente < 1 || numeroUtente > 100  || isNaN(numeroUtente)) {
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
    console.log("stato errore: " + erroreInserimento);
    //eseguo il controllo finale in caso di true
    if (erroreInserimento) {
      alert('Numero non valido, inserisci numero da 1 a 100!');
    }
    else {
      // in caso di false vado avanti
      console.log("giro " + i + " numero utente " + numeroUtente);
      score += punto;
      contatore ++;
      console.log("valore contatore: " + contatore)
    }
  } while
   (!arrayNumeriCpu.includes(numeroUtente) && contatore < 100);

  alert("partita terminata");
  document.writeln("score finale : " + score);
}
//Se inserisce un numero vietato la partita termina (numeri vietati 16)
//quindi numero massimo è 100 - 16 = 84 numeri disponibili
//Se si supera il numero massimo 84 di lanci la partita termina
