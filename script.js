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
    printer(messaggio, 'BRAVONE è proprio un palindromo!')
  }else{
    printer(messaggio, 'OH NO, non è un palindromo :(')
  };
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ESERCIZIO: PARI O DISPARI

/*
* chiedo all'utente di scegliere pari o dispari e di inserire un numero da 1 a 5.
* genero un numero random da 1 a 5 (con una funzione).
* verifico se la somma dei due numeri è pari (con funzione).
* se è pari genero un messaggio, altrimenti un altro 
 */


let numUser;
let sommaUserPc;
const stampNumUser = document.getElementById('stamp-user')
const stampPc = document.getElementById('stamp-pc')
const pariDisBtn = document.getElementById('pardis-btn');
const messaggio2 = document.getElementById('messaggio2')


pariDisBtn.addEventListener('click', function(){
  messaggio2.innerHTML = ''
  let  numPc = randomizer(1, 5);
  numUser = parseInt(prompt('inserisci un numero da 1 a 5'));
  const pariDispari = prompt('scegli "pari" o "dispari"');
  sommaUserPc = numPc + numUser;


  if(isNaN(numUser)){
    alert('ATTENZIONE! Inserire un numero');
  }else if( pariDispari !== 'pari' && pariDispari !== 'dispari'){
    alert('SCRIVI ESATTAMENTE: "pari" o "dispari"!')
  }else if(numUser < 1 || numUser > 5){
    alert('ATTENZIONE! Inserire un numero tra 1 e 5')
  }else if( (pariCheck(sommaUserPc) && pariDispari === 'pari') || (!pariCheck(sommaUserPc) && pariDispari === 'dispari')){
    printer(messaggio2, 'BRAVO! Hai vinto!')
    printer(stampNumUser, `Il tuo numero: ${numUser}`);
    printer(stampPc, `Il numero casuale del pc: ${numPc}`);

  }else{
    printer(messaggio2, 'OH NO! Hai perso!');
    printer(stampNumUser, `Il tuo numero: ${numUser}`);
    printer(stampPc, `Il numero casuale del pc: ${numPc}`);
  }
})


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
 * @param {number} somma 
 */
function pariCheck(somma){
  if (!(somma % 2)) return true;
  return false;
}

/**
 * Stampa un messaggio all'interno dell'elemento selezionato!
 * @param {VarDate} where 
 * @param {string} message 
 */
function printer(where, message){
 return where.innerHTML = message;
}










