/* Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Lo svolgimento va fatto usando un ciclo for è non usando metodi degli array (come includes, per esempio). */

// mail list
const invited = ["mario@gmx.com", "lucia@gmx.com", "giuseppe@gmx.com", "anna@gmx.com"];

// ask user mail
const user_mail = prompt("Inserisci la tua email per verificare l'accesso alla festa:");

// access denied variable
let access = false

// for to search mail in the list
for (i = 0; i < invited.length; i++) {
  if (invited[i] === user_mail) {
    access = true;
    break; // break cycle
  }
}
