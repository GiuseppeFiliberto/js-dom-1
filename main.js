/* Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)
 */

// - Seleziono l'immagine nel documento HTML

const lampImg = document.querySelector('.lamp-img');

// - Seleziono il bottone nel documento HTML

const btnEl = document.querySelector('button');

// - Creo una funzione che al click del bottone accendi la lampadina (cambi l'immagine)

btnEl.addEventListener('click', function(){

    let turnOn = lampImg.getAttribute('src');

    if(turnOn){
        
    }})