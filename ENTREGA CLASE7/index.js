

let servicio1;
let precio1 = 0;
servicio1 = prompt(`¿Qué Servicio vas a pagar?
1- Cable
2- Telefono
3- Luz
`)

let servicio2;
let precio2 = 0;
servicio2 = prompt(`¿De Qué Empresa?
1- Fibertel
2- Telecom
3- Refsa
`)

class servicios {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.pagado = false;
    }
}

    const servicios = [];
   servicios.push (new servicios("servicio1", precio1));
   servicios.push (new servicios("servicio2", precio2));
    for (const servicio of servicios)
   {

    //definiendo la funcion

    const serviciosvarios = [
        { id: 1, nombres: "Cablevision", precio: 12000 },
        { id: 2, nombres: "Claro", precio: 1100 },
        { id: 3, nombres: "Luz y Agua", precio: 1200 },
        { id: 4, nombres: "Personal", precio: 100 },
        { id: 5, nombres: "Mega", precio: 1100 },
        { id: 6, nombres: "Vision", precio: 1150 },

    ];
    let nombres = prompt("Ingrese el nombre del servicio");
    let serviciobuscado = serviciosvarios.find(item => item.nombres === nombres);
    if(serviciobuscado === undefined){
    alert("Servicio no encontrado");
    }else{
    let mensaje = `
    Id: ${serviciobuscado.id}
    Nombre: ${serviciobuscado.nombres}
    Precio: $${serviciobuscado.precio}
    `;
    alert(mensaje);
    }
  


switch (servicio1) {
    case "1":
        servicio1 = "Cable";
        alert(`Se agregó ${servicio1}`)
        precio1 = 1000
        break;
    case "2":
        servicio2 = "Telecom";
        alert(`Se agregó ${servicio2}`)
        precio2= 1100
        break;
    case "3":
        servicio3= "Luz";
        alert(`Se agregó ${servicio3}`)
        precio1 = 1200
        break;
    default:
        break;
}

   }
