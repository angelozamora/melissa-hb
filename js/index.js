//Variables
var  boton=document.getElementById("btn-login");
var user=document.getElementById("usuario");
var password=document.getElementById("password");
var formulario=document.getElementById("formulario")

//Event Listener
eventListener();

function eventListener(){
    document.addEventListener("DOMContentLoaded",iniciarApp);
    user.addEventListener("blur",validarCampo);
    password.addEventListener("blur",validarCampo);
    boton.addEventListener("click",ingresarApp);
}

//Function
function iniciarApp(){
    boton.disabled=true;
}

function validarCampo(){
    validarLongitud(this);

    if(user.value!=="" && password.value!==""){
        if(boton.classList.contains("btn-off")){
            boton.classList.remove("btn-off");
            boton.classList.add("btn-on");
        }
        boton.disabled=false;
    }
    else{
        if(boton.classList.contains("btn-off")){
        }
        else{
            if(boton.classList.contains("btn-on")){
                boton.classList.remove("btn-on");
            }
            boton.classList.add("btn-off");
        }
        boton.disabled=true;
    }


}

function validarLongitud(campo){
    if(campo.value.length>0){
        campo.style.borderBottom="2px solid #58D68D";
    }
    else{
        campo.style.borderBottomColor="red";
    }
}

function ingresarApp(){
    let uservalue=user.value;
    let passwordvalue=password.value;

    if(uservalue==="zahu05" && passwordvalue==="zahu05"){
        formulario.action="opciones.html";
    }
}