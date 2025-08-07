/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del número secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10:';
*/

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados=[];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if (numeroSecreto === numeroDeUsuario) {
        asignarTextoElemento('p',`Acertaste al número en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    
    } else {
        //El usuario no acertó
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor')
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }

    return;
}


function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p',`Ya se sortearon todos los números posibles`);
    } 
    else
    {
          //si el numero generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } 
        else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }


  
    
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}:`);
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    intentos=1;
}

function reiniciarJuego() {
    //limpiar la caja
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Deshabilitar el botón de nuevo juego
    //Inicializar el número de intentos

    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
