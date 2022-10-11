
/*  const carrito =document.getElementById("carrito");

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
  .then(data => {
    let carrito = document.getElementById("carrito");
    data.forEach(element => {
      let li = document.createElement("li");
      li.innerHTML = `
                    <h1>${element.title}</h1>
                    
      `
      carrito.append(li);
    });
  });  */

   const traerDatos = async() => {
    const carrito =document.getElementById("carrito");
    fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await Response.json();
    data.forEach((element) => {
      const li = document.createElement("li");
      li.innerHTML = `
                <h1>${element.title}</h1>
                <p>${element.body}</p>
                `;
      carrito.append(li);
    });

  };
  traerDatos();