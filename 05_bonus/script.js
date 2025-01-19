/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const Name = 'Mario';
const now = new Date();


//  Dichiara la funzione qui.
let hello = () => {
    (now.getHours() <= 13) ? (console.log(`buongiorno ${Name}`))
        : (13 > now.getHours() <= 17) ? (console.log(`buon pomeriggio ${Name}`))
            : (console.log(`buona sera ${Name}`))
}


// Invoca la funzione qui e stampa il risultato in console 
hello(Name);
//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.