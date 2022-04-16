var op1="piedra";
var op2="papel";
var op3="tijera";

//Evalua la variable numero
function juego(jugador,maquina){
switch(true){
    case jugador === "piedra" && maquina==="papel"://Se divide en casos, Si es 1 entonces hara...
        console.log("You are the loser");
        break;//se sale del switch para que no siga evaluando
    case jugador === "piedra" && maquina==="tijera":
        console.log("You are the winner");
        break;
    case jugador===maquina:
        console.log("Empate");
        break;
    default://Si ningun caso se cumple entonces hara...
        console.log("No soy nada");
}}