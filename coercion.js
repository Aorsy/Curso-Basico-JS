4+"7"; //47
4*"7"; //28
2+true; //3
false-3; //-3

//Coerciones implicitas es cuando el lenguaje nos ayuda a cambiar el tipo de valor
var a = 4 + "7";//El operador + se esta usando como concantenacion
//return undefined
typeof a;
//return "string"

var b = 4 * "7";
//return undefined
typeof b;
//number

//Coerciones explicitas es cuando obligamos a que cambie el tipo de valor
var a=20;
var b= a + "";
//undefined
console.log(b);
//20
typeof b;
//string   
var c = String(a); //convertir de numero a string
//undefined
console.log(c);
//20
typeof c;
//string
var d = Number(c); //convertir de string a numero;
//undefined 
typeof d;
//numero