//Inserimento finestre per inserire i dati
const Nome = prompt ("Inserisci il nome");

const Cognome = prompt ("Inserisci il cognome");

const Colore = prompt ("Qual'è il tuo colore preferito?");

//salvataggio delle informazioni una volta inserite
console.log(Nome); 
console.log(Cognome);
console.log(Colore);

//genera il risultato

const Password = `${Nome}${Cognome}${Colore}${22}` ;
console.log (Password);

//stampa il risultato

document.getElementById('Password').innerHTML = Password;

