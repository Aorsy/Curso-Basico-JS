var op1="piedra";
var op2="papel";
var op3="tijera";

function game(jugador,maquina){
if(jugador === "piedra" && maquina==="tijera"){
    console.log("You are the winner");
} else if(jugador ==="piedra" && maquina==="papel") {
    console.log("You are the loser")
} else if(jugador ==="piedra" && maquina==="piedra") {
    console.log("Empate")
} 
}

game(op1,op3);