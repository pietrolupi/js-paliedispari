//ESERCIZIO: PALINDROMI

/* 
* richiedo all'utente di inserire una parola
* inserisco le lettere della parola in un array composto dalle lettere che la compongono con .split('')
* prendo la prima e l'ultima parte dell'array e creo 2 nuovi array
* confronto il join primo array con il join .reverse() del secondo array
* se sono uguali stampo conferma, altrimenti stampo non palindromo

 */



const palBtn = document.getElementById('pal-btn');
let parolaIns;
let firstHalfArray = [];
let messaggio = document.getElementById('messaggio');
let flag = false;


palBtn.addEventListener('click', function(){
  parolaIns = prompt('inserisci una parola');
  palindrome(parolaIns)
});

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
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ESERCIZIO: PARI O DISPARI

/*
* chiedo all'utente di scegliere pari o dispari e di inserire un numero da 1 a 5.
* genero un numero random da 1 a 5 (con una funzione).
* verifico se la somma dei due numeri è pari (con funzione).
* se è pari genero un messaggio, altrimenti un altro 
 */



const numPc = randomizer(1, 5);
let numUSer = parseInt(prompt('inserisci un numero da 1 a 5'));
const pariDispari = prompt('scegli "pari" o "dispari"');

let messaggio2 = document.getElementById('messaggio2')
const sommaUserPc = numPc + numUSer;
console.log('numero random ' + numPc)
pariCheck(sommaUserPc);

  if(pariDispari !== 'pari' && pariDispari !== 'dispari'){
    alert('no no no, devi inserire ESATTAMENTE "pari" o "dispari"')
  }else if(isNaN(numUSer)){
    alert('Cosi no eh, ho chiesto un NUMERO')
  }else if(numUSer < 1 || numUSer > 5){
    alert('non so cosa non sia chiaro, TRA 1 E 5...')
  }else if( (!((numPc + numUSer) % 2) && pariDispari === 'pari')){
      messaggio2.innerHTML = 'FORTUNELLO, hai VINTO!'
    }else if((numPc + numUSer) % 2 && pariDispari === 'dispari'){
      messaggio2.innerHTML = 'FORTUNELLO, hai VINTO!'
    }else{
      messaggio2.innerHTML = 'AHIA, hai PERSO!'
    }
  
  





/**
 * genera numero random da 1 a 5
 * @param {number} min 
 * @param {*number} max 
 * @returns number
 */
function randomizer(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * controlla se un numero è pari o dispari
 * @param {number} pari 
 */
function pariCheck(pari){
  if (!(pari % 2)){
    messaggio2 = ''
  }else{
    console.log('NUMERO DISPARI')
  };
}