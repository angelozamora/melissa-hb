//VARIANLES
let boton=document.querySelector(".boton-random");
let sorteocontent=document.querySelector(".sorteo-content");
let resultado=document.querySelector(".resultado");

let tipo=["webp","jpg","webp","jpg","jpg","jpg","jpg","jpg","jpg","jpg","jpg","jpg","jpg","jpg","jpg","webp","jpg","jpg","jpg","jpg","jpg","jpg","jpg","jpg","jpg","jpg","jpg","jpg","jpg"];

//EVENT LISTENER
eventListener();

function eventListener(){
    boton.addEventListener("click",sorteoRegalos);
}

//FUNCIONES
function numeroRandom(){
    return Math.random() * (30 - 1) + 1;
}

function sorteoRegalos(){
    let regalo1=numeroRandom();
    let regalo2=numeroRandom();

    regalo1=Math.round(regalo1); 
    regalo2=Math.round(regalo2);

    console.log(regalo1);
    console.log(regalo2);

    if(regalo1===regalo2){
        regalo2=numeroRandom();
        regalo2=Math.round(regalo2);
        
        console.log(regalo1);
        console.log(regalo2);
    }


    resultado.innerHTML="";

    if(sorteocontent.className="sorteo-exito"){
        sorteocontent.classList.remove('sorteo-exito');
    }

    var spinnerGif=document.getElementById("spinner");
    spinnerGif.style.display="block";


    innerHTML=`
        <h2 class="titulo titulo2">Felicidades Hermosa!!</h2>
        <div class="regalo">
            <div class="regalo-imagen">
            <img src="img/Regalos/regalo${regalo1}00.${tipo[regalo1]}" alt="" class="regaloImg">
            </div>
            <h1 class="nombre-producto">TITULO</h1>
        </div>

        <div class="regalo">
            <div class="regalo-imagen">
            <img src="img/Regalos/regalo${regalo2}00.${tipo[regalo2]}" alt="" class="regaloImg">
            </div>
            <h1 class="nombre-producto">TITULO</h1>    
        </div>
        <h3 class="titulo condicion">ESTE PREMIO SOLO ES VALIDO SI LE DAS MUCHO AMOR Y CARIÑO AL TIO GUAPO DE TATY</h3>
    
    `;


    setTimeout(()=>{
        spinnerGif.style.display="none";
        sorteocontent.classList.add('sorteo-exito');
        resultado.innerHTML=innerHTML;
    },4000)
}