//Variables
var  boton=document.getElementById("btn-login");
var user=document.getElementById("user");
var password=document.getElementById("password");
var formulario=document.getElementById("form")

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
        if(boton.classList.contains("boton-des")){
            boton.classList.remove("boton-des");
            boton.classList.add("boton-ingresar");
        }
        boton.disabled=false;
    }
    else{
        if(boton.classList.contains("boton-des")){
        }
        else{
            if(boton.classList.contains("boton-ingresar")){
                boton.classList.remove("boton-ingresar");
            }
            boton.classList.add("boton-des");
        }
        boton.disabled=true;
    }


}

function validarLongitud(campo){
    if(campo.value.length>0){
        campo.style.borderBottomColor="green"
    }
    else{
        campo.style.borderBottomColor="red"
    }
}

function ingresarApp(){
    let uservalue=user.value;
    let passwordvalue=password.value;

    if(uservalue==="zahu05" && passwordvalue==="zahu05"){
        formulario.action="opciones.html";
    }
}