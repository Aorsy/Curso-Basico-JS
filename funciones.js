//Declarativas se identifica por tener nombre la funcion y poderla llamar por el nombre de la función
function myFunction() {
    return 3;
}
myFunction();

/*Expresión se identifica por ser anonima ya que solo se puede llamar por el nombre de la variable
mas no por el de la funcion, ya que no tiene nombre*/
var myFunction = function(a,b){
    return a + b;
}

myFunction(5,5);
//Para que una funcion con parametros funcione debe enviarsele los parametros.