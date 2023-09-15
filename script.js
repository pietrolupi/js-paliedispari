//ESERCIZIO: PALINDROMI

/* 
* richiedo all'utente di inserire una parola
* inserisco le lettere della parola in un array composto dalle lettere che la compongono con .split('')
* prendo la prima e l'ultima parte dell'array e creo 2 nuovi array
* confronto il join primo array con il join .reverse() del secondo array
* se sono uguali stampo conferma, altrimenti stampo non palindromo

 */


const parolaIns = prompt('inserisci una parola');
let firstHalfArray = []
let messaggio = document.getElementById('messaggio');
let flag = false;
function palindrome(parola){

  let letterArray = parola.split('');
  ; //qui va la seconda parte di parola

  for( let i = 0; i < Math.floor(letterArray.length / 2); i++){
    firstHalfArray.push(letterArray[i]); //metto la prima metà della parola in una nuova lista
  }

  //DOPO il ciclo RIMUOVO la prima metà delle lettere nella lista, restando con l'ultima metà. 
  letterArray.splice(0, Math.ceil(letterArray.length / 2) );

  if(letterArray.reverse().join('') === firstHalfArray.join('')){
    messaggio.innerHTML = 'BRAVONE è proprio un palindromo!'
  }else{
    messaggio.innerHTML = 'OH NO, non è un palindromo :('
  };

  console.log(firstHalfArray)
  console.log(letterArray.reverse())
  console.log(flag);
}


palindrome(parolaIns);


console.log(letterArray)
