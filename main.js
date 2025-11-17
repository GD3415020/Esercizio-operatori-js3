let num1 = parseInt( prompt('inserisci il primo numero') );
let num2 = parseInt( prompt('inserisci il secondo numero') );

let add = (num1 + num2);
let diff = (num1 - num2);
let per = (num1 * num2);
let div = (num1 / num2);
let pot = (num1 ** num2);

console.log('Con i numeri scelti ottieni le seguenti operazioni matematiche:');
console.log('somma: ' + add + ', ' + 'sottrazione: ' + diff + ', ' + 'moltiplicazione: ' + per + ', ' + 'divisione: ' + div + ', ' + 'potenza: ' + pot);

