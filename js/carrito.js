//VARIABLES
var carritocontent=document.querySelector(".carrito-content");
var listacompras=document.querySelector("#lista-compras tbody");
var vaciarcarrito=document.querySelector("#vaciar-carrito");


//EVENTLISTENER
eventListener();

function eventListener(){
    carritocontent.addEventListener("click",agregarCompra);
    vaciarcarrito.addEventListener("click",vaciarCarro);
    listacompras.addEventListener("click",borarCompra);
}


//FUNCTION
function agregarCompra(e){
    e.preventDefault();
    if(e.target.classList.contains("btn-comprar")){
        var infoCompra=e.target.parentElement;
        console.log(infoCompra.querySelector("img"));
    }

    leerCompra(infoCompra)
}

function leerCompra(compra){
    var infoRegalo={
        imagen : compra.querySelector("img").src,
        direccion : compra.querySelector("img").alt,
        id : compra.querySelector("img").getAttribute("data-id")
    }

    agregarCarrito(infoRegalo);
}

function agregarCarrito(regalo){
    let row=document.createElement("tr");

    row.innerHTML=`
        <td class="td1">
            <img src="${regalo.imagen}" alt="" class="regalo-imagen">
        </td>
        <td><a class="ver-url" href="${regalo.direccion}">VER</a></td>
        <td>
            <a href="#" class="borrar-curso"  data-id=${regalo.id}>X</a>
        </td>
    `;

    listacompras.appendChild(row);


}


function vaciarCarro(){
    listacompras.innerHTML="";
}

function borarCompra(e){
    e.preventDefault();
    if(e.target.classList.contains("borrar-curso")){
        var cursoBorar=e.target.parentElement.parentElement;
        cursoBorar.remove();
    }
}