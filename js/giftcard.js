//VARIANLES
let boton=document.querySelector(".btn-random");
let giftcard=document.querySelector(".giftcard");
let resultado=document.querySelector(".resultado");

//EVENT LISTENER
eventListener();

function eventListener(){
    boton.addEventListener("click",valorGiftCard);
}

//FUNCIONES
function numeroRandom(){
    return Math.random() * (151 - 90) + 90;
}

function valorGiftCard(){
    let numRandom=numeroRandom();
    numRandom=Math.round(numRandom); 

    resultado.innerHTML="";

    if(giftcard.className="giftcard-exito"){
        giftcard.classList.remove('giftcard-exito');
    }

    var spinnerGif=document.getElementById('spinner');
    spinnerGif.style.display='block';

    let innerHTML=`
        <h2 class="titulo2">Felicidades Hermosa!!</h2>
        <h1 class="gift-valor">S/${numRandom}</h1>
        <h3 class="titulo2">Este premio solo es valido si le das mucho amor y cariño al tio guapo de Taty</h3>
    
    `;

    setTimeout(() => {
        spinnerGif.style.display='none';
        giftcard.classList.add('giftcard-exito');
        resultado.innerHTML=innerHTML;
    },4000)

}