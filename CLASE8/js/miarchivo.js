
let names = prompt ("INGRESE NOMBRE DEL JUGADOR");
let catego=prompt ("INGRESE CATEGORIA DEL JUGADOR");
/* const jugadores = [ {id:1, nombre:"FEDERICO", categoria:"A"},
                    {id:2, nombre:"JUAN", categoria:"A"},
                    {id:3, nombre:"ENZO", categoria:"B"},
                    {id:4, nombre:"LUIS", categoria:"B"}]; */

const jugadores = [ {id:1, nombre:names, categoria:catego}];

for (const juga of jugadores){
  let contenedor = document.createElement("div");

  contenedor.innerHTML = `<h3> ID: ${juga.id} </h3>
                        <p> nombre: ${juga.nombre}</p>
                        <b> categoria: ${juga.categoria}</b>`;


  document.body.appendChild(contenedor);
}