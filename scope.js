//ScopeGlobal
//Es decir que el scope global no puede acceder a las variables del scope local, en este caso la función
var nombre= "Ricardo";



//ScopeLocal
//Es decir que el scope local puede tener acceso a las variables o otras cosas que esten en el scope global    
function myFunction (){
    var Apellido="Orjuela";
    return nombre+" "+Apellido;
}

myFunction();
//retornara (Ricardo Orjuela)

nombre;
//retornara (Ricardo)
Apellido;
//retornara error porque la estamos llamando desde el scope global