/*
//1. Eseguo un programma che calcoli un numero random da 1 a 6, sia per il giocatore che per il pc.
//2. Stabilisco un vincitore, in base a chi fa il punteggio più alto.
*/

//1. Creo le due variabili del lancio di dado de lgiocatore e del pc
let x;
let y;
//2.faccio in modo di calcolare randomicamente i numeri da 1 a 6 sia per il giocatore che per il pc
document.getElementById('dado').onclick = function(){
    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
//3.inserisco i risultati della mia funzione nel HTML in modo che sia visibile
    document.getElementById('xlabel').innerHTML= x;
    document.getElementById('ylabel').innerHTML= y;
//4.faccio comparire un messaggio in base al vincitore e/o pareggio del lancio di dado
    if (x > y){
        document.getElementById('resultone').style.display= "block";
        document.getElementById('resulttwo').style.display= "none";
        document.getElementById('resultthree').style.display= "none";
        console.log('vince il giocatore');
    }
    else if (x == y){
        document.getElementById('resultone').style.display= "none";
        document.getElementById('resulttwo').style.display= "block";
        document.getElementById('resulttwo').style.display= "none";
        console.log('pareggio');
    }
    else{
        document.getElementById('resultone').style.display= "none";
        document.getElementById('resulttwo').style.display= "none";
        document.getElementById('resultthree').style.display= "block";
        console.log('vince il pc');
    }
}

