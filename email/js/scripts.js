/*
//1.Creo una lista di email che possono entrare.
//2. controllo che la sua email inserita sia nella lista o no.
//3. stampo un messaggio di conferma o smentita.
*/


//1. creo la lista di email permesse
const emails = ['gino@gmail.com', 'franco@libero.it', 'alberto@yahoo.com'];

const SubmitButton = document.getElementById('submit-button');
//2. controllo se l'email inserita dall'utente è corretta-presente nella mia lista
const mail = document.querySelector('form');
mail.addEventListener(
    'submit',
    function (ValidateEmail) {
        const UserMail = document.getElementById('user-mail');
        console.log('UserMail', UserMail, typeof UserMail);
        console.log('UserMail.value', UserMail.value, typeof UserMail.value);
        console.log('ValidateEmail', ValidateEmail, typeof ValidateEmail);
        ValidateEmail.preventDefault(); 
        //2.5 SE è corretta eseguo----------------------------------------------------
        if (UserMail==emails[0] || UserMail==emails[1] || UserMail==emails[3]){
            console.log('email corretta')
        }
        //2.5 SE è sbagliata invece eseguo----------------------------------------------------
        else{
            console.log('Email sbagliata')
            alert('Email sbagliata')
        }
    }
)