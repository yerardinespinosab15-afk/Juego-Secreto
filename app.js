let numerosecreto = 0;
let intentos = 0;
const maxIntentos = 5;
let ListaNumerosSorteados = [];
let NumeroMaximo = 10;

console.log(numerosecreto);

function asignarTextoElemento(elemento, texto){
   let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;  
return;
}

function verificarIntento(){
    let numerodeusuario = parseInt(document.getElementById('valorUsuario').value);
    intentos++; // Incrementa los intentos en cada clic
    // El jugador acerto 
    if(numerodeusuario === numerosecreto) {
        asignarTextoElemento('p',`¡Acertaste el numero en ${intentos} ${(intentos ===1) ?'vez':'veces'}`);
        document.getElementById('reniciar').removeAttribute('disabled');
        document.getElementById('intentar').setAttribute('disabled', 'true');
    } else {
        //El jugador no acertó, pero tiene más intentos
        if (intentos < maxIntentos) {
            if (numerodeusuario > numerosecreto) {
                asignarTextoElemento('p',`El número secreto es menor. Te quedan ${maxIntentos - intentos} intentos.`);
        } else {
            asignarTextoElemento('p',`El número secreto es mayor. Te quedan ${maxIntentos - intentos} intentos.`);
        }
        limpiarcaja();
    } else {
            // El jugador se quedó sin intentos
            asignarTextoElemento('p', `¡Se agotaron tus ${maxIntentos} intentos! El número secreto era ${numerosecreto}.`);
            document.getElementById('reniciar').removeAttribute('disabled');
            document.getElementById('intentar').setAttribute('disabled', 'true');
        }
        
    return;
    }
           
    
}

function limpiarcaja(){
  document.querySelector('#valorUsuario'). value ='';
   
}


function generarnumerosecreto(){
    let NumeroGenerado =  Math.floor(Math.random()*NumeroMaximo)+1;
    
    

    console.log (NumeroGenerado);
    console.log (ListaNumerosSorteados);
 // Si ya sorteamos todos los números
  if (ListaNumerosSorteados.length == NumeroMaximo){
   asignarTextoElemento ('p',' Ya se sortearon todos los numeros posibles');
  } else{
    //si el numerogenerado esta incluido en la lista
    if (ListaNumerosSorteados.includes(NumeroGenerado)){
        return generarnumerosecreto();
    } else {
        ListaNumerosSorteados.push (NumeroGenerado);
        return NumeroGenerado;
    }
  }

} 

function CondicionesInicial(){
 asignarTextoElemento('h1','Juego del numero secreto!');
 asignarTextoElemento('p',`Indica un número del 1 al ${NumeroMaximo}. Tienes ${maxIntentos} intentos.`);
 numerosecreto = generarnumerosecreto();
intentos = 0; // Se inicializa en 0 para que el primer intento sea el 1
document.getElementById('intentar').removeAttribute('disabled');

}

function reniciarjuego(){
    // limpiar la caja
    limpiarcaja();
    // indicar mensaje de inicio de intervalo de numero
    // general el numero alatorio 
    //inicializar el numero de intentos 
    CondicionesInicial();
    // desabilitar el boton nuevo juego 
    document.querySelector('#reniciar').setAttribute('disabled','true');
    

}

CondicionesInicial();