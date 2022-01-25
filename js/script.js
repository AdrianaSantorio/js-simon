/*
Descrizione:
Generare 5 numeri casuali e mostrarli in un alert all'utente.
Dall'ok  parte un timer di 30 secondi. (ricordate che l'alert blocca il flusso. il timer partirà a contare dopo che avete schiacciato ok.)
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri  sono stati indovinati dall'utente.
Bonus:
controllare che i numeri casuali siano diversi tra loro
controllare che l'utente non inserisca 2 volte lo stesso numero
*/


const getRandomNumber = (min, max) => Math.floor(Math.random() * (max -min) + min);

const cpuNumbers = [];

do {
    const newNumber= getRandomNumber(0, 100);
    if (!(cpuNumbers.includes(newNumber))) { 
        cpuNumbers.push(newNumber)}

} while (cpuNumbers.length < 5);

console.log(cpuNumbers);

alert(`Memorizza questi numeri!
${cpuNumbers}`);

//non c' era per niente bisogno che questa fosse fuori
//possiamo creare delle const min, max, tot, in modo da usarle tutte e non doverle ricambiare ovunque in caso di cambiamenti
const userNumbers = [];

const play = setTimeout(function() {

    do {
        const newNumber = parseInt(prompt('inserisci i numeri che ricordi!').trim());
        //questa poteva essere scritta tutta al contrario con le due condizioni prima e questi nell' else
        if (!isNaN(newNumber) && !(userNumbers.includes(newNumber))) {
            userNumbers.push(newNumber);
        } else if (isNaN(newNumber)) {
                    const errorMessage = alert('Devi inserire un numero!');
        } else if (userNumbers.includes(newNumber)) {
            const errorMessage = alert('Hai già inserito questo numero!');
        }

    } while (userNumbers.length < 5)

    const correctNumbers = userNumbers.filter((number) => {
        if (cpuNumbers.includes(number)){
            return true;
        }
        return false;
    });

    //todo: prepararsi l' opzione se non ne ha indovinato neanche uno!!!
    const message = alert(`Hai indovinato ${correctNumbers.length} numeri!
    I numeri corretti sono ${correctNumbers}`);

    

}, 30000);

console.log(userNumbers);