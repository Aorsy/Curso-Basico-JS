[] 

var frutas = ["Manzana","Pera","Cereza","Banano"];
console.log(frutas);//Para visualizar todos los elementos que tiene el array
console.log(frutas[0]);// Para visualizar el elemento que esta en una posicion especifica
console.log(frutas.length); //Para saber la longitud de un array

//metodos
var masFrutas = frutas.push("Uvas");//agregarle frutas al array inicial llamado "frutas"
//push agrega elementos al final de un array
//return var frutas = ["Manzana","Pera","Cereza","Banano","Uvas"];
var ultimo = frutas.pop("Uvas");// pop elimina el ultimo elemento que existe en el array;
//return var frutas = ["Manzana","Pera","Cereza","Banano"];
var nuevaLongitud = frutas.unshift("Uvas");//unshift agrega un elemento al array pero lo agrega en el inicio
//return var frutas = ["Uvas","Manzana","Pera","Cereza","Banano"];
var borrarFrutas = frutas.shift("Uvas"); //shift elimina el primer elemento que existe en el array;
//return var frutas = ["Manzana","Pera","Cereza","Banano"];
var posicion = frutas.indexof("Cereza");//para saber la posicion de Cereza
//posicion
//return 3;
//el index de un array en este caso es 0,1,2,3