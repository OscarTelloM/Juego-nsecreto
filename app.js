let numeroSecreto = 0;
let intento = 0;
let numeroMaximo = 10;
let listaNumerosSorteados = []
condicionesIniciales();


function condicionesIniciales() {
    asignarTextoElemento('h1', "Adivina el número")
    asignarTextoElemento('p', `Ingresa un número del 1 al ${numeroMaximo}`)
    numeroSecreto = generarNumeroSecreto();
    intento = 1;

}



function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('NumeroUsuario').value);

    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste en  ${intento} ${(intento == 1) ? 'intento' : "intentos"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número que introdujiste es mayor al número secreto')
        } else {
            asignarTextoElemento('p', 'El número que introdujiste es menor al número secreto')

        }
        limpiarCaja();
        intento++;
    }
    return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#NumeroUsuario').value = '';

}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', `Alcanzaste el máximo de ${numeroMaximo} intentos`)
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else
            listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
function reiniciarJuego() {

    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')
}


