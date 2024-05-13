let numberList = [];

for (let i = 0; i < 6; i++) {
    let userNumber = Number.parseInt(prompt("Ciao,inserisci un numero"));

    if (userNumber % 2 == 0) { // < se pari
        numberList.push(userNumber);
    }
}

console.log(numberList.sort((a, b) => a - b))