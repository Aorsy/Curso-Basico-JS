/*Hoisting es cuando las variables y las funciones se procesan antes de que se ejecute cualquier tipo
de codigo*/

console.log(miNombre);
var miNombre = "Juan";
//va a retonar undefined porque la variable se inicializo despues(se le agrego un valor) y no antes del console.log


//lo que va a hacer JS
//LLEGA A (miNombre); y dice que hay algo y posiblemente miNombre es una variable
//entonces la declara var miNombre y le agrega el valor undefined;
//despues llega a linea console.log(miNombre);


/*Las funciones se pueden llamar antes de ser declaradas, pero si vamos a usar alguna variables
deben estar inicializadas antes de llamar la funcion*/
hey();

function hey(){
    console.log("Hola " + miNombre)
}

var miNombre="Juan";

//retorna Hola undefined
