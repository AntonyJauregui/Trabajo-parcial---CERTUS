var nombre = document.getElementById('nombre');
var email = document.getElementById('email');
var error = document.getElementById('error');
var mensajeria = document.getElementById('mensajeria');


error.style.color = 'red';

function EnviarMensaje(){
    console.log('Enviando Mensaje...');

    var mensajesError = [];


    if(nombre.value === null || nombre.value === '') {
        mensajesError.push("Ingresa tu nombre");}
    if(email.value === null || email.value === ''){
         mensajesError.push("Ingresa tu email");}
    if(mensajeria.value === null || mensajeria.value === '') {
            mensajesError.push("Ingresa tu mensaje");} 
    
        
    error.innerHTML =  mensajesError.join(",");
        
    return false;
}
