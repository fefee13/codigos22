
//creo la clase sueldos con constructor
class Sueldos {
    constructor(mes, monto){
        this.mes = mes;
        this.monto=monto;
    }
}

const sueldostotales= [];
const sueldo1=new Sueldos ("Enero",150);
const sueldo2=new Sueldos ("Febrero",300);
const sueldo3=new Sueldos ("Marzo",500);

//guardo en array 
sueldostotales.push (sueldo1);
sueldostotales.push (sueldo2);
sueldostotales.push (sueldo3);

console.log(sueldostotales);

let total = sueldostotales.reduce((sumosueldos,sueldo) => sumosueldos+ sueldo.monto,0);
console.log(total);

sueldostotales