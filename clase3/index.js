/* let ingresanum = parseInt(prompt("INGRESAR NUMERO"));
for (i=1;i<=10; i++){
    let resultado = ingresanum * i;
    alert(ingresanum+"X"+i+"="+resultado);

} */

/* let entrada =prompt("ingresar un dato");

while (entrada !="ESC"){

    alert("el usuario ingreso"+entrada);
    entrada=prompt("ingresar otro dato");
} */

 let solicitud = parseInt(prompt("INGRESE DIA"))

for (i=1;i<=7; i++){

    while (solicitud!=0){
        switch (solicitud){
            case 1:
                alert("LUNES");
                break;
            case 2:
                alert("martes");
                break;
            default:
                alert("NUMERO INCORRECTO");
                break;
        }
            
        
    }
    
} 

