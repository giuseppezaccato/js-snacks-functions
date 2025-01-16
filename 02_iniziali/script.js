/* Scrivi una funzione che accetti un array di nomi e restituisca  un nuovo array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
const names2 = [];
const names2Inverse = [];


// Dichiara la funzione qui.
//* metodo tradizionale
function FirstLetter(array1, array2) {
    for (i = 0; i < array1.length; i++) {
        array2[i] = array1[i].charAt(0);
    }
    return array2;
}

//* metodo invertito (BONUS non richiesto)
function FirstLetterInverse(array1, array2) {
    for (let i = array1.length - 1; i >= 0; i--) {
        array2 += array1[i].charAt(0);
    }
    return array2.split("");
}

// Invoca la funzione qui e stampa il risultato in console
console.log(FirstLetter(names, names2));
//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
console.log(FirstLetterInverse(names, names2Inverse))
//Risultato atteso: ["A", "G", "A", "M", "L", "A"]


