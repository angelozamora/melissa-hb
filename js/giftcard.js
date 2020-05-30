//VARIANLES
let boton=document.querySelector(".boton-random");
let giftcontent=document.querySelector(".giftcard-content");
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

    if(giftcontent.className="giftcard-exito"){
        giftcontent.classList.remove('giftcard-exito');
    }

    var spinnerGif=document.getElementById('spinner');
    spinnerGif.style.display='block';

    let innerHTML=`
        <h2 class="titulo titulo2">Felicidades Hermosa!!</h2>
        <h1 class="titulo gift-valor">S/${numRandom}</h1>
        <h3 class="titulo condicion">ESTE PREMIO SOLO ES VALIDO SI LE DAS MUCHO AMOR Y CARIÑO AL TIO GUAPO DE TATY</h3>
    
    `;

    setTimeout(() => {
        spinnerGif.style.display='none';
        giftcontent.classList.add('giftcard-exito');
        resultado.innerHTML=innerHTML;
    },4000)

}