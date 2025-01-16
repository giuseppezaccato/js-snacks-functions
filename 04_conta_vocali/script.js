/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
const word1 = prompt("inserisci qui una parola a tuo piacimento!", "supercalifragilistichespiralidoso")
const vowels = ["a", "e", "i", "o", "u"];
const vowelsIN = [];
const counter = "";


// Dichiara la funzione qui.
function vocali(parola1, parola2) {
    for (i = 0; i < parola1.length; i++) {
        if (parola1[i].split("") == vowels) {
            parola2.push(parola1.charAt((vowels[i]))).join(",");
            counter++;
        }
    }

    // if () {
    //     alert("non sono presenti vocali nella tua parola!")
    // }
    return parola2, counter;
}


// Invoca la funzione qui e stampa il risultato in console
console.log(vocali(word, vowelsIN))



//Risultato atteso se si passa 'javascript': 3 (a, a, i)