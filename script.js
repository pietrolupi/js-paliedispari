//ESERCIZIO: PALINDROMI

/* 
* richiedo all'utente di inserire una parola
* inserisco le lettere della parola in un array composto dalle lettere che la compongono con .split('')
* prendo la prima e l'ultima parte dell'array e creo 2 nuovi array
* confronto il join primo array con il join .reverse() del secondo array
* se sono uguali stampo conferma, altrimenti stampo non palindromo

 */


const parolaIns = prompt('inserisci una parola');
let reverseArray = []


function palindrome(parola){

  let letterArray = parola.split('');
  ; //qui va la seconda parte di parola

  for( let i = 0; i < letterArray.length / 2; i++){

    reverseArray.push(letterArray[i]);
  }
  

}


palindrome(parolaIns);

console.log(reverseArray)

