//VARIANLES
let boton=document.querySelector(".btn-random");
let sorteo=document.querySelector(".sorteo");
let resultado=document.querySelector(".resultado");

let tipo=["","webp","jpg","webp","jpg","jpg","jpg","jpg","jpg","jpg","jpg","jpg","jpg","jpg","jpg","jpg","webp","jpg","jpg","jpg","jpg","jpg","jpg","jpg","jpg","jpg","jpg","jpg","jpg","jpg"];

let url=[

    "",
    "https://www.metro.pe/kuzler-smartband-fitness-tracker-darik-001-784673/p#wong_ver_mas",
    "https://www.linio.com.pe/p/xiaomi-redmi-airdots-negro-xiaomi-mi-band-4-negro-opk408?qid=9bda30a63f1ed5e7f9bf74051c9f3e13&oid=XI061EL132UZ4LPE&position=30&sku=XI061EL132UZ4LPE",
    "https://www.metro.pe/xiaomi-smartband-4-786265/p#wong_ver_mas",
    "https://www.linio.com.pe/p/la-tienda-88-collar-mujer-corazo-n-entrelazado-oro-rosa-jrcrw6?qid=f4e7e65191a13e2b7814a6a024ec8876&oid=LA945FA40USXLPE&position=8&sku=LA945FA40USXLPE  ",
    "https://www.linio.com.pe/p/za-ffira-collar-mujer-rose-heart-con-cristales-swarovski-rosado-jqvhyh?qid=f4e7e65191a13e2b7814a6a024ec8876&oid=ZA773FA30WXTPEAMZ&position=22&sku=ZA773FA30WXTPEAMZ",
    "https://www.linio.com.pe/p/collar-guess-ubn85106-ynz9xo?qid=1f781d74fbd1fdee205a7eed0be9a497&oid=GU873FA01V8QOLPE&position=138&sku=GU873FA01V8QOLPE",
    "https://www.falabella.com.pe/falabella-pe/product/881683985/Reloj/881683986",
    "https://www.falabella.com.pe/falabella-pe/product/881684071/Reloj/881684073",
    "https://www.falabella.com.pe/falabella-pe/product/881684071/Reloj/881684072",
    "https://www.falabella.com.pe/falabella-pe/product/881691603/Set-Reloj-Malla-Collar-Red/881691604",
    "https://www.falabella.com.pe/falabella-pe/product/881757599/Baul-charm-pompom/881757600",
    "https://www.falabella.com.pe/falabella-pe/product/881683964/Reloj-Metal-Muj-16B18M/881683965",
    "https://simple.ripley.com.pe/ziol-cartera-wilma-2012238842640?color_80=rosado",
    "https://www.falabella.com.pe/falabella-pe/product/17025392/Billetera/17025393",
    "https://www.falabella.com.pe/falabella-pe/product/17025580/Cartera/17025581",
    "https://www.metro.pe/nex-audifonos-earbuds-act011-772531/p#wong_ver_mas",
    "https://www.falabella.com.pe/falabella-pe/product/881691607/Set-Reloj-Negro-Collar-Ent/881691608",
    "https://www.linio.com.pe/p/yanmai-sf-920-grabacion-de-sonido-microfono-condensador-profesional-con-tripode-longitud-de-cable-2-0-m-negro--lgjxxm?qid=f9c197e7db1796f2080fdcb827d91683&oid=OE991EL1CUUE8LPE&position=3&sku=OE991EL1CUUE8LPE",
    "https://www.linio.com.pe/p/pop-disney-mulan-mushu-w-gong-vb7h1u?qid=1683a334189ce7e73e8ee6a59cc596af&oid=FU615TB0FX6XILPE&position=675&sku=FU615TB0FX6XILPE",
    "https://www.linio.com.pe/p/pocket-monsters-pikachu-juguetes-para-nin-os-qdrw6e?qid=87f79a720fda9f28ded2dd306ecc2190&oid=GE006TB0W653YLPE&position=805&sku=GE006TB0W653YLPE",
    "https://www.linio.com.pe/p/pop-pusheen-pusheen-w-pizza-vdi19g?qid=14ca757d44a83d682a3cd404ed3a3e53&oid=FU615TB0DNESWLPE&position=95&sku=FU615TB0DNESWLPE",
    "https://www.linio.com.pe/p/bolso-de-playa-coral-st-stefano-cocci-para-mujer-rosa-s0p8z4?qid=490839eab9e99fa78319581d8d5883fd&oid=ST483FA0R34ZQLPE&position=1&sku=ST483FA0R34ZQLPE",
    "https://www.linio.com.pe/p/melocoto-n-simple-carta-en-forma-de-corazo-n-collar-temperamento-cadena-de-clavi-cula-salvaje-lfp6nk?qid=43ec2ba68e73d2a54fcb893fb66ea9c5&oid=GE582FA1DNUPSLPE&position=898&sku=GE582FA1DNUPSLPE",
    "https://www.falabella.com.pe/falabella-pe/product/16242736/Lentes-Foster-Grant-Vivant/16242736",
    "https://www.linio.com.pe/p/europa-y-america-estilo-hembra-laton-chapado-oro-pulsera-joyeria-ajo-salud-magne-tico-abierto-taman-o-8mm-17cm-oro--rzoymw?qid=870830c007756629fd0ca0974db253c8&oid=OE991FA0SANSGLPE&position=1&sku=OE991FA0SANSGLPE",
    "https://www.linio.com.pe/p/moda-pulsera-acero-inoxidable-blanco-porcelana-joyeri-a-pulsera-brazalete-de-pareja-vdihhy?qid=e1934ea52973c3e44551206ac8b478c4&oid=GE579FA0DEKQWLPE&position=10&sku=GE579FA0DEKQWLPE",
    "https://www.linio.com.pe/p/el-corazo-n-hueco-de-amor-el-collar-de-acero-inoxidable-joyas-regalo-del-di-a-de-san-valenti-n-vb4pjk?qid=db08444c051efe1b61449e4385e36487&oid=GE579FA0FQLFSLPE&position=244&sku=GE579FA0FQLFSLPE",
    "https://www.falabella.com.pe/falabella-pe/product/881538602/Billetera/881538603",
    "https://www.falabella.com.pe/falabella-pe/product/881749225/Lentes-Redondo-Rosa/881749226"

]

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

    console.log("regalo1 :"+regalo1);
    console.log("regalo2 :"+regalo2);

    if(regalo1===regalo2){
        regalo2=numeroRandom();
        regalo2=Math.round(regalo2);
        
        console.log("regalo1 :"+regalo1);
        console.log("regalo2 :"+regalo2);
    }


    resultado.innerHTML="";

    if(sorteo.className="sorteo-exito"){
        sorteo.classList.remove('sorteo-exito');
    }

    var spinnerGif=document.getElementById("spinner");
    spinnerGif.style.display="block";


    innerHTML=`
        <h2 class="titulo2">Felicidades Hermosa!!</h2>
        <div class="regalo-content">
            <div class="regalo">
            <img src="img/Regalos/regalo${regalo1}00.${tipo[regalo1]}" alt="" class="regalo-imagen">
            </div>
            <a href="${url[regalo1]}" class="ver-url" >VER REGALO</a>
        </div>

        <div class="regalo-content">
            <div class="regalo">
            <img src="img/Regalos/regalo${regalo2}00.${tipo[regalo2]}" alt="" class="regalo-imagen">
            </div>
            <a href="${url[regalo2]}" class="ver-url" >VER REGALO</a>
        </div>
        <h3 class="titulo2">Este premio solo es valido si le das mucho amor y cariño al tio guapo de Taty</h3>
    
    `;


    setTimeout(()=>{
        spinnerGif.style.display="none";
        sorteo.classList.add('sorteo-exito');
        resultado.innerHTML=innerHTML;
    },4000)
}