/* Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)
 */

// - Seleziono l'immagine nel documento HTML

const lampImg = document.querySelector('.lamp-img');

// - Seleziono il bottone nel documento HTML

const btnEl = document.getElementById('button');
console.log(btnEl);


// - Creo una funzione che al click del bottone accendi la lampadina (cambi l'immagine)

btnEl.addEventListener('click', function(){

    const turnOn = lampImg.getAttribute('src').includes('yellow');

    if(turnOn){
        lampImg.setAttribute('src', './assets/img/white_lamp.png');
        btnEl.innerText= "Accendi";

    } else{
        lampImg.setAttribute('src', './assets/img/yellow_lamp.png');
        btnEl.innerText= "Spegni";
    }
}
)