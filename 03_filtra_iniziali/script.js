/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const names2 = [];
const capital = prompt("aggiungi qui una lettera per sapere se nella lista ci sono persone con la stessa iniziale", "A").toUpperCase();


// Dichiara la funzione qui.
function FirstLetter(array1, array2, letter) {
    for (i = 0; i < array1.length; i++) {
        if (letter === array1[i].charAt(0)) {
            array2.push(array1[i]);
        }
    }

    //!come stampare l'else in questo caso fuori dal FOR
    if (array2 == 0) {
        alert("la lista è vuota!")
    } else {
        return array2;
    }
}
//* tentativo => arrow/ternary "FirstLetter = (array1, array2, letter) =>...

// Invoca la funzione qui e stampa il risultato in console
console.log(FirstLetter(names, names2, capital)); //? VALORE UNDEFINED



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"] (per funzionare commenta il log a 25!!!)
console.log(FirstLetter(names, names2, "A"));
