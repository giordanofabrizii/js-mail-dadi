// Il giocatore gioca contro il computer.
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const numeroUtente = Math.floor(Math.random() * 6 + 1) 
const numeroCPU = Math.floor(Math.random() * 6 + 1) 

if (numeroUtente > numeroCPU) {
    console.log("Complimenti, hai vinto! \nIl tuo numero era " + numeroUtente + " e quello della CPU era " + numeroCPU);
} else if (numeroUtente < numeroCPU) {
    console.log("Peccato, hai perso! \nIl tuo numero era " + numeroUtente + " e quello della CPU era " + numeroCPU);
} else {
    console.log("Ritenta, questa volta e' finita in pareggio, sia te che il computer avevate il numero " + numeroCPU);
}