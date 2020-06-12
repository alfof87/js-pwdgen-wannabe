
//Chiedi all’utente il suo nome
var name = prompt ("Qual é il tuo nome?");
//Chiedi il suo cognome
var surname = prompt("Qual é il tuo cognome?");
//Chiedi il suo colore preferito
var color = prompt("Qual é il tuo colore preferito?");
//numero
var number = 19;
//Calcolo PASSWORD
var password = name + surname + color + number;
//Titolo psw generator
document .getElementById('text-js') .innerHTML="La tua password: " + password;
