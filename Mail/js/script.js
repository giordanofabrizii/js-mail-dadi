const userEmail = prompt("Ciao, inserisci la tua email").toLowerCase();

const allowedEmails = ["esempio@email.com", "nome.cognome@email.it", "azienda@email.com", "info@email.it"];

if (allowedEmails.includes(userEmail)) {
    console.log("Perfetto, puoi accedere");
} else {
    console.log("Mi dispiace, non sei registrato");
}