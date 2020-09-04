// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

//quante numeri deve memorizzare l'utente?
var quantiNumeri = 2;
//definisco array vuoto per inserire i numeri
var numeriEsatti = [];
//generazione numeri
for (var i = 0; i < quantiNumeri; i++) {
    var randomNumber = Math.floor(Math.random() *100 + 1);
    numeriEsatti.push(randomNumber);
}
//stampo numeri generati
var numberToRemember = numeriEsatti.join(" ");
console.log(numberToRemember);
alert("Memorizza questi numeri\n" + numberToRemember + "\nQuando ti senti pronto premi invio");
//richiamo funzione dopo 30 secondi
setTimeout(checkNumber, 3000);


function checkNumber() {
    //richiesta inerimento numeri da utente
    var numberToCheck = [];
    for (var i = 0; i < quantiNumeri; i++) {
        number = parseInt(prompt("Inserisci un numero alla volta quello cher ti ricordi"));
        numberToCheck.push(number);
    }
    console.log(numberToCheck);
    //definisco array numeri corretti inseriti
    var correctNumber = [];
    //conotatore numeri inseriti corretti
    var counter = 0;
    //controllo numeri corretti
    for (var i=0; i<quantiNumeri; i++) {
        if (numeriEsatti.includes(numberToCheck[i])) {
            correctNumber.push(numberToCheck[i])
            counter ++;
        }
    }
    //stampo risultato 
    console.log(correctNumber);
    var messaggioNumeriCorretti = "Hai inserito correttemante " + counter + " numeri" + "\n" + correctNumber;
    alert(messaggioNumeriCorretti);
}
