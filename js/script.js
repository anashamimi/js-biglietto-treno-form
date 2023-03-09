/*
Descrizione:

Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:

Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. 
La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:

Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo due caselle di input e almeno un bottone per inviare i dati in pagina, in cui 
l’utente potrà inserire i dati e poi visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i 
centesimi sul prezzo). Questo richiederà un minimo di ricerca.

Nota per i non creativi:

Se non vi sentite particolarmente creativi, nello screenshot in allegato trovate un esempio di layout grafico. Potrebbe essere un’implementazione 
da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
*/


const biglietto = document.querySelector('.biglietto');

// Variabile nome utente

const nameBox = biglietto.querySelector('#user-name');

// Variabile km da percorrere
const ageBox = biglietto.querySelector('#user-age');

// Variabile età del passeggero
const kmBox = biglietto.querySelector('#user-km');




const calc = document.querySelector('#calc');

calc.addEventListener('click', function () {
    let age = ageBox.value;
    let km = kmBox.value;
    let name = nameBox.value;

    console.log(age);
    console.log(km);
    console.log(name);

    var prezzoTotale;
    var prezzoChilometro = 0.21;
    var scontoMinori = 0.20;
    var scontoOver65 = 0.40;
    let messaggio = `Secondo i dati inseriti (${km}km e ${age} anni) Il prezzo del viaggio è : € `;

    if (km && age && !isNaN(km) && !isNaN(age) && age <= 100 && Number.isInteger(+age)) {

        prezzoChilometro = prezzoChilometro * km;

        if (age < 18) {

            prezzoTotale = prezzoChilometro - (prezzoChilometro * scontoMinori);

        } else if (age >= 65) {


            prezzoTotale = prezzoChilometro - (prezzoChilometro * scontoOver65);

        } else {

            prezzoTotale = prezzoChilometro;

        }

        prezzoTotale = prezzoTotale.toFixed(2);
        messaggio += prezzoTotale;
        console.log(prezzoTotale);
    } else {

        messaggio = "I dati inseriti non sono corretti!";

    }


    biglietto.innerHTML += `<p>${messaggio}</p>`

    console.log(messaggio);

});




