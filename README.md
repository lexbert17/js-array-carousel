##Esercizio

**Consegna:**
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot.
In allegato troverete markup con il codice html e css già fatti.
**MILESTONE 1**
Rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
**MILESTONE 2**
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
**BONUS:**
Aggiungere il **ciclo infinito** del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

##Soluzione

**dati**
array di immagini
**logica**
utilizzo un ciclo for e per ogni array creo un elemento immagine

al click della frecccia su, se l'indice < (lunghezza-1) dell' array tolgo la classe active dall' elemento corrente e lo aggiungo al nuovo indice

al click della freccia giù se l'indice è > 0  tolgo la classe active dall'elemento e lo decremento poi aggiungo la classe active al nuovo elemento
