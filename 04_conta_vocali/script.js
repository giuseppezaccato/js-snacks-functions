/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
//*BONUS const word1 = prompt("inserisci qui una parola a tuo piacimento!", "supercalifragilistichespiralidoso");
const vowelsIN = [];


// Dichiara la funzione qui.
function vocali(parola1, parola2) {
    let counter = 0;
    const vowels = ["a", "e", "i", "o", "u"];

    for (let i = 0; i < parola1.length; i++) {
        if (vowels.includes(parola1.charAt(i))) {
            parola2.push(parola1.charAt(i));
            counter++;
        }
    }
    return counter, parola2;
}


// Invoca la funzione qui e stampa il risultato in console
//* BONUS console.log(vocali(word1, vowelsIN))


//Risultato atteso se si passa 'javascript': 3 (a, a, i)
console.log(vocali(word, vowelsIN));
