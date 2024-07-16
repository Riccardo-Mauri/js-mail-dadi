# js-mail-dadi

# -JS DADI 
1. Nell'esercizio dei dadi devo generare un numero compreso da 1 a 6, sia per il giocatore che per il computer.
2. Devo stabilere un vincitore in base al punteggio più alto uscito.


# -JS EMAIL
1. chiedo l'email all'utente.
2. controllo che sia nella lista di chi può accedere.
3. stampo un messaggio di conferma o smentita.


const emails = ['gino@gmail.com', 'franco@libero.it', 'alberto@yahoo.com']
console.log('emails', emails, typeof emails);

//2.controllo che l'email inserita dall'utente sia corretta o no
const mail= prompt('inserisci la tua email')
console.log('email inserita: ' + mail);
if (mail == emails[0] || mail == emails [1] || mail == emails [3]){
    console.log('email corretta')
}
else{
    console.log('Email sbagliata')
    alert('Email sbagliata')
}