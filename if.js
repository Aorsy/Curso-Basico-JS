if(false){
    console.log("Hola");
} else {
    console.log("soy falso")
}
//soy falso 

if(true){
    console.log("Hola");
} else if(){
    console.log("soy falso")
} else {

}

//------------------------

var edad=18;

if(edad === 18){//Si edad es exactamente igual a 18 entonces
    console.log("Puedes votar, sera tu 1ra vez");
} else if(edad >18){//Si edad es mayor a 18 entonces
    console.log("Puedes votar de nuevo");
} else {//Si edad no es ni exactamente igual a 18, ni es mayor a 18, entonces
    console.log("Aun no puedes votar");
}

//Sintaxis operador ternario
condition ? true : false;
//if---------{} else {}

var numero=1;

var resultado = numero === 1 ? "Sí soy un uno" : "No soy un uno";