PALIndromo e DISPARI
===

### Esercizio 1:

Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma.


### Esercizio 2:

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri.
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

##### Mio svolgimento esercizio 1:

* richiedo all'utente di inserire una parola
* inserisco le lettere della parola in un array composto dalle lettere che la compongono con .split('')
* prendo la prima e l'ultima parte dell'array e creo 2 nuovi array
* confronto il join primo array con il join .reverse() del secondo array
* se sono uguali stampo conferma, altrimenti stampo non palindromo

##### Mio svolgimento esercizio 2:

* chiedo all'utente di scegliere pari o dispari e di inserire un numero da 1 a 5.
* genero un numero random da 1 a 5.
* verifico se la somma dei due numeri è pari
* se è pari genero un messaggio, altrimenti un altro