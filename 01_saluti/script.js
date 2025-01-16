/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
let CiaoUser = (name) => `ciao ${name}`;

// Invoca la funzione qui e stampa il risultato in console
console.log(CiaoUser("Paolo"));


//Risultato atteso se si passa 'Mario': // ciao Mario
console.log(CiaoUser(userName));