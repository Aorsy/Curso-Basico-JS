var numero=1;

//Evalua la variable numero
switch(numero){
    case 1://Se divide en casos, Si es 1 entonces hara...
        console.log("Soy uno");
        break;//se sale del switch para que no siga evaluando
    case 10:
        console.log("Soy un 10");
        break;
    case 100:
        console.log("Soy un 100");
        break;
    default://Si ningun caso se cumple entonces hara...
        console.log("No soy nada");
}